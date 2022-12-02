import { MigrationInterface, QueryRunner } from "typeorm";

export class bugsRegisterInitialMigration1669492159813 implements MigrationInterface {
    name = 'bugsRegisterInitialMigration1669492159813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`bug_row\` (\`Id\` varchar(36) NOT NULL, \`CreatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`UpdatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`CreatedBy\` varchar(255) NOT NULL, \`UpdatedBy\` varchar(255) NOT NULL, \`ColumnTextValue\` text NOT NULL, \`columnId\` varchar(36) NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`bug_column\` (\`Id\` varchar(36) NOT NULL, \`CreatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`UpdatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`CreatedBy\` varchar(255) NOT NULL, \`UpdatedBy\` varchar(255) NOT NULL, \`ColumnName\` varchar(60) NOT NULL, \`Position\` int NOT NULL, \`bugId\` int NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`bug\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`CreatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`UpdatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`CreatedBy\` varchar(255) NOT NULL, \`UpdatedBy\` varchar(255) NOT NULL, \`BugCode\` varchar(16) NOT NULL, \`isDeleted\` tinyint NOT NULL, \`projectId\` varchar(36) NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`Id\` varchar(36) NOT NULL, \`CreatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`UpdatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`Name\` varchar(40) NOT NULL, \`Email\` varchar(40) NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project\` (\`Id\` varchar(36) NOT NULL, \`CreatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`UpdatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`ProjectName\` varchar(32) NOT NULL, \`IsArchived\` tinyint NOT NULL, \`IsPrivate\` tinyint NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project_invite\` (\`Id\` varchar(36) NOT NULL, \`CreatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`UpdatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`expiry\` timestamp NOT NULL, \`projectIdId\` varchar(36) NULL, \`createdById\` varchar(36) NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ProjectMember\` (\`user\` varchar(36) NOT NULL, \`project\` varchar(36) NOT NULL, INDEX \`IDX_564f920f3a9ffa5a4c90007f6a\` (\`user\`), INDEX \`IDX_baaa8b2804669e98c777b78a44\` (\`project\`), PRIMARY KEY (\`user\`, \`project\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`bug_row\` ADD CONSTRAINT \`FK_03aa15af54e03ea03c64c7e7ffc\` FOREIGN KEY (\`columnId\`) REFERENCES \`bug_column\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bug_column\` ADD CONSTRAINT \`FK_3854e30245da49d50edb6a1b5d5\` FOREIGN KEY (\`bugId\`) REFERENCES \`bug\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bug\` ADD CONSTRAINT \`FK_9664e57ebbd639b92903b710cc2\` FOREIGN KEY (\`projectId\`) REFERENCES \`project\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_invite\` ADD CONSTRAINT \`FK_93b7491086074d126b4f56a27ad\` FOREIGN KEY (\`projectIdId\`) REFERENCES \`project\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_invite\` ADD CONSTRAINT \`FK_327f4d786ef9efd398b6dcb24a4\` FOREIGN KEY (\`createdById\`) REFERENCES \`user\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ProjectMember\` ADD CONSTRAINT \`FK_564f920f3a9ffa5a4c90007f6a5\` FOREIGN KEY (\`user\`) REFERENCES \`project\`(\`Id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`ProjectMember\` ADD CONSTRAINT \`FK_baaa8b2804669e98c777b78a446\` FOREIGN KEY (\`project\`) REFERENCES \`user\`(\`Id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ProjectMember\` DROP FOREIGN KEY \`FK_baaa8b2804669e98c777b78a446\``);
        await queryRunner.query(`ALTER TABLE \`ProjectMember\` DROP FOREIGN KEY \`FK_564f920f3a9ffa5a4c90007f6a5\``);
        await queryRunner.query(`ALTER TABLE \`project_invite\` DROP FOREIGN KEY \`FK_327f4d786ef9efd398b6dcb24a4\``);
        await queryRunner.query(`ALTER TABLE \`project_invite\` DROP FOREIGN KEY \`FK_93b7491086074d126b4f56a27ad\``);
        await queryRunner.query(`ALTER TABLE \`bug\` DROP FOREIGN KEY \`FK_9664e57ebbd639b92903b710cc2\``);
        await queryRunner.query(`ALTER TABLE \`bug_column\` DROP FOREIGN KEY \`FK_3854e30245da49d50edb6a1b5d5\``);
        await queryRunner.query(`ALTER TABLE \`bug_row\` DROP FOREIGN KEY \`FK_03aa15af54e03ea03c64c7e7ffc\``);
        await queryRunner.query(`DROP INDEX \`IDX_baaa8b2804669e98c777b78a44\` ON \`ProjectMember\``);
        await queryRunner.query(`DROP INDEX \`IDX_564f920f3a9ffa5a4c90007f6a\` ON \`ProjectMember\``);
        await queryRunner.query(`DROP TABLE \`ProjectMember\``);
        await queryRunner.query(`DROP TABLE \`project_invite\``);
        await queryRunner.query(`DROP TABLE \`project\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`bug\``);
        await queryRunner.query(`DROP TABLE \`bug_column\``);
        await queryRunner.query(`DROP TABLE \`bug_row\``);
    }

}
