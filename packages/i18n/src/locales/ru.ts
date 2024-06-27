import {
  CountriesEnum,
  PlacementEnum,
  TasksEnum,
  WithdrawalStatusEnum,
} from '@common_bot/shared';

export const ru = {
  common: {
    and: 'и',
    loading: 'Загрузка',
    balance: 'Баланс:',
    max: 'Максимально: ',
    conditions_not_met: 'Условия не выполнены',
    network_error: '🆘Ой, что-то пошло не так 🆘\n\nНапишите пожалуйста @crypto_bot_owner с подробным описанием проблемы.\n\nИ перезапустите меня командой /start',
  },
  menu: {
    main: 'Главное меню',
    admin: 'Админка',
    settings: 'Настройки',
    statistics: 'Статистика',
    information: 'Информация о боте, правила и контакты',
  },
  countries: {
    [CountriesEnum.RUSSIA]: '🇷🇺',
    [CountriesEnum.UKRAINE]: '🇺🇦',
    [CountriesEnum.BELARUS]: '🇧🇾',
    [CountriesEnum.KAZAKHSTAN]: '🇰🇿',
  },
  periods: {
    today: 'За день:',
    yesterday: 'За вчера:',
    week: 'С понедельника:',
    month: 'С начала этого месяца:',
    all_time: 'За все время:',
    last_7_days: 'За последние 7 дней:',
    last_30_days: 'За последние 30 дней:',
  },
  buttons: {
    main_menu: '📱 Главное меню',
    mining: '🚀 Майнинг',
    tasks: '📂 Задания',
    referral: '💎 Партнеры',
    balance: '💰 Баланс',
    feedback: '📲 Обратная связь',
    settings: '⚙️ Настройки',
    language: '🌎 Язык',
    timezone: '🌐 Часовой пояс',
    reminders: '🔈 Напоминания',
    information: '📚 Информация',
    users: '👥 Пользователи',
    rules: '📖 Правила',
    contacts: '☎️ Контакты',
    invite: '🤝 Пригласить друга',
    link_generator: '🔗 Генератор ссылок',
    withdrawn: '📤 Вывести',
    collect: '🎁 Собрать',
    statistics: '📊 Статистика',
    leaders: '🏆 Лидеры',
    back: '🔙 Назад',
    exit: '🔚 Выход',
    change: '🖊 Изменить',
    confirm: '☑️️ Подтверждаю',
    go_to: '🔗 Перейти',
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
    our_group: '🔗 Наша группа',
    today: '📆 За сегодня',
    month: '🗓 За месяц',
    all_time: '📊 Все время',

    // ---------Admin Menu---------
    support_menu: '📟 Меню поддержки',

    // ----- Users Control Menu -----
    change_role: '👨‍💼 Изменить роль',
    ban: '❌ Заблокировать',

    // ----- Tasks Control Menu -----
    create_task: '📝 Создать задание',
    add_task_limit: '🗃️ Добавить лимит',
    task_notification: '📬 Отправить уведомл.',

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
    success: 'Поздравляю. Вы успешно зарегистрированы!',
    error_title: '❗️ Ошибка ❗',

    questions: {
      language: {
        message: 'Language / Язык',
        // error_description: 'Неподдерживаемый язык. Выберите доступный на клавиатуре',
      },
      country: {
        title: 'Выберите страну где вашего проживания',
        description: 'Это поможет мне лучше подбирать для вас задания',
        // error_description: 'Неподдерживаемая страна. Выберите доступную на клавиатуре',
      },
      gender: {
        title: 'Выберите ваш пол',
        description: 'Это поможет мне лучше подбирать для вас задания',
        // error_description: 'Сделайте выбор кнопками клавиатуры',
      },
    },
  },
  mining: {
    title: 'Активация майнинга',
    description: 'После подписки на все каналы на ваш аккаунт каждые 5 секунд начнут приходить деньги (это называется майнинг), которые вы сможете перевести на баланс и в последствии вывести на свой кошелек, в криптовалюте TON.',
    explanation: 'Владельцы каналов платят вам за ваше присутствие и активность в ТГ-каналах.',
    action: 'Чтобы начать зарабатывать, подпишитесь на следующие каналы и нажмите кнопку "Готово":',
    done: '✅ Майнинг активен',
    mined: 'Намайнено:',
    rate: '⛏️ Каждые 5 секунд вы получаете:',
    collected: '🥳 Вы собрали',
    bonus_prefix: '🎉Поздравляю! Вы получаете',
    bonus_postfix: 'на баланс 💰, так как зарегистрировались в боте по приглашению 🤝',
  },
  balance: {
    message: 'Ваш баланс:',
    withdrawn: 'Выведено:',
    limit: 'Минимальная сумма вывода 1 TON!',
  },
  tasks: {
    list: {
      empty: 'Список заданий для вас на данный момент пуст.\n\nВы выполнили все задания. Так держать!\n\nСледите за обновлениями в нашей группе',
      mining_disabled: 'Чтобы выполнять задания необходимо активировать маининг',
      task_title: 'Задание: #',
      task_name: 'Название:',
      task_description: 'Описание:',
      task_reward: 'Задание увеличит скорость вашего маининга на',
      task_completed: 'Задание выполнено, скорость вашего маининга увеличена на',
      task_error: 'Произошла ошибка на сервере. Задание не выполнено, попробуйте еще разок позже',
    },
    create: {
      notification: {
        message: 'Новое задание добавлено и уже доступно для стран',
        input: 'Введи ГЕО через запятую',
      },
      buttons: {
        [TasksEnum.TG_PUBLIC]: 'Паблик ТГ',
        [PlacementEnum.TASK_LIST]: 'В список задач',
        [PlacementEnum.MINING_ACTIVATION]: 'В регистрацию',
      },
      questions: {
        type: {
          message: 'Выберите тип задания',
          error: '',
        },
        country: {
          message: 'Выберите страну для отображения задания',
          error: '',
        },
        placement: {
          message: 'Выберите место для размещения задания',
          error: '',
        },
        gender: {
          message: 'Укажи гендер на который нужно отображать задания',
          error: '',
        },
        currency: {
          message: 'Укажи токен(монету) для вознаграждения',
          error: '',
        },
        increase_mining_rate: {
          message: 'Наберите майнинг-рейт за выполнение задания',
          error: '',
        },
        available_limit: {
          message: 'Введите лимит на выполнение задания',
          error: '',
        },
        name: {
          message: 'Введите название задания',
          error: '',
        },
        description: {
          message: 'Введите описание задания',
          error: '',
        },
        check_key: {
          message: 'Введите ключ/токен/id использующиеся для проверки',
          error: '',
        },
        contact: {
          message: 'Введите контактное лицо',
          error: '',
        },
        url: {
          message: 'Введите URL',
          error: '',
        },
      },
    },
  },
  admin: {
    error: '⛔ Это меню только для администрации. Извините, но вам отказано в доступе!',
  },
  support: {
    message: 'Меню работника поддержки',
    error: '⛔ Это меню только для работников поддержки.\n\nИзвините, но вам отказано в доступе!',
  },
  user_control: {
    title: 'Введите ID пользователя',
    description: {
      id: 'ID пользователя:',
      user_name: 'Никнейм:',
      gender: 'Пол:',
      country: 'Страна:',
      role: 'Роль:',
      referral_counter: 'Количество инвайтов:',
      completed_tasks_count: 'Выполнено заданий:',
      created: 'Зарегистрирован:',
      who_invited_id: 'Приглашен:',
    },
  },
  referral: {
    title: '🙋‍♂️ Партнерская программа',
    message: 'Приглашайте друзей и получайте бонусы 🎁',
    invitation_bonus: 'За каждого приглашенного друга вы получите',
    output_bonus: 'от каждого его вывода TON с баланса',
    statistic: {
      connected_zero: 'По вашей ссылке подключилось',
      connected_one: 'По вашей ссылке подключился',
      connected_few: 'По вашей ссылке подключилось',
      connected_many: 'По вашей ссылке подключилось',
      people_zero: 'человек',
      people_one: 'человек',
      people_few: 'человека',
      people_many: 'человек',
    },
    invitation: {
      title: 'Просто перешлите вашим друзьям следующее сообщение⤵️',
      message: 'Привет! 👋\n\nПрисоединяйся к крупнейшему сообществу майнеров TON-Coin🚀 в телеграм.\n\n👇 Жми на ссылку ниже и начинай зарабатывать TON уже сейчас',
      link_title: '🔗 Моя ссылка на Телеграм-бот',
      bonus_prefix: 'При переходе по моей ссылке получи',
      bonus_postfix: 'на баланс',
    },
    leaders: {
      title: '🏆 Список лидеров',
      empty: 'Список пока что пуст 🗒️, вернитесь чуточку позже ⌚',
      updates: 'Информация по лидерам обновляется в начале каждого часа',
    },
  },
  greeting: {
    title: 'Приветствую! Я - бот для заработка криптовалют.',
    description: 'Здесь вы можете зарабатывать TON выполняя простые задания ✅ и приглашая друзей 🤝. Чем больше пригласишь и выполнишь заданий, тем больше заработаешь!💸',
  },
  settings: {
    language: {
      used: 'Используется: ',
      choose: 'Выберите язык',
    },
  },
  notification: {
    new_referral: {
      title_prefix: '🎉 Поздравляю! Юзер @',
      title_postfix: ', которого вы пригласили, выполнил обязательные условия ✅',
      invitation_bonus_prefix: 'Вы получаете',
      invitation_bonus_postfix: 'на баланс 💰',
    },
  },
  withdrawals: {
    address_addition: {
      message_prefix: 'Введите адрес вашего',
      message_postfix: 'кошелька',
      ps: '💡Его можно будет изменить/удалить в настройках в будущем',
    },
    amount_controller: {
      message: 'Укажите сумму для вывода',
      available: 'Максимально доступно:',
      withdrawn: 'Вывести:',
      error_increase: 'Не может превышать',
      error_decrease: 'Не может быть менее',
    },
    confirmation: {
      title: 'Подтверждение вывода',
      on_address: 'На адрес:',
      amount: 'Количество',
      currency: 'Валюта:',
      description_block_amount: '💡Сумма будет списана(заблокирована) с вашего баланса сразу.',
      description_consideration: '💡Рассмотрение и обработка операции может занять несколько дней.',
    },
    success: {
      message: 'Заявка на вывод создана!',
      number: 'Номер заявки:',
    },
    status: {
      title: 'Статус:',
      [WithdrawalStatusEnum.CONSIDERATION]: '🟡 На рассмотрении',
      [WithdrawalStatusEnum.CANCELED]: '⚪ Отменено',
      [WithdrawalStatusEnum.REJECTED]: '🔴 Отклонено',
      [WithdrawalStatusEnum.CONFIRMED]: '🟢 Подтверждено',
      [WithdrawalStatusEnum.PAID]: '🔵 Выплачено',
    },
  },
  rules: {
    title: 'Правила бота:',
    multi_accounting: 'Запрет на использование нескольких аккаунтов одним человеком (мультиаккинг).',
    fraud: 'Запрещены любые виды мошенничества, накруток и использования обнаруженных багов.',
    breaking: 'За нарушение правил, оставляем за собой право забанить вас безвозвратно и аннулировать выплату.',
    minimum: 'Минимальная сумма для вывода 1 TON.',
    withdrawals: 'Выплаты производим раз в две недели. 1-5 число каждого месяца и 16-20 число.',
  },
  contacts: {
    title: 'Контактная информация',
    advertisement: 'По вопросам ошибок, рекламы и улучшений:',
  },
  statistics: {
    users: {
      title: 'Статистика по пользователям',
      new: 'Кол-во новых пользователей:',
      countries: 'Кол-во по странам:',
      genders: 'Кол-во по полам:',
    },
  },
};
