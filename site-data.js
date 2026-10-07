(function(global){
'use strict';
const data={
  "schemaVersion": 1,
  "mode": "production",
  "country": "AM",
  "locales": [
    "ru",
    "en",
    "hy"
  ],
  "defaultLocale": "hy",
  "salon": {
    "name": {
      "ru": "Nail Room",
      "en": "Nail Room",
      "hy": "Nail Room"
    },
    "kind": {
      "ru": "Салон маникюра и педикюра",
      "en": "Nail salon",
      "hy": "Մատնահարդարման և ոտնահարդարման սրահ"
    },
    "city": {
      "ru": "Ереван",
      "en": "Yerevan",
      "hy": "Երևան"
    },
    "address": {
      "ru": "проспект Саят-Нова, 18",
      "en": "18 Sayat-Nova Ave",
      "hy": "Սայաթ-Նովայի պողոտա, 18"
    },
    "fullAddress": {
      "ru": "18 Sayat-Nova Ave, Yerevan 0060, Армения",
      "en": "18 Sayat-Nova Ave, Yerevan 0060, Армения",
      "hy": "18 Sayat-Nova Ave, Yerevan 0060, Армения"
    },
    "heroDescription": {
      "ru": "Ваша красота. Ваша уверенность.",
      "en": "Your beauty. Your confidence.",
      "hy": "Ձեր գեղեցկությունը։ Ձեր վստահությունը։"
    },
    "about": {
      "ru": "В основе нашей работы — профессиональный подход, внимание к деталям и уважение к индивидуальности каждого гостя. Мы создаём комфортное пространство, где качество и забота остаются главным приоритетом.",
      "en": "Our work is built on professionalism, attention to detail, and respect for every guest’s individuality. We create a comfortable space where quality and care remain our highest priorities.",
      "hy": "Մեր աշխատանքի հիմքում մասնագիտական մոտեցումն է, ուշադրությունը մանրուքներին և հարգանքը յուրաքանչյուր հյուրի անհատականության նկատմամբ։ Մենք ստեղծում ենք հարմարավետ միջավայր, որտեղ որակն ու հոգատարությունը մնում են գլխավոր առաջնահերթությունները։"
    }
  },
  "schedule": {
    "timezone": "Asia/Yerevan",
    "periods": [
      {
        "days": [1, 2, 3, 4, 5, 6, 7],
        "open": "10:00",
        "close": "20:00"
      }
    ],
    "fallback": {
      "ru": "График уточняйте при записи",
      "en": "Confirm opening hours when booking",
      "hy": "Աշխատանքային ժամերը ճշտեք գրանցվելիս"
    }
  },
  "contacts": {
    "phone": "+374 99 525505",
    "phoneLabel": {
      "ru": "Позвонить",
      "en": "Call",
      "hy": "Զանգահարել"
    },
    "messengerUrl": "",
    "messengerLabel": {
      "ru": "",
      "en": "",
      "hy": ""
    },
    "messengerHandle": "",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=Nail%20Room%20Yerevan&query_place_id=ChIJMRHE4y29akARZ84GytMLYjM",
    "mapEmbedUrl": "https://www.google.com/maps?q=18+Sayat-Nova+Ave+Yerevan&output=embed",
    "reviewsUrl": "https://www.google.com/maps/search/?api=1&query=Nail%20Room%20Yerevan&query_place_id=ChIJMRHE4y29akARZ84GytMLYjM",
    "booking": [
      {
        "type": "online",
        "label": {
          "ru": "Онлайн-запись",
          "en": "Book online",
          "hy": "Առցանց գրանցում"
        },
        "url": "https://widget.sonline.su/ru/services/?placeid=775168886"
      }
    ]
  },
  "rating": {
    "value": 4.8,
    "count": 76
  },
  "media": {
    "logo": "",
    "hero": [
      {
        "src": "hero.webp",
        "alt": {
          "ru": "Nail Room — салон в Ереване",
          "en": "Nail Room salon in Yerevan",
          "hy": "Nail Room սրահը Երևանում"
        }
      }
    ],
    "about": "profile.webp",
    "portfolio": [
      {
        "src": "gallery-01.webp",
        "alt": {
          "ru": "Ногтевые работы Nail Room",
          "en": "Nail Room nail designs",
          "hy": "Nail Room-ի եղունգների աշխատանքներ"
        }
      },
      {
        "src": "gallery-02.webp",
        "alt": {
          "ru": "Ногтевые работы Nail Room",
          "en": "Nail Room nail designs",
          "hy": "Nail Room-ի եղունգների աշխատանքներ"
        }
      },
      {
        "src": "gallery-03.webp",
        "alt": {
          "ru": "Ногтевые работы Nail Room",
          "en": "Nail Room nail designs",
          "hy": "Nail Room-ի եղունգների աշխատանքներ"
        }
      },
      {
        "src": "gallery-04.webp",
        "alt": {
          "ru": "Ногтевые работы Nail Room",
          "en": "Nail Room nail designs",
          "hy": "Nail Room-ի եղունգների աշխատանքներ"
        }
      },
      {
        "src": "gallery-05.webp",
        "alt": {
          "ru": "Ногтевые работы Nail Room",
          "en": "Nail Room nail designs",
          "hy": "Nail Room-ի եղունգների աշխատանքներ"
        }
      },
      {
        "src": "gallery-06.webp",
        "alt": {
          "ru": "Ногтевые работы Nail Room",
          "en": "Nail Room nail designs",
          "hy": "Nail Room-ի եղունգների աշխատանքներ"
        }
      },
      {
        "src": "gallery-07.webp",
        "alt": {
          "ru": "Ногтевые работы Nail Room",
          "en": "Nail Room nail designs",
          "hy": "Nail Room-ի եղունգների աշխատանքներ"
        }
      }
    ],
    "gallery": {
      "Салон": [
        {
          "src": "gallery-23.webp",
          "alt": {
            "ru": "Интерьер Nail Room",
            "en": "Nail Room salon interior",
            "hy": "Nail Room սրահի ինտերիեր"
          }
        },
        {
          "src": "gallery-24.webp",
          "alt": {
            "ru": "Интерьер Nail Room",
            "en": "Nail Room salon interior",
            "hy": "Nail Room սրահի ինտերիեր"
          }
        },
        {
          "src": "gallery-25.webp",
          "alt": {
            "ru": "Интерьер Nail Room",
            "en": "Nail Room salon interior",
            "hy": "Nail Room սրահի ինտերիեր"
          }
        }
      ],
      "Маникюр": [
        {
          "src": "gallery-01.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-02.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-03.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-04.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-05.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-06.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-07.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-08.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-09.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-10.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-11.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-12.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-13.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-14.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-15.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-16.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-17.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-18.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-19.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-20.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-21.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        },
        {
          "src": "gallery-22.webp",
          "alt": {
            "ru": "Ногтевые работы Nail Room",
            "en": "Nail Room nail designs",
            "hy": "Nail Room-ի եղունգների աշխատանքներ"
          }
        }
      ]
    },
    "desktopGalleryLimits": {
      "Салон": 3,
      "Маникюр": 22
    }
  },
  "categoryLabels": {
    "Маникюр": {
      "ru": "Маникюр",
      "en": "Manicure",
      "hy": "Մատնահարդարում"
    },
    "Педикюр": {
      "ru": "Педикюр",
      "en": "Pedicure",
      "hy": "Ոտնահարդարում"
    }
  },
  "categoryOrder": [
    "Маникюр",
    "Педикюр"
  ],
  "services": [
    {
      "id": "nail-room-01",
      "category": "Маникюр",
      "title": {
        "ru": "Маникюр",
        "en": "Manicure",
        "hy": "Մատնահարդարում"
      },
      "price": "3 000–4 000 ֏",
      "duration": {
        "ru": "30 мин.",
        "en": "30 min",
        "hy": "30 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-02",
      "category": "Маникюр",
      "title": {
        "ru": "Японский маникюр",
        "en": "Japanese manicure",
        "hy": "Ճապոնական մատնահարդարում"
      },
      "price": "6 000 ֏",
      "duration": {
        "ru": "60 мин.",
        "en": "60 min",
        "hy": "60 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-03",
      "category": "Маникюр",
      "title": {
        "ru": "Покрытие лаком",
        "en": "Nail polish application",
        "hy": "Լաքապատում"
      },
      "price": "2 000–3 000 ֏",
      "duration": {
        "ru": "30 мин.",
        "en": "30 min",
        "hy": "30 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-04",
      "category": "Маникюр",
      "title": {
        "ru": "Маникюр + Покрытие лаком",
        "en": "Manicure + nail polish",
        "hy": "Մատնահարդարում + Լաքապատում"
      },
      "price": "3 000–4 000 ֏",
      "duration": {
        "ru": "60 мин.",
        "en": "60 min",
        "hy": "60 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-05",
      "category": "Маникюр",
      "title": {
        "ru": "Маникюр + покрытие гель-лаком",
        "en": "Manicure + gel polish",
        "hy": "Մատնահարդարում + գելլաք (շելլաք)"
      },
      "price": "7 000–8 000 ֏",
      "duration": {
        "ru": "90 мин.",
        "en": "90 min",
        "hy": "90 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-06",
      "category": "Маникюр",
      "title": {
        "ru": "Маникюр + гель-лак — специальные часы ✨",
        "en": "Manicure + gel polish — special hours ✨",
        "hy": "Մատնահարդարում + գելլաք — հատուկ ժամեր ✨"
      },
      "price": {
        "ru": "от 6 000 ֏",
        "en": "from 6 000 ֏",
        "hy": "սկսած 6 000 ֏"
      },
      "duration": {
        "ru": "90 мин.",
        "en": "90 min",
        "hy": "90 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-07",
      "category": "Маникюр",
      "title": {
        "ru": "Снятие гель-лака",
        "en": "Gel polish removal",
        "hy": "Գելլաքի (շելլաք) հեռացում"
      },
      "price": "1 000 ֏",
      "duration": {
        "ru": "15 мин.",
        "en": "15 min",
        "hy": "15 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-08",
      "category": "Маникюр",
      "title": {
        "ru": "Снятие нарощенных ногтей",
        "en": "Nail extension removal",
        "hy": "Լիցքի հեռացում"
      },
      "price": {
        "ru": "от 2 000 ֏",
        "en": "from 2 000 ֏",
        "hy": "սկսած 2 000 ֏"
      },
      "duration": {
        "ru": "30 мин.",
        "en": "30 min",
        "hy": "30 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-09",
      "category": "Маникюр",
      "title": {
        "ru": "Укрепление ногтей",
        "en": "Nail strengthening",
        "hy": "Եղունգների ամրեցում"
      },
      "price": {
        "ru": "от 5 000 ֏",
        "en": "from 5 000 ֏",
        "hy": "սկսած 5 000 ֏"
      },
      "duration": {
        "ru": "30 мин.",
        "en": "30 min",
        "hy": "30 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-10",
      "category": "Маникюр",
      "title": {
        "ru": "Укрепление одного ногтя",
        "en": "Strengthening one nail",
        "hy": "1 մատի ամրեցում"
      },
      "price": "500 ֏",
      "duration": {
        "ru": "15 мин.",
        "en": "15 min",
        "hy": "15 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-11",
      "category": "Маникюр",
      "title": {
        "ru": "Наращивание одного ногтя",
        "en": "One-nail extension",
        "hy": "1 մատի լիցք"
      },
      "price": "1 000 ֏",
      "duration": {
        "ru": "30 мин.",
        "en": "30 min",
        "hy": "30 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-12",
      "category": "Маникюр",
      "title": {
        "ru": "Дизайн одного ногтя",
        "en": "One-nail design",
        "hy": "1 մատի դիզայն"
      },
      "price": {
        "ru": "от 500 ֏",
        "en": "from 500 ֏",
        "hy": "սկսած 500 ֏"
      },
      "duration": {
        "ru": "15 мин.",
        "en": "15 min",
        "hy": "15 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-13",
      "category": "Маникюр",
      "title": {
        "ru": "Трендовый дизайн",
        "en": "Trendy nail design",
        "hy": "Թրենդային դիզայն"
      },
      "price": {
        "ru": "от 3 000 ֏",
        "en": "from 3 000 ֏",
        "hy": "սկսած 3 000 ֏"
      },
      "duration": {
        "ru": "30 мин.",
        "en": "30 min",
        "hy": "30 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-14",
      "category": "Маникюр",
      "title": {
        "ru": "Френч",
        "en": "French manicure",
        "hy": "Ֆրանսիական մատնահարդարում"
      },
      "price": {
        "ru": "от 2 000 ֏",
        "en": "from 2 000 ֏",
        "hy": "սկսած 2 000 ֏"
      },
      "duration": {
        "ru": "30 мин.",
        "en": "30 min",
        "hy": "30 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-15",
      "category": "Маникюр",
      "title": {
        "ru": "Омбре",
        "en": "Ombre design",
        "hy": "Օմբրե"
      },
      "price": "3 000 ֏",
      "duration": {
        "ru": "30 мин.",
        "en": "30 min",
        "hy": "30 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-16",
      "category": "Маникюр",
      "title": {
        "ru": "Втирка",
        "en": "Chrome powder nail effect",
        "hy": "Եղունգների փայլափոշի"
      },
      "price": "3 000 ֏",
      "duration": {
        "ru": "30 мин.",
        "en": "30 min",
        "hy": "30 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-17",
      "category": "Маникюр",
      "title": {
        "ru": "Акриловая пудра",
        "en": "Acrylic powder",
        "hy": "Ակրիլի փոշի"
      },
      "price": "2 000 ֏",
      "duration": {
        "ru": "30 мин.",
        "en": "30 min",
        "hy": "30 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-18",
      "category": "Маникюр",
      "title": {
        "ru": "Топ изнутри ногтя",
        "en": "Top coat underneath the nail",
        "hy": "Տոպ եղունգի ներսից"
      },
      "price": "0 ֏",
      "duration": {
        "ru": "30 мин.",
        "en": "30 min",
        "hy": "30 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-19",
      "category": "Маникюр",
      "title": {
        "ru": "База + топ",
        "en": "Base coat + top coat",
        "hy": "Բազա + տոպ"
      },
      "price": "6 000–7 000 ֏",
      "duration": {
        "ru": "30 мин.",
        "en": "30 min",
        "hy": "30 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-20",
      "category": "Маникюр",
      "title": {
        "ru": "Парафинотерапия рук",
        "en": "Hand paraffin treatment",
        "hy": "Ձեռքերի պարաֆինոթերապիա"
      },
      "price": "3 000–4 000 ֏",
      "duration": {
        "ru": "30 мин.",
        "en": "30 min",
        "hy": "30 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-21",
      "category": "Маникюр",
      "title": {
        "ru": "Моделирование гелем",
        "en": "Gel nail sculpting",
        "hy": "Գելային մոդելավորում (լիցք)"
      },
      "price": "16 000–17 000 ֏",
      "duration": {
        "ru": "120 мин.",
        "en": "120 min",
        "hy": "120 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-22",
      "category": "Маникюр",
      "title": {
        "ru": "Наращивание Gel - X с моделированием",
        "en": "Gel-X extensions with sculpting",
        "hy": "Gel-X + գել"
      },
      "price": "16 000–17 000 ֏",
      "duration": {
        "ru": "165 мин.",
        "en": "165 min",
        "hy": "165 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-23",
      "category": "Маникюр",
      "title": {
        "ru": "Коррекция гелем",
        "en": "Gel correction",
        "hy": "Գելային կորեկցիա"
      },
      "price": "8 000 ֏",
      "duration": {
        "ru": "90 мин.",
        "en": "90 min",
        "hy": "90 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-24",
      "category": "Маникюр",
      "title": {
        "ru": "Укрепление гелем",
        "en": "Gel strengthening",
        "hy": "Գելով ամրացում"
      },
      "price": "8 000–9 000 ֏",
      "duration": {
        "ru": "90 мин.",
        "en": "90 min",
        "hy": "90 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-25",
      "category": "Маникюр",
      "title": {
        "ru": "Моделирование полигелем",
        "en": "Polygel sculpting",
        "hy": "Պոլիգելով մոդելավորում (լիցք)"
      },
      "price": {
        "ru": "от 12 000 ֏",
        "en": "from 12 000 ֏",
        "hy": "սկսած 12 000 ֏"
      },
      "duration": {
        "ru": "120 мин.",
        "en": "120 min",
        "hy": "120 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-26",
      "category": "Маникюр",
      "title": {
        "ru": "Коррекция полигелем",
        "en": "Polygel correction",
        "hy": "Պոլիգելով կորեկցիա"
      },
      "price": "8 000 ֏",
      "duration": {
        "ru": "90 мин.",
        "en": "90 min",
        "hy": "90 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-27",
      "category": "Маникюр",
      "title": {
        "ru": "Моделирование с формой",
        "en": "Nail sculpting using forms",
        "hy": "Ֆորմայով մոդելավորում"
      },
      "price": "12 000 ֏",
      "duration": {
        "ru": "120 мин.",
        "en": "120 min",
        "hy": "120 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-28",
      "category": "Маникюр",
      "title": {
        "ru": "Мужской маникюр",
        "en": "Men's manicure",
        "hy": "Տղամարդկանց ձեռքերի չիստկա"
      },
      "price": "5 000–6 000 ֏",
      "duration": {
        "ru": "45 мин.",
        "en": "45 min",
        "hy": "45 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-29",
      "category": "Педикюр",
      "title": {
        "ru": "Покрытие лаком ног",
        "en": "Toenail polish application",
        "hy": "Ոտքերի լաքապատում"
      },
      "price": "3 000–4 000 ֏",
      "duration": {
        "ru": "30 мин.",
        "en": "30 min",
        "hy": "30 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-30",
      "category": "Педикюр",
      "title": {
        "ru": "Педикюр без обработки стоп",
        "en": "Pedicure without foot treatment",
        "hy": "Ոտքերի չիստկա"
      },
      "price": "7 000–8 000 ֏",
      "duration": {
        "ru": "45 мин.",
        "en": "45 min",
        "hy": "45 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-31",
      "category": "Педикюр",
      "title": {
        "ru": "Педикюр",
        "en": "Pedicure",
        "hy": "Ոտնահարդարում"
      },
      "price": "9 000–10 000 ֏",
      "duration": {
        "ru": "90 мин.",
        "en": "90 min",
        "hy": "90 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-32",
      "category": "Педикюр",
      "title": {
        "ru": "Снятие гель-лака ног",
        "en": "Toenail gel polish removal",
        "hy": "Ոտքերի գելլաքի հեռացում"
      },
      "price": "2 000 ֏",
      "duration": {
        "ru": "15 мин.",
        "en": "15 min",
        "hy": "15 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-33",
      "category": "Педикюр",
      "title": {
        "ru": "Педикюр (без обработки стоп) + покрытие лаком",
        "en": "Pedicure without foot treatment + nail polish",
        "hy": "Ոտքերի չիստկա + լաքապատում"
      },
      "price": "7 000–8 000 ֏",
      "duration": {
        "ru": "60 мин.",
        "en": "60 min",
        "hy": "60 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-34",
      "category": "Педикюр",
      "title": {
        "ru": "Педикюр + покрытие лаком",
        "en": "Pedicure + nail polish",
        "hy": "Ոտնահարդարում + լաքապատում"
      },
      "price": "9 000–10 000 ֏",
      "duration": {
        "ru": "90 мин.",
        "en": "90 min",
        "hy": "90 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-35",
      "category": "Педикюр",
      "title": {
        "ru": "Педикюр (без обработки стоп) + покрытие гель-лаком",
        "en": "Pedicure without foot treatment + gel polish",
        "hy": "Ոտքերի չիստկա + գելլաք (շելլաք)"
      },
      "price": "10 000–11 000 ֏",
      "duration": {
        "ru": "90 мин.",
        "en": "90 min",
        "hy": "90 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-36",
      "category": "Педикюр",
      "title": {
        "ru": "Педикюр + покрытие гель-лаком",
        "en": "Pedicure + gel polish",
        "hy": "Ոտնահարդարում + գելլաք (շելլաք)"
      },
      "price": "12 000–13 000 ֏",
      "duration": {
        "ru": "105 мин.",
        "en": "105 min",
        "hy": "105 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-37",
      "category": "Педикюр",
      "title": {
        "ru": "Педикюр + гель-лак — специальные часы ✨",
        "en": "Pedicure + gel polish — special hours ✨",
        "hy": "Ոտնահարդարում + գելլաք — հատուկ ժամեր ✨"
      },
      "price": {
        "ru": "от 10 000 ֏",
        "en": "from 10 000 ֏",
        "hy": "սկսած 10 000 ֏"
      },
      "duration": {
        "ru": "90 мин.",
        "en": "90 min",
        "hy": "90 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-38",
      "category": "Педикюр",
      "title": {
        "ru": "Парафинотерапия ног",
        "en": "Foot paraffin treatment",
        "hy": "Ոտքերի պարաֆինոթերապիա"
      },
      "price": {
        "ru": "от 5 000 ֏",
        "en": "from 5 000 ֏",
        "hy": "սկսած 5 000 ֏"
      },
      "duration": {
        "ru": "30 мин.",
        "en": "30 min",
        "hy": "30 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    },
    {
      "id": "nail-room-39",
      "category": "Педикюр",
      "title": {
        "ru": "Мужской педикюр",
        "en": "Men's pedicure",
        "hy": "Տղամարդկանց ոտնահարդարում"
      },
      "price": "11 000–12 000 ֏",
      "duration": {
        "ru": "60 мин.",
        "en": "60 min",
        "hy": "60 րոպե"
      },
      "description": {
        "ru": "",
        "en": "",
        "hy": ""
      },
      "variants": []
    }
  ],
  "team": [],
  "reviews": [
    {
      "id": "review-01",
      "author": {
        "ru": "Anushik DANIELYAN",
        "en": "Anushik DANIELYAN",
        "hy": "Anushik DANIELYAN"
      },
      "text": {
        "ru": "Очень довольна посещением Nail Room! В салоне высокий уровень обслуживания, сотрудники вежливые, внимательные и настоящие профессионалы своего дела. Атмосфера очень тёплая и уютная, всегда приятно сюда возвращаться. Рекомендую всем, кто ценит качественный маникюр и хорошее отношение к клиентам 💅✨",
        "en": "Очень довольна посещением Nail Room! В салоне высокий уровень обслуживания, сотрудники вежливые, внимательные и настоящие профессионалы своего дела. Атмосфера очень тёплая и уютная, всегда приятно сюда возвращаться. Рекомендую всем, кто ценит качественный маникюр и хорошее отношение к клиентам 💅✨",
        "hy": "Очень довольна посещением Nail Room! В салоне высокий уровень обслуживания, сотрудники вежливые, внимательные и настоящие профессионалы своего дела. Атмосфера очень тёплая и уютная, всегда приятно сюда возвращаться. Рекомендую всем, кто ценит качественный маникюр и хорошее отношение к клиентам 💅✨"
      },
      "rating": 5,
      "source": {
        "ru": "Google Карты",
        "en": "Google Maps",
        "hy": "Google Քարտեզներ"
      },
      "url": "https://www.google.com/maps/search/?api=1&query=Nail%20Room%20Yerevan&query_place_id=ChIJMRHE4y29akARZ84GytMLYjM"
    },
    {
      "id": "review-02",
      "author": {
        "ru": "Hasmik Muradyan",
        "en": "Hasmik Muradyan",
        "hy": "Hasmik Muradyan"
      },
      "text": {
        "ru": "Я просто в восторге!!! 😍💅 Уже более двух лет посещаю мой любимый Nail Room. Салон — как маленький остров красоты и уюта, где реально расслабляешься, отдыхаешь и получаешь удовольствие от каждой минуты. Мой мастер Карина — настоящий профессионал! Делает всё очень качественно и идеально: форма, покрытие, дизайн — просто wow 🔥🔥🔥 Всё аккуратно, чисто, стерильно — все на высоком уровне. Отдельный плюс за атмосферу, внимание и сервис, там и кофем угощают и вкусным чаем— чувствуешь себя не клиентом, а VIP-гостем ✨ Всем рекомендую от души 💖",
        "en": "Я просто в восторге!!! 😍💅 Уже более двух лет посещаю мой любимый Nail Room. Салон — как маленький остров красоты и уюта, где реально расслабляешься, отдыхаешь и получаешь удовольствие от каждой минуты. Мой мастер Карина — настоящий профессионал! Делает всё очень качественно и идеально: форма, покрытие, дизайн — просто wow 🔥🔥🔥 Всё аккуратно, чисто, стерильно — все на высоком уровне. Отдельный плюс за атмосферу, внимание и сервис, там и кофем угощают и вкусным чаем— чувствуешь себя не клиентом, а VIP-гостем ✨ Всем рекомендую от души 💖",
        "hy": "Я просто в восторге!!! 😍💅 Уже более двух лет посещаю мой любимый Nail Room. Салон — как маленький остров красоты и уюта, где реально расслабляешься, отдыхаешь и получаешь удовольствие от каждой минуты. Мой мастер Карина — настоящий профессионал! Делает всё очень качественно и идеально: форма, покрытие, дизайн — просто wow 🔥🔥🔥 Всё аккуратно, чисто, стерильно — все на высоком уровне. Отдельный плюс за атмосферу, внимание и сервис, там и кофем угощают и вкусным чаем— чувствуешь себя не клиентом, а VIP-гостем ✨ Всем рекомендую от души 💖"
      },
      "rating": 5,
      "source": {
        "ru": "Google Карты",
        "en": "Google Maps",
        "hy": "Google Քարտեզներ"
      },
      "url": "https://www.google.com/maps/search/?api=1&query=Nail%20Room%20Yerevan&query_place_id=ChIJMRHE4y29akARZ84GytMLYjM"
    },
    {
      "id": "review-03",
      "author": {
        "ru": "Ashot Gevorgyan",
        "en": "Ashot Gevorgyan",
        "hy": "Ashot Gevorgyan"
      },
      "text": {
        "ru": "Отличный салон Nail Room! Всегда остаюсь довольна результатом. Мастера работают аккуратно и профессионально, обслуживание на высоком уровне. В салоне очень приятная, тёплая атмосфера, чувствуешь себя комфортно с первой минуты. Обязательно приду ещё и с уверенностью рекомендую другим 💅😊",
        "en": "Отличный салон Nail Room! Всегда остаюсь довольна результатом. Мастера работают аккуратно и профессионально, обслуживание на высоком уровне. В салоне очень приятная, тёплая атмосфера, чувствуешь себя комфортно с первой минуты. Обязательно приду ещё и с уверенностью рекомендую другим 💅😊",
        "hy": "Отличный салон Nail Room! Всегда остаюсь довольна результатом. Мастера работают аккуратно и профессионально, обслуживание на высоком уровне. В салоне очень приятная, тёплая атмосфера, чувствуешь себя комфортно с первой минуты. Обязательно приду ещё и с уверенностью рекомендую другим 💅😊"
      },
      "rating": 5,
      "source": {
        "ru": "Google Карты",
        "en": "Google Maps",
        "hy": "Google Քարտեզներ"
      },
      "url": "https://www.google.com/maps/search/?api=1&query=Nail%20Room%20Yerevan&query_place_id=ChIJMRHE4y29akARZ84GytMLYjM"
    },
    {
      "id": "review-04",
      "author": {
        "ru": "М 98",
        "en": "М 98",
        "hy": "М 98"
      },
      "text": {
        "ru": "Хочу выразить искреннюю благодарность салону за высокий уровень сервиса и профессионализм. Отдельно хочется поблагодарить Кристине за её потрясающую работу и высокий уровень профессионализма.Спасибо за твою ответственность, аккуратность и искреннюю любовь к своей работе. Благодаря тебе я всегда уверена в себе и в своём образе. С радостью буду возвращаться снова и снова 💖🌷",
        "en": "Хочу выразить искреннюю благодарность салону за высокий уровень сервиса и профессионализм. Отдельно хочется поблагодарить Кристине за её потрясающую работу и высокий уровень профессионализма.Спасибо за твою ответственность, аккуратность и искреннюю любовь к своей работе. Благодаря тебе я всегда уверена в себе и в своём образе. С радостью буду возвращаться снова и снова 💖🌷",
        "hy": "Хочу выразить искреннюю благодарность салону за высокий уровень сервиса и профессионализм. Отдельно хочется поблагодарить Кристине за её потрясающую работу и высокий уровень профессионализма.Спасибо за твою ответственность, аккуратность и искреннюю любовь к своей работе. Благодаря тебе я всегда уверена в себе и в своём образе. С радостью буду возвращаться снова и снова 💖🌷"
      },
      "rating": 5,
      "source": {
        "ru": "Google Карты",
        "en": "Google Maps",
        "hy": "Google Քարտեզներ"
      },
      "url": "https://www.google.com/maps/search/?api=1&query=Nail%20Room%20Yerevan&query_place_id=ChIJMRHE4y29akARZ84GytMLYjM"
    },
    {
      "id": "review-05",
      "author": {
        "ru": "Alla Asoyan",
        "en": "Alla Asoyan",
        "hy": "Alla Asoyan"
      },
      "text": {
        "ru": "Хочу поделиться своим впечатлением о NailRoom 💅 Сервис здесь всегда на высоком уровне — всё организовано с вниманием к клиенту и деталям. Отдельную благодарность хочу выразить мастеру Карине — она настоящий профессионал своего дела. Карина всегда очень внимательно относится к пожеланиям, помогает с выбором и работает максимально аккуратно. Даже когда у неё ограничено время, она не спешит в ущерб качеству — форма ногтей всегда получается идеальной. Особенно приятно было в мой день рождения: Карина не только сделала всё безупречно, но и подготовила небольшой сюрприз, что было очень трогательно и создало особенное настроение. Спасибо за высокий уровень сервиса и тёплое отношение. С удовольствием буду возвращаться снова.🤍",
        "en": "Хочу поделиться своим впечатлением о NailRoom 💅 Сервис здесь всегда на высоком уровне — всё организовано с вниманием к клиенту и деталям. Отдельную благодарность хочу выразить мастеру Карине — она настоящий профессионал своего дела. Карина всегда очень внимательно относится к пожеланиям, помогает с выбором и работает максимально аккуратно. Даже когда у неё ограничено время, она не спешит в ущерб качеству — форма ногтей всегда получается идеальной. Особенно приятно было в мой день рождения: Карина не только сделала всё безупречно, но и подготовила небольшой сюрприз, что было очень трогательно и создало особенное настроение. Спасибо за высокий уровень сервиса и тёплое отношение. С удовольствием буду возвращаться снова.🤍",
        "hy": "Хочу поделиться своим впечатлением о NailRoom 💅 Сервис здесь всегда на высоком уровне — всё организовано с вниманием к клиенту и деталям. Отдельную благодарность хочу выразить мастеру Карине — она настоящий профессионал своего дела. Карина всегда очень внимательно относится к пожеланиям, помогает с выбором и работает максимально аккуратно. Даже когда у неё ограничено время, она не спешит в ущерб качеству — форма ногтей всегда получается идеальной. Особенно приятно было в мой день рождения: Карина не только сделала всё безупречно, но и подготовила небольшой сюрприз, что было очень трогательно и создало особенное настроение. Спасибо за высокий уровень сервиса и тёплое отношение. С удовольствием буду возвращаться снова.🤍"
      },
      "rating": 5,
      "source": {
        "ru": "Google Карты",
        "en": "Google Maps",
        "hy": "Google Քարտեզներ"
      },
      "url": "https://www.google.com/maps/search/?api=1&query=Nail%20Room%20Yerevan&query_place_id=ChIJMRHE4y29akARZ84GytMLYjM"
    },
    {
      "id": "review-06",
      "author": {
        "ru": "Irene Malkh",
        "en": "Irene Malkh",
        "hy": "Irene Malkh"
      },
      "text": {
        "ru": "Отличный сервис, приятные сотрудники, а качество работы просто супер! Очень советую это место :) 100% я вернусь!",
        "en": "Отличный сервис, приятные сотрудники, а качество работы просто супер! Очень советую это место :) 100% я вернусь!",
        "hy": "Отличный сервис, приятные сотрудники, а качество работы просто супер! Очень советую это место :) 100% я вернусь!"
      },
      "rating": 5,
      "source": {
        "ru": "Google Карты",
        "en": "Google Maps",
        "hy": "Google Քարտեզներ"
      },
      "url": "https://www.google.com/maps/search/?api=1&query=Nail%20Room%20Yerevan&query_place_id=ChIJMRHE4y29akARZ84GytMLYjM"
    },
    {
      "id": "review-07",
      "author": {
        "ru": "Вануи Бдоян",
        "en": "Вануи Бдоян",
        "hy": "Вануи Бдоян"
      },
      "text": {
        "ru": "Очень хороший салон, в Ереване посещала очень много салонов, но выбрала Nail room, по всем критериям можно смело ставить 5. Больше месяца ногти держатся, а главное у них все стерильно. И персонал великолепный, угощают напитками, более того я сходила с ребенком, они присматривали пока мне сделали маникюр, педикюр и брови одновременно, за полтора часа. Будете в Ереване обязательно посетите данный салон. Рекомендую 👍",
        "en": "Очень хороший салон, в Ереване посещала очень много салонов, но выбрала Nail room, по всем критериям можно смело ставить 5. Больше месяца ногти держатся, а главное у них все стерильно. И персонал великолепный, угощают напитками, более того я сходила с ребенком, они присматривали пока мне сделали маникюр, педикюр и брови одновременно, за полтора часа. Будете в Ереване обязательно посетите данный салон. Рекомендую 👍",
        "hy": "Очень хороший салон, в Ереване посещала очень много салонов, но выбрала Nail room, по всем критериям можно смело ставить 5. Больше месяца ногти держатся, а главное у них все стерильно. И персонал великолепный, угощают напитками, более того я сходила с ребенком, они присматривали пока мне сделали маникюр, педикюр и брови одновременно, за полтора часа. Будете в Ереване обязательно посетите данный салон. Рекомендую 👍"
      },
      "rating": 5,
      "source": {
        "ru": "Google Карты",
        "en": "Google Maps",
        "hy": "Google Քարտեզներ"
      },
      "url": "https://www.google.com/maps/search/?api=1&query=Nail%20Room%20Yerevan&query_place_id=ChIJMRHE4y29akARZ84GytMLYjM"
    },
    {
      "id": "review-08",
      "author": {
        "ru": "Olga Churganova",
        "en": "Olga Churganova",
        "hy": "Olga Churganova"
      },
      "text": {
        "ru": "Очень рекомендую этот салон. Спасибо Манан за отличный педикюр. Аккуратно. Быстро. Нежно.",
        "en": "Очень рекомендую этот салон. Спасибо Манан за отличный педикюр. Аккуратно. Быстро. Нежно.",
        "hy": "Очень рекомендую этот салон. Спасибо Манан за отличный педикюр. Аккуратно. Быстро. Нежно."
      },
      "rating": 5,
      "source": {
        "ru": "Google Карты",
        "en": "Google Maps",
        "hy": "Google Քարտեզներ"
      },
      "url": "https://www.google.com/maps/search/?api=1&query=Nail%20Room%20Yerevan&query_place_id=ChIJMRHE4y29akARZ84GytMLYjM"
    },
    {
      "id": "review-09",
      "author": {
        "ru": "Monika Chatinyan",
        "en": "Monika Chatinyan",
        "hy": "Monika Chatinyan"
      },
      "text": {
        "ru": "Я обслуживаюсь здесь уже 1,5 года и очень довольна ♥️ Отдельное спасибо мастеру Киме, не преувеличу, если скажу, что она лучший мастер по маникюру в городе, топовый специалист 🫶 Лучший французский маникюр и педикюр 💅",
        "en": "Я обслуживаюсь здесь уже 1,5 года и очень довольна ♥️ Отдельное спасибо мастеру Киме, не преувеличу, если скажу, что она лучший мастер по маникюру в городе, топовый специалист 🫶 Лучший французский маникюр и педикюр 💅",
        "hy": "Я обслуживаюсь здесь уже 1,5 года и очень довольна ♥️ Отдельное спасибо мастеру Киме, не преувеличу, если скажу, что она лучший мастер по маникюру в городе, топовый специалист 🫶 Лучший французский маникюр и педикюр 💅"
      },
      "rating": 5,
      "source": {
        "ru": "Google Карты",
        "en": "Google Maps",
        "hy": "Google Քարտեզներ"
      },
      "url": "https://www.google.com/maps/search/?api=1&query=Nail%20Room%20Yerevan&query_place_id=ChIJMRHE4y29akARZ84GytMLYjM"
    }
  ]
};
const rows=[];
function collect(value){
 if(!value||typeof value!=='object')return;
 if(typeof value.ru==='string'&&typeof value.en==='string'&&typeof value.hy==='string'){
  if(value.ru)rows.push([value.ru,value.hy,value.en]);return;
 }
 if(Array.isArray(value))value.forEach(collect);else Object.values(value).forEach(collect);
}
collect(data);
global.TANEM_SITE_DATA=data;
global.TANEM_SITE_I18N_ROWS=rows;
})(window);
