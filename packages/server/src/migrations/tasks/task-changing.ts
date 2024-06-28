import { MigrationInterface, QueryRunner } from 'typeorm';

export class TaskChanging1719563573058 implements MigrationInterface {
  // eslint-disable-next-line class-methods-use-this
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      UPDATE tasks SET deleted = '2024-06-29 00:00:00' 
        WHERE name = 'Masons ✖ Crypto'
        OR name = 'MELLSTROY BONUS'
        OR name = 'Анонимный криптан'
        OR name = 'СТАВКИ НА СПОРТ | ПРОГНОЗЫ';
      
      UPDATE tasks SET name = 'Dev Live Style 👨‍💻', placement = 'mining_activation'
        WHERE name = 'Development';
        
      UPDATE tasks SET name = 'Mining Bot Info 💡'
        WHERE name = 'Mining Bot Info';
        
      UPDATE tasks SET description = '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов) и оставляй реакции 🔥
  
2️⃣ Возвращайся сюда, чтобы получить вознаграждение'
      WHERE NAME = 'Оцени Малышку 🍓' OR NAME = 'Разъеб 🤣🤣🤣';
      
      INSERT INTO "tasks" (id, type, country, placement, gender, available_limit, name, description, check_key, contact_id, url, currency, created, updated) VALUES
        (36, 'tg_public', 'RU', 'mining_activation', 'all', 10000000, 'Crypto Sigma 💵', '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов) и оставляй реакции 🔥
  
2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002219211474', '258000010', 'https://t.me/crypto_sigma_1', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (37, 'tg_public', 'KZ', 'mining_activation', 'all', 10000000, 'Crypto Sigma 💵', '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов) и оставляй реакции 🔥
  
2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002219211474', '258000010', 'https://t.me/crypto_sigma_1', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (38, 'tg_public', 'BY', 'mining_activation', 'all', 10000000, 'Crypto Sigma 💵', '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов) и оставляй реакции 🔥
  
2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002219211474', '258000010', 'https://t.me/crypto_sigma_1', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (39, 'tg_public', 'UA', 'mining_activation', 'all', 10000000, 'Crypto Sigma 💵', '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов) и оставляй реакции 🔥
  
2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002219211474', '258000010', 'https://t.me/crypto_sigma_1', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),

        (40, 'tg_public', 'RU', 'task_list', 'all', 10000000, 'MELLSTROY | ДВИЖ 💎', '1️⃣ Переходи на канал 👇🏻 подпиcывайся, листай ленту вверх🔝👁 (5-7 постов) и оставляй реакции 🔥

2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002173892902', '258000010', 'https://t.me/+v9uIm8b98bg2N2Zi', 'ton', '2024-06-29 00:00:00', '2024-06-29 00:00:00'),
        (41, 'tg_public', 'KZ', 'task_list', 'all', 10000000, 'MELLSTROY | ДВИЖ 💎', '1️⃣ Переходи на канал 👇🏻 подпиcывайся, листай ленту вверх🔝👁 (5-7 постов) и оставляй реакции 🔥

2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002173892902', '258000010', 'https://t.me/+v9uIm8b98bg2N2Zi', 'ton', '2024-06-29 00:00:00', '2024-06-29 00:00:00'),
        (42, 'tg_public', 'BY', 'task_list', 'all', 10000000, 'MELLSTROY | ДВИЖ 💎', '1️⃣ Переходи на канал 👇🏻 подпиcывайся, листай ленту вверх🔝👁 (5-7 постов) и оставляй реакции 🔥

2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002173892902', '258000010', 'https://t.me/+v9uIm8b98bg2N2Zi', 'ton', '2024-06-29 00:00:00', '2024-06-29 00:00:00'),
        (43, 'tg_public', 'UA', 'task_list', 'all', 10000000, 'MELLSTROY | ДВИЖ 💎', '1️⃣ Переходи на канал 👇🏻 подпиcывайся, листай ленту вверх🔝👁 (5-7 постов) и оставляй реакции 🔥

2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002173892902', '258000010', 'https://t.me/+v9uIm8b98bg2N2Zi', 'ton', '2024-06-29 00:00:00', '2024-06-29 00:00:00'),
        (44, 'tg_public', 'RU', 'task_list', 'all', 10000000, 'ЛОГОВО КАПЕРА ⚽', '1️⃣ Переходи на канал 👇🏻 подпиcывайся, листай ленту вверх🔝👁 (5-7 постов) и оставляй реакции 🔥

2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002056312512', '258000010', 'https://t.me/+uAWTINMsfcMxOTdi', 'ton', '2024-06-29 00:00:00', '2024-06-29 00:00:00'),
        (45, 'tg_public', 'KZ', 'task_list', 'all', 10000000, 'ЛОГОВО КАПЕРА ⚽', '1️⃣ Переходи на канал 👇🏻 подпиcывайся, листай ленту вверх🔝👁 (5-7 постов) и оставляй реакции 🔥

2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002056312512', '258000010', 'https://t.me/+uAWTINMsfcMxOTdi', 'ton', '2024-06-29 00:00:00', '2024-06-29 00:00:00'),
        (46, 'tg_public', 'BY', 'task_list', 'all', 10000000, 'ЛОГОВО КАПЕРА ⚽', '1️⃣ Переходи на канал 👇🏻 подпиcывайся, листай ленту вверх🔝👁 (5-7 постов) и оставляй реакции 🔥

2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002056312512', '258000010', 'https://t.me/+uAWTINMsfcMxOTdi', 'ton', '2024-06-29 00:00:00', '2024-06-29 00:00:00'),
        (47, 'tg_public', 'UA', 'task_list', 'all', 10000000, 'ЛОГОВО КАПЕРА ⚽', '1️⃣ Переходи на канал 👇🏻 подпиcывайся, листай ленту вверх🔝👁 (5-7 постов) и оставляй реакции 🔥

2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002056312512', '258000010', 'https://t.me/+uAWTINMsfcMxOTdi', 'ton', '2024-06-29 00:00:00', '2024-06-29 00:00:00'),
        (48, 'tg_public', 'RU', 'task_list', 'all', 10000000, 'Пиздец Жизнь 🩸 (18+)', '1️⃣ Переходи на канал 👇🏻 подпиcывайся, листай ленту вверх🔝👁 (5-7 постов) и оставляй реакции 🔥

2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002205808527', '258000010', 'https://t.me/+kLnv-0ee5wMyZGJi', 'ton', '2024-06-29 00:00:00', '2024-06-29 00:00:00'),
        (49, 'tg_public', 'KZ', 'task_list', 'all', 10000000, 'Пиздец Жизнь 🩸 (18+)', '1️⃣ Переходи на канал 👇🏻 подпиcывайся, листай ленту вверх🔝👁 (5-7 постов) и оставляй реакции 🔥

2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002205808527', '258000010', 'https://t.me/+kLnv-0ee5wMyZGJi', 'ton', '2024-06-29 00:00:00', '2024-06-29 00:00:00'),
        (50, 'tg_public', 'BY', 'task_list', 'all', 10000000, 'Пиздец Жизнь 🩸 (18+)', '1️⃣ Переходи на канал 👇🏻 подпиcывайся, листай ленту вверх🔝👁 (5-7 постов) и оставляй реакции 🔥

2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002205808527', '258000010', 'https://t.me/+kLnv-0ee5wMyZGJi', 'ton', '2024-06-29 00:00:00', '2024-06-29 00:00:00'),
        (51, 'tg_public', 'UA', 'task_list', 'all', 10000000, 'Пиздец Жизнь 🩸 (18+)', '1️⃣ Переходи на канал 👇🏻 подпиcывайся, листай ленту вверх🔝👁 (5-7 постов) и оставляй реакции 🔥

2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002205808527', '258000010', 'https://t.me/+kLnv-0ee5wMyZGJi', 'ton', '2024-06-29 00:00:00', '2024-06-29 00:00:00');

      ALTER SEQUENCE tasks_id_seq RESTART WITH 52;
    `);
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<void> {
  }
}
