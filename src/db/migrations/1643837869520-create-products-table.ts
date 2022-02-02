import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createProductsTable1643837869520 implements MigrationInterface {
  private products = new Table({
    name: 'products',
    columns: [
      {
        name: 'id',
        type: 'int',
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
      },
      {
        name: 'price',
        type: 'double precision',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.products);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.products);
  }
}
