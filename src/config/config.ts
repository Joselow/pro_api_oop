import dotenv from 'dotenv';

export abstract class ConfigServer {
  constructor(){
    const nodeNameEnv = this.createPathEnv(this.nodeEnv)    
    dotenv.config({
      path: nodeNameEnv
    })
  }

  public get nodeEnv(): string {
    return this.getEnviroment('NODE_ENV')?.trim()
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
}