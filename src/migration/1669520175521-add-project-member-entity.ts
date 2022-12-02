import { MigrationInterface, QueryRunner } from "typeorm";

export class addProjectMemberEntity1669520175521 implements MigrationInterface {
    name = 'addProjectMemberEntity1669520175521'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`project_member\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`CreatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`UpdatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`IsAdmin\` tinyint NOT NULL, \`IsActive\` tinyint NOT NULL, \`projectIdId\` varchar(36) NULL, \`userIdId\` varchar(36) NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`project_member\` ADD CONSTRAINT \`FK_52f0f2bf51cfa0d9ae016dac0c2\` FOREIGN KEY (\`projectIdId\`) REFERENCES \`project\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_member\` ADD CONSTRAINT \`FK_6a7e8941e1c0b05970b1aecfbdb\` FOREIGN KEY (\`userIdId\`) REFERENCES \`user\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`project_member\` DROP FOREIGN KEY \`FK_6a7e8941e1c0b05970b1aecfbdb\``);
        await queryRunner.query(`ALTER TABLE \`project_member\` DROP FOREIGN KEY \`FK_52f0f2bf51cfa0d9ae016dac0c2\``);
        await queryRunner.query(`DROP TABLE \`project_member\``);
    }

}
