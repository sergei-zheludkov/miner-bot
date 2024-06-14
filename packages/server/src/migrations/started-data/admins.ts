import { MigrationInterface, QueryRunner } from 'typeorm';

export class Admins1717737864524 implements MigrationInterface {
  // eslint-disable-next-line class-methods-use-this
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO wallets (id, ton_amount) VALUES ('258000010', 0);
      INSERT INTO mining (id, ton_rate) VALUES ('258000010', 0);

      INSERT INTO users (id, firstname, lastname, username, lang, country, role, gender, wallet_id, mining_id) 
        VALUES ('258000010', 'Sergei', 'Zheludkov', 'sergeizheludkov', 'ru', 'RU', 'admin', 'male', '258000010', '258000010');
    `);

    console.log('::MIGRATION USER ADDED');
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-empty-function
  public async down(_queryRunner: QueryRunner): Promise<void> {
  }
}
