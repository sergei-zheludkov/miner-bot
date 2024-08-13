import { MigrationInterface, QueryRunner } from 'typeorm';

export class TypeEnumExtensionTgComment1723127087388 implements MigrationInterface {
  // eslint-disable-next-line class-methods-use-this
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TYPE tasks_type_enum ADD VALUE 'tg_comment';
    `);
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<void> {
  }
}
