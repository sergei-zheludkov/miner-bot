import { MigrationInterface, QueryRunner } from 'typeorm';

export class ReferralLeaders1719555005942 implements MigrationInterface {
  // eslint-disable-next-line class-methods-use-this
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO toggles (key, value, created, updated) VALUES
        ('referral_leaders', false, '2024-06-21 00:00:00', '2024-06-21 00:00:00');
    `);
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<void> {
  }
}
