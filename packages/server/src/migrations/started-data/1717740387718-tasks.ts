import { MigrationInterface, QueryRunner } from 'typeorm';

export class Tasks1717740387718 implements MigrationInterface {
  // eslint-disable-next-line class-methods-use-this
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO tasks (id, type, country, placement, gender, available_limit, name, description, check_key, contact, url, created, updated) 
        VALUES
          (1, 'tg_public', 'RU', 'mining_activation', 'all', 1000000, 'Mining Bot Info', 'Телеграм канал от Бота', '-1002171422573', 'tg_id:258000010', 'https://t.me/tg_ton_mining', '2023-06-03 00:00:00', '2023-06-03 00:00:00'),
          (2, 'tg_public', 'KZ', 'mining_activation', 'all', 1000000, 'Mining Bot Info', 'Телеграм канал от Бота', '-1002171422573', 'tg_id:258000010', 'https://t.me/tg_ton_mining', '2023-06-03 00:00:00', '2023-06-03 00:00:00'),
          (3, 'tg_public', 'BY', 'mining_activation', 'all', 1000000, 'Mining Bot Info', 'Телеграм канал от Бота', '-1002171422573', 'tg_id:258000010', 'https://t.me/tg_ton_mining', '2023-06-03 00:00:00', '2023-06-03 00:00:00'),
          (4, 'tg_public', 'RU', 'mining_activation', 'all', 1000000, 'Crypto Sigma', 'Мой канал по Крипте', '-1002219211474', 'tg_id:258000010', 'https://t.me/crypto_sigma_1', '2023-06-03 00:00:00', '2023-06-03 00:00:00'),
          (5, 'tg_public', 'KZ', 'mining_activation', 'all', 1000000, 'Crypto Sigma', 'Мой канал по Крипте', '-1002219211474', 'tg_id:258000010', 'https://t.me/crypto_sigma_1', '2023-06-03 00:00:00', '2023-06-03 00:00:00'),
          (6, 'tg_public', 'BY', 'mining_activation', 'all', 1000000, 'Crypto Sigma', 'Мой канал по Крипте', '-1002219211474', 'tg_id:258000010', 'https://t.me/crypto_sigma_1', '2023-06-03 00:00:00', '2023-06-03 00:00:00'),
          (7, 'tg_public', 'RU', 'task_list', 'all', 10000, 'Development', '1️⃣ Переходи на канал 👇🏻 подпиcывайся и листай ленту вверх🔝👁 (5-7 постов)

2️⃣ Возвращайся сюда, чтобы получить вознаграждение', '-1002238903830', 'tg_id:258000010', 'https://t.me/bro_development', '2023-06-03 00:00:00', '2023-06-03 00:00:00');
    `);

    console.log('::MIGRATION TASK ADDED');
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-empty-function
  public async down(_queryRunner: QueryRunner): Promise<void> {
  }
}
