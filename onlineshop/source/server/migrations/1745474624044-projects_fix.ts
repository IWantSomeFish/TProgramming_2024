import { MigrationInterface, QueryRunner } from "typeorm";

export class ProjectsFix1745474624044 implements MigrationInterface {
    name = 'ProjectsFix1745474624044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "projectName" character varying NOT NULL, "desription" character varying NOT NULL, "feeAmount" integer NOT NULL, "alreadyCollected" integer NOT NULL, "likesCount" integer NOT NULL, "dislikesCount" integer NOT NULL, "endTime" TIMESTAMP NOT NULL, "userId" integer, CONSTRAINT "UQ_22eee2edb529c134f0f4ecad3ad" UNIQUE ("projectName"), CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_7c4b0d3b77eaf26f8b4da879e63" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_7c4b0d3b77eaf26f8b4da879e63"`);
        await queryRunner.query(`DROP TABLE "project"`);
    }

}
