/* eslint-disable max-len */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Admins1717737864524 implements MigrationInterface {
  // eslint-disable-next-line class-methods-use-this
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO users (id, firstname, lastname, username, lang, country, role, gender)
        VALUES ('258000010', 'Sergei', 'Zheludkov', 'sergeizheludkov', 'ru', 'RU', 'admin', 'male');
      INSERT INTO users (id, firstname, username, lang, country, role, gender)
        VALUES ('282089418', 'Victor', 'victor369_369', 'ru', 'RU', 'advertiser', 'male');
--      INSERT INTO users (id, firstname, lastname, username, lang, country, role, gender, who_invited_id)
--        VALUES ('906422390', 'Anton', 'Zaitsev📈', 'ant_ztsv', 'ru', 'RU', 'advertiser', 'male', '258000010');
    
--      INSERT INTO mining (id, ton_rate) VALUES ('258000010', 0);
--      INSERT INTO mining (id, ton_rate) VALUES ('282089418', 0);
--      INSERT INTO mining (id, ton_rate) VALUES ('906422390', 0);
    
      INSERT INTO wallets (id, ton_amount) VALUES ('258000010', 0);
      INSERT INTO wallets (id, ton_amount) VALUES ('282089418', 0);
--      INSERT INTO wallets (id, ton_amount) VALUES ('906422390', 0);
    `);

    console.log('::MIGRATION USERS ADDED');
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-empty-function
  public async down(_queryRunner: QueryRunner): Promise<void> {
  }
}
