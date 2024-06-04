import { CountriesEnum, PlacementEnum, TasksEnum } from '@common_bot/shared';

export const en = {
  common: {
    and: 'and',
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
    conditions_not_met: "Doesn't meet the conditions",
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
    go_to: '🔗 Go to',
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
    processed: '✔️ Processed',

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
    list: {
      empty: 'The list of tasks for you is currently empty.\n\nYou have completed all tasks. Keep it up!\n\nJoin our group to stay updated.',
      mining_disabled: 'To perform tasks, you need to activate mining',
      task_title: 'Task: #',
      task_name: 'Name:',
      task_description: 'Description:',
      task_reward: 'Task will increase your mining speed by',
      task_completed: 'Task completed, your mining speed has been increased by',
      task_error: 'An error occurred on the server. The task was not completed, please try again later.',
    },
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
        gender: {
          message: 'Укажи гендер на который нужно отображать задания',
          error: '',
        },
        increase_mining_rate: {
          message: 'Наберите майнинг рейт за выполнение задания',
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
    message: '🎁 Invite friends and get bonuses', // 10% от каждого пополнения баланса другом.',
    invitation_bonus: 'For each invited friend, you will receive',
    output_bonus: 'from each of their TON withdrawals from the balance',
    invitation: {
      title: 'Just send the following message to a friend ⤵️',
      message: 'Hi!\n\nJoin the largest TON-Coin mining community on Telegram.\n\nClick the link below and start earning TON right away.\n',
      link_title: 'Telegram bot link',
      bonus: "When you click the link, you'll receive 0.005 TON to your balance.",
    },
  },
  information: {
    message: 'Information block, you can add text and a link',
  },
  settings: {
    language: {
      used: 'Used: ',
      choose: 'Choose a language',
    },
  },
  notification: {
    new_referral: {
      title: 'По вашей ссылке зарегистрировался юзер @',
      invitation_bonus_prefix: 'Вы получили',
      invitation_bonus_postfix: 'на баланс',
    },
  },
};
