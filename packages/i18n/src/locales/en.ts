const en = {
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
  buttons: {
    referral: '💎 Affiliate',
    feedback: '📲 Support',
    settings: '⚙️ Settings',
    language: '🌎 Language',
    timezone: '🌐 Timezone',
    reminders: '🔈 Reminders',
    rules: '📚 Rules',
    invite: '🤝 Invite',
    link_generator: '🔗 Link Generator',
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
        message: 'Choose language / Выберите язык',
        error_description: 'Unsupported language. Select available on keyboard',
      },
      gender: {
        message: 'Choose your gender',
        error_description: 'Make a selection using keyboard buttons',
      },
      timezone: {
        message: 'Enter your time zone',
        description: "It's necessary for sending notifications correctly",
        error_description: 'Invalid time zone. Select on keyboard',
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
  feedback: {
    message: 'At the moment, any sent message will be forwarded to support',
    describe: 'You can describe the problem in text, send a photo, video, audio or circle video',
    error: 'Unfortunately, the request limit has already been reached',

    request_list: 'Request list',
    last_request_list: 'Last requests list',
    empty_request_list: 'Request list is empty',
    your_request: 'Your request from {{date}}',
    user_request: 'Request {{user_name}} from {{date}}',
    sent_success: 'Your request has been successfully sent',
    request_has_been_taken: 'The request has been taken into work',
    request_has_been_done: 'The request has been successfully processed',

    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    limit_zero: "Requests aren't available, try tomorrow",
    limit_one: '{{count}} request is available',
    limit_other: '{{count}} requests are available',
    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    total_in_waiting_zero: 'There are no requests waiting',
    total_in_waiting_one: 'There is {{count}} request awaiting processing',
    total_in_waiting_other: 'There are {{count}} requests awaiting processing',
    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    today_in_waiting_zero: '',
    today_in_waiting_one: '',
    today_in_waiting_other: '',
    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    today_in_processing_zero: '',
    today_in_processing_one: '',
    today_in_processing_other: '',
    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    today_in_done_zero: '',
    today_in_done_one: '',
    today_in_done_other: '',
  },
  rules: {
    message: 'Rules\n\n-Paragraph 1"\n-Paragraph 2\n-Paragraph 3',
  },
  settings: {
    reminder: {
      message: 'Setting the reminders time',
      about: 'Choose the day',

      day_reminder_message: 'Setting on ',
      selected: 'Selected: ',
    },
    language: {
      used: 'Used: ',
      choose: 'Choose a language',
    },
    timezone: {
      selected: 'Selected timezone: ',
      not_selected: 'Timezone not selected',
      choose: 'Choose a new timezone',
    },
  },
};

export { en };
