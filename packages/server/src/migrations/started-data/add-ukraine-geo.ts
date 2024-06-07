import { MigrationInterface, QueryRunner } from 'typeorm';

export class GeoUA1717740387718 implements MigrationInterface {
  // eslint-disable-next-line class-methods-use-this
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TYPE users_country_enum ADD VALUE 'UA';
      ALTER TYPE tasks_country_enum ADD VALUE 'UA';
    `);

    console.log('::MIGRATION UA GEO ADDED');
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-empty-function
  public async down(_queryRunner: QueryRunner): Promise<void> {
  }
}
