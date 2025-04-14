import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrateUsers1744264691935 implements MigrationInterface {
    name = 'MigrateUsers1744264691935'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "login" character varying NOT NULL, "password" integer NOT NULL, "email" character varying NOT NULL, "nickname" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
