/* eslint-disable max-len */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Tasks1717740387718 implements MigrationInterface {
  // eslint-disable-next-line class-methods-use-this
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "tasks" (id, type, country, placement, gender, available_limit, name, description, check_key, contact_id, url, currency, created, updated) VALUES
        (1, 'tg_public', 'RU', 'mining_activation', 'all', 10000000, 'Mining Bot Info', 'Телеграм канал от Бота', '-1002171422573', '258000010', 'https://t.me/tg_ton_mining', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (2, 'tg_public', 'KZ', 'mining_activation', 'all', 10000000, 'Mining Bot Info', 'Телеграм канал от Бота', '-1002171422573', '258000010', 'https://t.me/tg_ton_mining', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (3, 'tg_public', 'BY', 'mining_activation', 'all', 10000000, 'Mining Bot Info', 'Телеграм канал от Бота', '-1002171422573', '258000010', 'https://t.me/tg_ton_mining', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (4, 'tg_public', 'UA', 'mining_activation', 'all', 10000000, 'Mining Bot Info', 'Телеграм канал от Бота', '-1002171422573', '258000010', 'https://t.me/tg_ton_mining', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (5, 'tg_public', 'RU', 'mining_activation', 'all', 10000000, 'Masons ✖ Crypto', 'Телеграм канал Вити по крипте', '-1001837445072', '282089418', 'https://t.me/masons369crypto', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (6, 'tg_public', 'KZ', 'mining_activation', 'all', 10000000, 'Masons ✖ Crypto', 'Телеграм канал Вити по крипте', '-1001837445072', '282089418', 'https://t.me/masons369crypto', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (7, 'tg_public', 'BY', 'mining_activation', 'all', 10000000, 'Masons ✖ Crypto', 'Телеграм канал Вити по крипте', '-1001837445072', '282089418', 'https://t.me/masons369crypto', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (8, 'tg_public', 'UA', 'mining_activation', 'all', 10000000, 'Masons ✖ Crypto', 'Телеграм канал Вити по крипте', '-1001837445072', '282089418', 'https://t.me/masons369crypto', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (9, 'tg_public', 'RU', 'mining_activation', 'all', 10000000, 'MELLSTROY BONUS', 'Телеграм канал Вити по Казино', '-1001233605629', '282089418', 'https://t.me/+ggzh0iLpo-piYTQy', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (10, 'tg_public', 'KZ', 'mining_activation', 'all', 10000000, 'MELLSTROY BONUS', 'Телеграм канал Вити по Казино', '-1001233605629', '282089418', 'https://t.me/+ggzh0iLpo-piYTQy', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (11, 'tg_public', 'BY', 'mining_activation', 'all', 10000000, 'MELLSTROY BONUS', 'Телеграм канал Вити по Казино', '-1001233605629', '282089418', 'https://t.me/+ggzh0iLpo-piYTQy', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (12, 'tg_public', 'UA', 'mining_activation', 'all', 10000000, 'MELLSTROY BONUS', 'Телеграм канал Вити по Казино', '-1001233605629', '282089418', 'https://t.me/+ggzh0iLpo-piYTQy', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (13, 'tg_public', 'RU', 'mining_activation', 'all', 10000000, 'Анонимный криптан', 'Телеграм канал Вити по крипте', '-1001419732561', '282089418', 'https://t.me/from100to1mil', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (14, 'tg_public', 'KZ', 'mining_activation', 'all', 10000000, 'Анонимный криптан', 'Телеграм канал Вити по крипте', '-1001419732561', '282089418', 'https://t.me/from100to1mil', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (15, 'tg_public', 'BY', 'mining_activation', 'all', 10000000, 'Анонимный криптан', 'Телеграм канал Вити по крипте', '-1001419732561', '282089418', 'https://t.me/from100to1mil', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (16, 'tg_public', 'UA', 'mining_activation', 'all', 10000000, 'Анонимный криптан', 'Телеграм канал Вити по крипте', '-1001419732561', '282089418', 'https://t.me/from100to1mil', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
--        (17, 'tg_public', 'RU', 'task_list', 'all', 10000000, 'Crypto Sigma', '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов)
--  
--2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002219211474', '258000010', 'https://t.me/crypto_sigma_1', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
--        (18, 'tg_public', 'KZ', 'task_list', 'all', 10000000, 'Crypto Sigma', '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов)
--  
--2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002219211474', '258000010', 'https://t.me/crypto_sigma_1', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
--        (19, 'tg_public', 'BY', 'task_list', 'all', 10000000, 'Crypto Sigma', '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов)
--  
--2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002219211474', '258000010', 'https://t.me/crypto_sigma_1', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
--        (20, 'tg_public', 'UA', 'task_list', 'all', 10000000, 'Crypto Sigma', '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов)
--  
--2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002219211474', '258000010', 'https://t.me/crypto_sigma_1', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (17, 'tg_public', 'RU', 'task_list', 'all', 10000000, 'Development', '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов)
  
2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002238903830', '258000010', 'https://t.me/bro_development', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (18, 'tg_public', 'KZ', 'task_list', 'all', 10000000, 'Development', '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов)
  
2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002238903830', '258000010', 'https://t.me/bro_development', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (19, 'tg_public', 'BY', 'task_list', 'all', 10000000, 'Development', '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов)
  
2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002238903830', '258000010', 'https://t.me/bro_development', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00'),
        (20, 'tg_public', 'UA', 'task_list', 'all', 10000000, 'Development', '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов)
  
2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002238903830', '258000010', 'https://t.me/bro_development', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00');
--        (25, 'tg_public', 'RU', 'task_list', 'all', 10000000, '🇬🇧Crypto English', '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов)
--  
--2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002238623344', '906422390', 'https://t.me/cryptoenglish7', 'ton', '2024-06-21 00:00:00', '2024-06-21 00:00:00');

        ALTER SEQUENCE tasks_id_seq RESTART WITH 21;
    `);

    console.log('::MIGRATION TASK ADDED');
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-empty-function
  public async down(_queryRunner: QueryRunner): Promise<void> {
  }
}
