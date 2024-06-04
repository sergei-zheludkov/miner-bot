import { CountriesEnum, PlacementEnum, TasksEnum } from '@common_bot/shared';

export const ru = {
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
    conditions_not_met: 'Условия не выполнены',
  },
  countries: {
    [CountriesEnum.RUSSIA]: '🇷🇺',
    [CountriesEnum.BELARUS]: '🇧🇾',
    [CountriesEnum.KAZAKHSTAN]: '🇰🇿',
  },
  buttons: {
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
    invite: '🤝 Пригласить друга',
    link_generator: '🔗 Генератор ссылок',
    withdrawn: '📤 Вывести',
    // statistics: '📈 Статистика',
    back: '🔙 Назад',
    exit: '🔚 Выход',
    change: '🖊 Изменить',
    confirm: '☑️️ Применить',
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
    // management_wallets: '💱 Управление',

    // ---------Admin Menu---------
    support_menu: '📟 Меню поддержки',

    // ----- Tasks Control Menu -----
    create_task: '📝 Создать задание',
    add_task_limit: '🗃️ Добавить лимит',

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
        message: 'Choose language\n\nВыбери язык',
        error_description: 'Неподдерживаемый язык. Выберите доступный на клавиатуре',
      },
      country: {
        message: 'Choose country where you are\n\nВыберите страну где вы проживаете',
        error_description: 'Неподдерживаемая страна. Выберите доступную на клавиатуре',
      },
      gender: {
        message: 'Укажи твой пол',
        error_description: 'Сделайте выбор кнопками клавиатуры',
      },
    },
  },
  mining: {
    message: 'Чтобы получить доступ к функциям бота, нужно подписаться на след каналы:',
    done: '✅ Майнинг активен',
    mined: 'Намайнено:',
    rate: '⛏️ Каждые 5 секунд вы получаете:',
    get: '🎁 Собрать',
    transferred: '🥳 Вы собрали',
  },
  balance: {
    message: 'Ваш баланс:',
    withdrawn: 'Выведено:',
    limit: 'Минимальная сумма вывода 0.5 TON!',
  },
  tasks: {
    list: {
      empty: 'Список заданий для тебя на данный момент пуст.\n\nТы выполнил все задания. Так держать!\n\nВступай в нашу группу чтобы следить за обновлениями',
      mining_disabled: 'Чтобы выполнять задания необходимо активировать маининг',
      task_title: 'Задание: #',
      task_name: 'Название:',
      task_description: 'Описание:',
      task_reward: 'Задание увеличит скорость вашего маининга на',
      task_completed: 'Задание выполнено, скорость твоего маининга увеличена на',
      task_error: 'Произошла ошибка на сервере. Задание не выполнено, попробуйте еще разок позже',
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
  information: {
    message: 'Блок информации, можно добавить текст и ссылку',
  },
  settings: {
    language: {
      used: 'Используется: ',
      choose: 'Выбери язык',
    },
  },
};
