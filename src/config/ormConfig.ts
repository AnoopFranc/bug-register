import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

const DB_CREDENTIALS: DataSourceOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
    ? parseInt(process.env.DB_PORT as string)
    : undefined,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "",
  entities: ["src/model/*.ts"],
  migrationsTableName: "bug-register-migration",
  migrations: ["src/migration/*.ts"],
  migrationsRun: true,
};

const datasource = new DataSource(DB_CREDENTIALS);
export default datasource;
