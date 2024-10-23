import { DataSource } from "typeorm";
import { ConfigServer } from "./config";

const configServer = new ConfigServer();
export const dataSource = new DataSource(configServer.typeORMConfig);

export const dbConnect = async (): Promise<DataSource> =>{
  if (!dataSource.isInitialized) {
    try {
      console.log('inicializando');
      await dataSource.initialize();
      console.log("Database connection established successfully.");
    } catch (error) {
      console.error("Error establishing database connection:", error);
      throw new Error("Error establishing database connection");
    }
  }
  return dataSource;
};