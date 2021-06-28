import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1623971710439 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
