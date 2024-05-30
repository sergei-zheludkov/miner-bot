const ru = {
  common: {
    loading: 'Загрузка',
    balance: 'Баланс:',
    greeting: 'Стартовое сообщение',
    notification: 'Уведомление от сервера',
    main_menu: 'Сообщение главного меню',
    settings_menu: 'Сообщение меню настроек',
    feedback_menu: 'Сообщение меню обратной связи',
    update_message: 'Я обновился!\n\nЧто нового?\n-Пункт 1"\n-Пункт 2\n-Пункт 3',
    default_notification_message: 'Стандартное сообщение напоминаний',
    max: 'Максимально: ',
  },
  buttons: {
    referral: '💎 Партнерка',
    feedback: '📲 Обратная связь',
    settings: '⚙️ Настройки',
    language: '🌎 Язык',
    timezone: '🌐 Часовой пояс',
    reminders: '🔈 Напоминания',
    rules: '📚 Правила',
    invite: '🤝 Пригласить друга',
    link_generator: '🔗 Генератор ссылок',
    // statistics: '📈 Статистика',
    back: '🔙 Назад',
    exit: '🔚 Выход',
    change: '🖊 Изменить',
    confirm: '☑️️ Применить',
    great: '✅ Отлично!',
    ready: '✅ Готово',
    saved: '✅ Сохранено',
    // error: '⛔️ Ошибка',
    less: '➖',
    more: '➕',
    add: '➕ Добавить',
    remove: '🗑 Удалить',
    male: '👨 Мужской',
    female: '👩 Женский',
    // management_wallets: '💱 Управление',

    // ---------Admin Menu---------
    support_menu: '📟 Меню поддержки',

    // --------Support Menu--------
    support_requests: '📥 Обращения в поддержку',
    take_into_work: '🔧 Взять в работу',
    processed: '✔️ Обработано',

    // --------Feedback Menu--------
    write: '✍️ Написать',
    requests: '📤 Обращения',
    feedback_waiting_status: '🟡 В ожидании',
    feedback_processing_status: '🔵 В обработке',

    // ------Reminder Settings------
    reminder_off: '🔇 Выключить напоминания',
    reminder_on: '🔊 Включить напоминания',
    off: 'Выкл',

    // ------Language Settings------
    ru: '🇷🇺 Русский',
    en: '🇺🇸 English',

    // Кнопки статистики
    // users: '👥 Пользователи',
    // payments: '🧾 Платежи',

    // Кнопки периодов
    // all_time: 'Всего',
    // month: 'Месяц',
    // week: 'Неделя',
    // yesterday: 'Вчера',
    // period: 'Период',

    // Дни
    monday: 'Понедельник',
    tuesday: 'Вторник',
    wednesday: 'Среда',
    thursday: 'Четверг',
    friday: 'Пятница',
    saturday: 'Субботу',
    sunday: 'Воскресенье',
  },
  registration: {
    success: 'Регистрация успешна',
    error_title: '❗️ Ошибка ❗',

    questions: {
      language: {
        message: 'Choose language / Выбери язык',
        error_description: 'Неподдерживаемый язык. Выберите доступный на клавиатуре',
      },
      gender: {
        message: 'Укажи твой пол',
        error_description: 'Сделайте выбор кнопками клавиатуры',
      },
      timezone: {
        message: 'Введи свой часовой пояс',
        description: 'Это необходимо для корректной отправки уведомлений',
        error_description: 'Некорректный часовой пояс. Выберите на клавиатуре',
      },
    },
  },
  admin: {
    message: 'Что хочешь сделать?',
    error: 'Это меню только для администрации. Извини, но ты не админ!',
  },
  support: {
    message: 'Меню работника поддержки',
    error: 'Это меню только для работников поддержки. Извини, но ты не один из них!',
  },
  referral: {
    title: '🙋‍♂️ Партнерская программа',
    message: '🎁 Приглашай друзей и получай бонусы', // 10% от каждого пополнения баланса другом.',
    // balance: '💰 Твой партнерский баланс: ',
    notification: {
      registration_success: 'По твоей ссылке зарегистрировался ',
      // bonus: 'Теперь ты будешь получать 10% с каждого его пополнения баланса',

      // money_part1: 'Тебе начислено ',
      // money_part2: ' за пополнение реферралом ',
    },
  },
  // invite: {
  //   title: 'Просто перешли другу следующее сообщение⤵️',
  //   message: 'Йо, здарова!\nСообщение с реферральной ссылочкой:',
  //   // bonus: 'При переходе по ссылке получишь +10% на первое пополнение баланса.',
  // },
  feedback: {
    message: 'В данный момент любое отправленное сообщение будет переслано в поддержку',
    describe: 'Вы можете описать проблему текстом, отправить фото, видео, аудио или кружочек',
    error: 'К сожалению, лимит обращений на сегодняшний день исчерпан',

    request_list: 'Список обращений',
    last_request_list: 'Список последних обращений',
    empty_request_list: 'Список обращений пуст',
    your_request: 'Ваше обращение от {{date}}',
    user_request: 'Обращение {{user_name}} от {{date}}',
    sent_success: 'Ваше обращение успешно отправлено',
    request_has_been_taken: 'Обращение взято в работу',
    request_has_been_done: 'Обращение успешно обработано',

    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    limit_zero: 'Обращения недоступны, попробуй завтра',
    limit_one: 'Доступно {{count}} обращение',
    limit_few: 'Доступно {{count}} обращения',
    limit_many: 'Доступно {{count}} обращений',
    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    total_in_waiting_zero: 'Нет заявок ожидающих обработки',
    total_in_waiting_one: 'Имеется {{count}} заявка ожидающая обработки',
    total_in_waiting_few: 'Имеется {{count}} заявки ожидающие обработки',
    total_in_waiting_many: 'Имеется {{count}} заявок ожидающих обработки',
    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    today_in_waiting_zero: 'Нет заявок ожидающих обработки',
    today_in_waiting_one: 'За сегодня имеется {{count}} заявка ожидающая обработки',
    today_in_waiting_few: 'За сегодня имеется {{count}} заявки ожидающие обработки',
    today_in_waiting_many: 'За сегодня имеется {{count}} заявок ожидающих обработки',
    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    today_in_processing_zero: 'Сейчас в обработке нет заявок',
    today_in_processing_one: 'Сейчас в обработке {{count}} заявка',
    today_in_processing_few: 'Сейчас в обработке {{count}} заявки',
    today_in_processing_many: 'Сейчас в обработке {{count}} заявок',
    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    today_in_done_zero: 'За сегодня не обработанно ни одной заявки',
    today_in_done_one: 'За сегодня обработано {{count}} заявка',
    today_in_done_few: 'За сегодня обработано {{count}} заявки',
    today_in_done_many: 'За сегодня обработано {{count}} заявок',
  },
  rules: {
    message: 'Правила\n\n-Пункт 1"\n-Пункт 2\n-Пункт 3',
  },
  // statistics: {
  //   more_details: 'Подробнее можно узнать по кнопкам ниже',
  //   new_users: 'Новых юзеров:',‘®®
  //   payments: 'Платежи:',
  //   payments_is_empty: 'Платежей не было',
  //   total: 'Всего:',
  //   amount: 'Сумма:',
  //   choose_period: 'Введите период в формате:',
  //   period_example: '\n220521-240521',
  //
  //   periods: {
  //     daily: 'Статистика за день',
  //     yesterday: 'Статистика за вчера',
  //     weekly: 'Статистика за неделю',
  //     monthly: 'Статистика за месяц',
  //     all_time: 'Статистика за все время',
  //     by_period: 'Статистика за период:',
  //   },
  // },
  settings: {
    reminder: {
      message: 'Настройка напоминаний',
      about: 'Выбери день на который хочешь настроить напоминания',

      day_reminder_message: 'Настройка на ',
      selected: 'Выбрано: ',
    },
    language: {
      used: 'Используется: ',
      choose: 'Выбери язык',
    },
    timezone: {
      selected: 'Выбраная таймзона: ',
      not_selected: 'Таймзона не выбрана',
      choose: 'Выбери новую таимзону',
    },
  },
};

export { ru };
