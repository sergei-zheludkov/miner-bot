import { MigrationInterface, QueryRunner } from 'typeorm';

export class DefaultTonRate1719195075274 implements MigrationInterface {
  // eslint-disable-next-line class-methods-use-this
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE mining ALTER COLUMN ton_rate SET DEFAULT 0.0000001;
    `);
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-empty-function
  public async down(_queryRunner: QueryRunner): Promise<void> {
  }
}
