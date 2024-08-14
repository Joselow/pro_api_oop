import dotenv from 'dotenv';
import { type DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export abstract class ConfigServer {
  constructor(){
    const nodeNameEnv = this.createPathEnv(this.nodeEnv)    
    dotenv.config({
      path: nodeNameEnv
    })
  }

  public get nodeEnv(): string {
    return this.getEnviroment('NODE_ENV')
  }

  public getEnviroment(k: string): string {
    return process.env[k] || ''
  }

  public getNumberEnv(k: string): number {
    return Number(this.getEnviroment(k))
  }

  public createPathEnv(path?: string): string {
    const arrEnv: string[] = ['env']

    if (path) {
      arrEnv.unshift(path)
    }

    return `.${arrEnv.join('.')}`
  }

  public get typeORMConfig(): DataSourceOptions {
    return {
      type: 'mysql',
      host: this.getEnviroment('DB_HOST'),
      port: this.getNumberEnv('DB_PORT'),
      username: this.getEnviroment('DB_USERNAME'),
      password: this.getEnviroment('DB_PASSWORD'),
      database: this.getEnviroment('DB_DATABASE'),
      entities: [__dirname + '/../**/*.entity{.ts, .js}'],
      migrations: [__dirname + '/../../migrations/*{.ts, .js}'],
      synchronize: true,
      logging: true,
      namingStrategy: new SnakeNamingStrategy(), 
    }
  }
}