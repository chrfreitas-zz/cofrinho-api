import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateGoalTable1580340531267 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      CREATE TABLE goal (
        id serial PRIMARY KEY,
        name VARCHAR(120) NOT NULL,
        date VARCHAR(300) NOT NULL,
        value integer NOT NULL
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS goal 
    `);
  }
}
