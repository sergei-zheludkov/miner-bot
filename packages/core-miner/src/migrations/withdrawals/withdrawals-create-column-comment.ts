import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class WithdrawalsCreateColumnComment1720778941623 implements MigrationInterface {
  // eslint-disable-next-line class-methods-use-this
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'withdrawals',
      new TableColumn({
        name: 'comment',
        type: 'varchar',
      }),
    );

    console.log('\n\nWithdrawalsCreateColumnComment\n\n');
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<void> {
  }
}
