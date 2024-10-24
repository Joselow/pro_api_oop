import { DataSource } from "typeorm";
import { ConfigServer } from "./config";

const configServer = new ConfigServer();
export const dataSource = new DataSource(configServer.typeORMConfig);

export const dbConnect = async (): Promise<DataSource> =>{
  if (!dataSource.isInitialized) {
    try {
      console.log('Initializing');
      await dataSource.initialize();
      console.log("Database connection established successfully.");
    } catch (error) {
      console.error("Error establishing database connection:", error);
      // process.exit(1);   // we can finish it or try to reconnect it with the db
    }
  }
  return dataSource;
};