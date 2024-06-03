import { CountriesEnum, PlacementEnum, TasksEnum } from '@common_bot/shared';

export const en = {
  common: {
    loading: 'Loading',
    balance: 'Balance:',
    greeting: 'Start message',
    notification: 'Server notification',
    main_menu: 'Main menu message',
    settings_menu: 'Settings menu message',
    feedback_menu: 'Feedback menu message',
    update_message: "I'm update!\n\nWhat's new?\n-Paragraph 1\n-Paragraph 2\n-Paragraph 3",
    default_notification_message: 'Default notification message',
    max: 'Maximum: ',
  },
  countries: {
    [CountriesEnum.RUSSIA]: '🇷🇺',
    [CountriesEnum.BELARUS]: '🇧🇾',
    [CountriesEnum.KAZAKHSTAN]: '🇰🇿',
  },
  buttons: {
    mining: '🚀 Mining',
    tasks: '📂 Tasks',
    referral: '💎 Partners',
    balance: '💰 Balance',
    feedback: '📲 Support',
    settings: '⚙️ Settings',
    language: '🌎 Language',
    timezone: '🌐 Timezone',
    reminders: '🔈 Reminders',
    information: '📚 Information',
    invite: '🤝 Invite',
    link_generator: '🔗 Link Generator',
    withdrawn: '📤 Withdrawn',
    // statistics: '📈 Statistics',
    back: '🔙 Back',
    exit: '🔚 Exit',
    change: '🖊 Change',
    confirm: '✔️ Confirm',
    great: '✅ Great!',
    ready: '✅ Ready',
    saved: '✅ Saved',
    // error: '⛔️ Error',
    less: '➖',
    more: '➕',
    add: '➕ Add',
    remove: '🗑 Remove',
    male: '👨 Male',
    female: '👩 Female',
    // management_wallets: '💱 Management',

    // ---------Admin Menu---------
    support_menu: '📟 Support menu',

    // ----- Tasks Control Menu -----
    create_task: '📝 Create task',
    add_task_limit: '🗃️ Add limit',

    // --------Support Menu--------
    support_requests: '📥 Support Requests',
    take_into_work: '🔧 Take into work',

    // --------Feedback Menu--------
    write: '✍️ Write',
    requests: '📤 Requests',
    feedback_waiting_status: 'Waiting',
    feedback_processing_status: 'Processing',

    // ------Reminder Settings------
    reminders_off: '🔇 Disable reminders',
    reminders_on: '🔊 Enable reminders',
    off: 'Off',

    // ------Language Settings------
    ru: '🇷🇺 Русский',
    en: '🇺🇸 English',

    // Кпопки статистики
    // users: '👥 Users',
    // payments: '🧾 Payments',

    // Кнопки периодов
    // all_time: 'All time',
    // month: 'Month',
    // week: 'Week',
    // yesterday: 'Yesterday',
    // period: 'Period',

    // Дни
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
  },
  registration: {
    success: 'Registration successful',
    error_title: '❗️ Error ❗',

    questions: {
      language: {
        message: 'Choose language\n\nВыберите язык',
        error_description: 'Unsupported language. Select available on keyboard',
      },
      country: {
        message: 'Choose country where you are\n\nВыберите страну где вы проживаете',
        error_description: 'Unsupported country. Select available on keyboard',
      },
      gender: {
        message: 'Choose your gender',
        error_description: 'Make a selection using keyboard buttons',
      },
    },
  },
  mining: {
    message: 'To access the bot features, you need to subscribe to the following channels:',
    error: 'Does not meet the conditions',
    done: '✅ Mining is active',
    rate: '⛏️ Every 5 seconds you get: ',
    mined: 'Mined:',
    get: '🎁 Get',
    transferred: "🥳 You've got",
  },
  balance: {
    message: 'Your balance:',
    withdrawn: 'Withdrawn:',
    limit: 'Minimum withdrawal amount 0.5 TON!',
  },
  tasks: {
    create: {
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
        increase_mining_rate: {
          message: 'Наберите майнинг рейт за выполнение задания',
          error: '',
        },

        rest_data: {
          message: 'Введите через ;\n\navailable_limit;name;description;check_key;contact;url\n\nНапример: https://t.me/crypto_sigma_1\n'
            + '\n'
            + '1000;Crypto Sigma;1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов)\n'
            + '\n'
            + '2️⃣ Возвращайся сюда, чтобы получить вознаграждение;-1002219211474;tg_id:258000010;https://t.me/crypto_sigma_1',
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
    message: 'What do you want to do?',
    error: 'This menu is for administration only. Sorry, but you are not an admin!',
  },
  support: {
    message: 'Support menu',
    error: "This menu is for support workers only. Sorry, but you're not one of them!",
  },
  referral: {
    title: '🙋‍♂️ Affiliate program',
    message: '🎁 Invite friends and get bonuses', // 10% of each balance top-up by a friend',
    // balance: '💰 Your partner balance: ',
    notification: {
      registration_success: 'You have registered with your link by ',
      // bonus: 'Now you will receive 10% from each of his balance replenishment',

      // money_part1: 'Your account was replenished by ',
      // money_part2: ' for replenishment by a referral ',
    },
  },
  // invite: {
  //   title: 'Just send a friend the next message⤵️',
  //   message: 'Yo, hello!\nMessage with a referral link:',
  //   // bonus: 'При переходе по ссылке получишь +10% на первое пополнение баланса.',
  // },
  information: {
    message: 'Information block, you can add text and a link',
  },
  settings: {
    language: {
      used: 'Used: ',
      choose: 'Choose a language',
    },
  },
};
