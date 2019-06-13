const books = [
  {
    "name":"Клиенты на всю жизнь",
    "desc":"",
    "price":697,
    "uri":"klienty-na-vsyu-zhizn",
    "type":"marketing"
  },
  {
    "name":"Ценные решения",
    "desc":"Как работать с ценами, чтобы прибыль росла",
    "price":637,
    "uri":"tsennye-resheniya",
    "type":"marketing"
  },
  {
    "name":"45 татуировок продавана",
    "desc":"Правила для тех, кто продаёт и управляет продажами",
    "price":676,
    "uri":"45-tatuirovok-prodavana",
    "type":"business"
  },
  {
    "name":"Дневник художника-натуралиста",
    "desc":"Как рисовать животных, птиц, растения и пейзажи",
    "price":1695,
    "uri":"dnevnik-khudozhnika-naturalista",
    "type":"creativity"
  },
  {
    "name":"Открытое мышление",
    "desc":"Как выйти за пределы своей точки зрения",
    "price":625,
    "uri":"otkrytoe-myshlenie",
    "type":"business"
  },
  {
    "name":"Не делай это",
    "desc":"Тайм-менеджмент для творческих людей",
    "price":855,
    "uri":"ne-delay-eto",
    "type":"creativity"
  },
  {
    "name":"Я хочу больше идей!",
    "desc":"Более 100 техник и упражнений для развития творческого мышления",
    "price":667,
    "uri":"ya-khochu-bolshe-idey",
    "type":"creativity"
  },
  {
    "name":"Urban Jungle",
    "desc":"Как создать уютный интерьер с помощью растений",
    "price":807,
    "uri":"urban-jungle",
    "type":"creativity"
  },
  {
    "name":"На крючке",
    "desc":"Как создавать продукты, формирующие привычки",
    "price":595,
    "uri":"na-kryuchke",
    "type":"marketing"
  },
  {
    "name":"Вместе быстрее",
    "desc":"12 принципов командной эффективности",
    "price":1025,
    "uri":"vmeste-bystree",
    "type":"business"
  },
  {
    "name":"Искренний сервис",
    "desc":"Как мотивировать сотрудников сделать для клиента больше, чем достаточно. Даже когда шеф не смотрит",
    "price":637,
    "uri":"iskrenniy-servis",
    "type":"marketing"
  },
  {
    "name":"Охотник за идеями",
    "desc":"Как найти дело жизни и сделать мир лучше",
    "price":671,
    "uri":"okhotnik-za-ideyami",
    "type":"business"
  },
  {
    "name":"Психология",
    "desc":"Люди, концепции, эксперименты",
    "price":688,
    "uri":"psikhologiya",
    "type":"science"
  },
  {
    "name":"Трамп и эпоха постправды",
    "desc":"",
    "price":722,
    "uri":"tramp-i-epokha-postpravdy",
    "type":"science"
  },
  {
    "name":"Бизнес как игра",
    "desc":"Грабли российского бизнеса и неожиданные решения",
    "price":697,
    "uri":"biznes-kak-igra",
    "type":"business"
  },
  {
    "name":"Удовольствие от x",
    "desc":"Увлекательная экскурсия в мир математики от одного из лучших преподавателей в мире",
    "price":805,
    "uri":"udovolstvie-ot-x",
    "type":"science"
  },
  {
    "name":"Аналитическая культура",
    "desc":"От сбора данных до бизнес-результатов",
    "price":1084,
    "uri":"analiticheskaya-kultura",
    "type":"business"
  },
  {
    "name":"Маркетинг от потребителя",
    "desc":"",
    "price":1215,
    "uri":"marketing-ot-potrebitelya",
    "type":"marketing"
  },
  {
    "name":"Стратегия e-mail-маркетинга",
    "desc":"Эффективные рассылки для вашего бизнеса",
    "price":722,
    "uri":"strategiya-e-mail-marketinga",
    "type":"marketing"
  },
  {
    "name":"Огилви о рекламе",
    "desc":"",
    "price":1296,
    "uri":"ogilvi-o-reklame",
    "type":"marketing"
  },
  {
    "name":"Обновить страницу",
    "desc":"О трансформации Microsoft и технологиях будущего от первого лица",
    "price":820,
    "uri":"obnovit-stranitsu",
    "type":"business"
  },
  {
    "name":"Путеводитель по лжи",
    "desc":"Критическое мышление в эпоху постправды",
    "price":761,
    "uri":"putevoditel-po-lzhi",
    "type":"science"
  },
  {
    "name":"Рисовый штурм и еще 21 способ мыслить нестандартно",
    "desc":"",
    "price":829,
    "uri":"risovyy-shturm-i-esche-21-sposob-myslit-nestandartno",
    "type":"creativity"
  },
  {
    "name":"Сделано, чтобы прилипать",
    "desc":"Почему одни идеи выживают, а другие умирают",
    "price":714,
    "uri":"sdelano-chtoby-prilipat",
    "type":"creativity"
  },
  {
    "name":"Гибкий ум",
    "desc":"Как видеть вещи иначе и думать нестандартно",
    "price":805,
    "uri":"gibkiy-um",
    "type":"creativity"
  },
  {
    "name":"Заразительный",
    "desc":"Психология сарафанного радио. Как продукты и идеи становятся популярными",
    "price":701,
    "uri":"zarazitelnyy",
    "type":"marketing"
  },
  {
    "name":"Как привести дела в порядок",
    "desc":"Искусство продуктивности без стресса",
    "price":767,
    "uri":"kak-privesti-dela-v-poryadok",
    "type":"business"
  },
  {
    "name":"Создавая бестселлер",
    "desc":"Шаг за шагом к захватывающему сюжету, сильной сцене и цельной композиции",
    "price":625,
    "uri":"sozdavaya-bestseller",
    "type":"creativity"
  },
  {
    "name":"Маркетинг в социальных сетях",
    "desc":"",
    "price":735,
    "uri":"marketing-v-sotsialnykh-setyakh",
    "type":"marketing"
  },
  {
    "name":"Nudge",
    "desc":"Архитектура выбора",
    "price":865,
    "uri":"nudge",
    "type":"science"
  },
  {
    "name":"iМаркетинг",
    "desc":"Работаем по системе",
    "price":697,
    "uri":"imarketing",
    "type":"marketing"
  },
  {
    "name":"Ген директора",
    "desc":"17 правил позитивного менеджмента по-русски",
    "price":731,
    "uri":"gen-direktora",
    "type":"business"
  },
  {
    "name":"Психология убеждения",
    "desc":"50 доказанных способов быть убедительным",
    "price":805,
    "uri":"psikhologiya-ubezhdeniya",
    "type":"marketing"
  },
  {
    "name":"Фиолетовая корова",
    "desc":"Сделайте свой бизнес выдающимся",
    "price":676,
    "uri":"fioletovaya-korova",
    "type":"marketing"
  },
  {
    "name":"Цветовой квест. ГОРОДА",
    "desc":"30 непростых картин по номерам",
    "price":635,
    "uri":"tsvetovoy-kvest-goroda",
    "type":"creativity"
  },
  {
    "name":"Акварельные пейзажи",
    "desc":"Основы, техники, эксперименты",
    "price":820,
    "uri":"akvarelnye-peyzazhi",
    "type":"creativity"
  },
  {
    "name":"Дао физики",
    "desc":"Исследование параллелей между современной физикой и восточной философией",
    "price":608,
    "uri":"dao-fiziki",
    "type":"science"
  },
  {
    "name":"Создайте личный бренд",
    "desc":"Как находить возможности, развиваться и выделяться",
    "price":552,
    "uri":"sozdayte-lichnyy-brend",
    "type":"creativity"
  },
  {
    "name":"Сдвиг",
    "desc":"Как выжить в стремительном будущем",
    "price":850,
    "uri":"sdvig",
    "type":"science"
  },
  {
    "name":"Пятая дисциплина",
    "desc":"Искусство и практика обучающейся организации",
    "price":1207,
    "uri":"pyataya-distsiplina",
    "type":"business"
  },
  {
    "name":"Школа CEO",
    "desc":"Мастер-классы от 20 глобальных лидеров",
    "price":744,
    "uri":"shkola-ceo",
    "type":"business"
  },
  {
    "name":"Суперпотребители",
    "desc":"Кто это и почему они так важны для вашего бизнеса",
    "price":875,
    "uri":"superpotrebiteli",
    "type":"marketing"
  },
  {
    "name":"Как устроена экономика",
    "desc":"",
    "price":731,
    "uri":"kak-ustroena-ekonomika",
    "type":"science"
  },
  {
    "name":"Дзен-камера",
    "desc":"Шесть уроков творческого развития и осознанности",
    "price":840,
    "uri":"dzen-kamera",
    "type":"creativity"
  },
  {
    "name":"Лидерство и самообман",
    "desc":"Жизнь, свободная от шор",
    "price":637,
    "uri":"liderstvo-i-samoobman",
    "type":"business"
  },
  {
    "name":"Инструменты маркетинга для отдела продаж",
    "desc":"«Оружие» для менеджеров по продажам до встречи с клиентами, на встрече и после встречи с ними",
    "price":671,
    "uri":"instrumenty-marketinga-dlya-otdela-prodazh",
    "type":"marketing"
  },
  {
    "name":"Как делается кино",
    "desc":"",
    "price":616,
    "uri":"kak-delaetsya-kino",
    "type":"creativity"
  },
  {
    "name":"Главное в истории искусств",
    "desc":"Ключевые работы, темы, направления, техники",
    "price":850,
    "uri":"glavnoe-v-istorii-iskusstv",
    "type":"creativity"
  },
  {
    "name":"Маркетинг без бюджета",
    "desc":"50 работающих инструментов",
    "price":1177,
    "uri":"marketing-bez-byudzheta",
    "type":"marketing"
  },
  {
    "name":"Взлом маркетинга",
    "desc":"Наука о том, почему мы покупаем",
    "price":837,
    "uri":"vzlom-marketinga",
    "type":"marketing"
  },
  {
    "name":"Смешать, но не взбалтывать",
    "desc":"Рецепты организации мероприятий",
    "price":795,
    "uri":"smeshat-no-ne-vzbaltyvat",
    "type":"marketing"
  },
  {
    "name":"Стратегия голубого океана",
    "desc":"Как найти или создать рынок, свободный от других игроков",
    "price":973,
    "uri":"strategiya-golubogo-okeana",
    "type":"business"
  },
  {
    "name":"Путешествия во времени",
    "desc":"",
    "price":870,
    "uri":"puteshestviya-vo-vremeni",
    "type":"science"
  },
  {
    "name":"Основы каллиграфии и леттеринга",
    "desc":"",
    "price":586,
    "uri":"osnovy-kalligrafii-i-letteringa",
    "type":"creativity"
  },
  {
    "name":"Быть начальником — это нормально",
    "desc":"Пошаговый план, который поможет вам стать тем менеджером, в котором нуждается ваша команда",
    "price":731,
    "uri":"byt-nachalnikom-eto-normalno",
    "type":"business"
  },
  {
    "name":"Scrum",
    "desc":"Революционный метод управления проектами",
    "price":875,
    "uri":"scrum",
    "type":"business"
  },
  {
    "name":"Голая экономика",
    "desc":"Разоблачение унылой науки",
    "price":744,
    "uri":"golaya-ekonomika",
    "type":"science"
  },
  {
    "name":"Заразительный",
    "desc":"Психология сарафанного радио. Как продукты и идеи становятся популярными",
    "price":701,
    "uri":"zarazitelnyy",
    "type":"marketing"
  },
  {
    "name":"Как рождаются эмоции",
    "desc":"Революция в понимании мозга и управлении эмоциями",
    "price":1080,
    "uri":"kak-rozhdayutsya-emotsii",
    "type":"science"
  },
  {
    "name":"Теория игр",
    "desc":"Искусство стратегического мышления в бизнесе и жизни",
    "price":895,
    "uri":"teoriya-igr",
    "type":"science"
  },
  {
    "name":"Одураченные случайностью",
    "desc":"О скрытой роли шанса в бизнесе и жизни",
    "price":885,
    "uri":"odurachennye-sluchaynostyu",
    "type":"science"
  },
  {
    "name":"Кому нужна математика?",
    "desc":"Понятная книга о том, как устроен цифровой мир",
    "price":795,
    "uri":"komu-nuzhna-matematika",
    "type":"science"
  },
  {
    "name":"Злые самаритяне",
    "desc":"Миф о свободной торговле и секретная история капитализма",
    "price":895,
    "uri":"zlye-samarityane",
    "type":"science"
  },
  {
    "name":"Человек решающий",
    "desc":"Как построить организацию будущего, где решения принимает каждый",
    "price":646,
    "uri":"chelovek-reshayuschiy",
    "type":"business"
  },
  {
    "name":"Как не ошибаться",
    "desc":"Сила математического мышления",
    "price":985,
    "uri":"kak-ne-oshibatsya",
    "type":"science"
  },
  {
    "name":"В эфире — сарафанное радио",
    "desc":"Практическое руководство по рекомендательному маркетингу",
    "price":637,
    "uri":"v-efire-sarafannoe-radio",
    "type":"marketing"
  },
  {
    "name":"Маркетинг на 100%: ремикс",
    "desc":"Как стать хорошим менеджером по маркетингу",
    "price":676,
    "uri":"marketing-na-100-remiks",
    "type":"marketing"
  },
  {
    "name":"Неприятие перемен",
    "desc":"Как преодолеть сопротивление изменениям и раскрыть потенциал организации",
    "price":824,
    "uri":"nepriyatie-peremen",
    "type":"business"
  },
  {
    "name":"Атомы у нас дома",
    "desc":"Удивительная наука за повседневными вещами",
    "price":865,
    "uri":"atomy-u-nas-doma",
    "type":"science"
  },
  {
    "name":"И ботаники делают бизнес 1+2",
    "desc":"Удивительная история основателя «Додо Пиццы» Федора Овчинникова: от провала до миллиона",
    "price":718,
    "uri":"i-botaniki-delayut-biznes-1-2",
    "type":"business"
  },
  {
    "name":"Работа в радость",
    "desc":"Бизнес-модель будущего",
    "price":773,
    "uri":"rabota-v-radost",
    "type":"business"
  },
  {
    "name":"Неизбежно",
    "desc":"12 технологических трендов, которые определяют наше будущее",
    "price":975,
    "uri":"neizbezhno",
    "type":"science"
  },
  {
    "name":"Симпсоны и их математические секреты",
    "desc":"",
    "price":646,
    "uri":"simpsony-i-ikh-matematicheskie-sekrety",
    "type":"science"
  },
  {
    "name":"Преломление",
    "desc":"Наука видеть иначе",
    "price":975,
    "uri":"prelomlenie",
    "type":"science"
  },
  {
    "name":"Литературный мастер-класс",
    "desc":"Учитесь у Толстого, Чехова, Диккенса, Хемингуэя и многих других современных и классических авторов",
    "price":773,
    "uri":"literaturnyy-master-klass",
    "type":"creativity"
  },
  {
    "name":"Все начальники делают это",
    "desc":"Пошаговое руководство по решению (почти) всех проблем менеджера",
    "price":744,
    "uri":"vse-nachalniki-delayut-eto",
    "type":"business"
  }
];
