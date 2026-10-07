'use strict';
// Client-specific guards. Keep the approved TANEM production template untouched.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const read=p=>fs.readFileSync(p,'utf8');
const mobile=read('mobile.js'),desktop=read('desktop.js');
const mobileCSS=read('mobile.css'),desktopCSS=read('desktop.css'),mobileOverride=read('mobile-overrides.css');
const ctx={window:{}};
vm.runInNewContext(read('site-data.js'),ctx);
const site=ctx.window.TANEM_SITE_DATA;
assert.equal(site.mode,'production');
assert.equal(site.services.length,39);
function formatter(code,which){
  const match=code.match(/function formatNailRoomDuration\(raw,lang\)\{[\s\S]*?\n\}/);
  assert(match,which+': compact duration renderer missing');
  return vm.runInNewContext('('+match[0]+')');
}
const mob=formatter(mobile,'mobile'),desk=formatter(desktop,'desktop');
const cases=[
  ['15 мин.','ru','15м'],
  ['30 мин.','ru','30м'],
  ['60 мин.','ru','1ч'],
  ['90 мин.','ru','1ч30м'],
  ['105 мин.','ru','1ч45м'],
  ['120 мин.','ru','2ч'],
  ['165 мин.','ru','2ч45м'],
  ['165 мин.','en','2h45m'],
  ['165 мин.','hy','2ժ45ր'],
  ['90 րոպե','hy','1ժ30ր'],
  ['30 min','en','30m'],
  ['1,5 ч','ru','1ч30м'],
  ['2 h','en','2h']
];
for(const [raw,lang,expected] of cases){
 assert.equal(mob(raw,lang),expected,'mobile '+raw+' '+lang);
 assert.equal(desk(raw,lang),expected,'desktop '+raw+' '+lang);
}
const durationMatcher=mobile.match(/const isDuration=x=>(.+);/);
assert(durationMatcher,'mobile service duration predicate missing');
const isDuration=vm.runInNewContext('(x=>'+durationMatcher[1]+')');
for(const service of site.services){
 assert(isDuration(service.duration.ru),'mobile hides duration of '+service.id);
 for(const lang of ['ru','en','hy']){
  assert(mob(service.duration[lang],lang),'mobile duration missing '+service.id+' '+lang);
  assert(desk(service.duration[lang],lang),'desktop duration missing '+service.id+' '+lang);
 }
}
assert(mobile.includes("mobileDurationLabel(duration)"),'mobile duration markup missing');
assert(desktop.includes("desktopDurationLabel(duration)"),'desktop duration markup missing');
assert(mobile.includes("left:delta,top:0,behavior:'smooth'"),'navigation must scroll horizontally only');
assert(mobile.includes("heroEdge-32")&&mobile.includes("heroEdge+8"),'nav show/hide hysteresis missing');
assert(!mobileCSS.includes('transform:translateY(-110%)'),'legacy vertical nav animation remains');
assert(mobileCSS.includes('overflow-x:auto;overflow-y:hidden'),'navigation must suppress vertical overflow');
assert(mobileCSS.includes('visibility:hidden')&&mobileCSS.includes('visibility:visible'),'opacity-only visibility rule missing');
assert(desktopCSS.includes('transform:translateX(-6mm)!important'),'desktop duration needs exact left shift');
assert(!desktopCSS.includes('transform:translateX(-2mm)!important'),'retired desktop position still present');
assert(mobileOverride.includes('--mobile-service-time-width:42px'),'standard mobile time rail changed');
assert(mobileOverride.includes('--mobile-service-time-width:40px'),'narrow mobile time rail changed');
assert(mobileOverride.includes('padding:3px 3px!important;margin:0!important;white-space:nowrap!important'),'compact time badge padding missing');
assert(site.contacts.booking.some(x=>x.url==='https://widget.sonline.su/ru/services/?placeid=775168886'),'booking URL changed');
console.log('PASS: 39 Nail Room services have recognized durations across RU/EN/HY, precise formatting, fixed nav and preserved service rail geometry.');
