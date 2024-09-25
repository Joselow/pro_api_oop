import express from "express";
import cors from "cors";
import morgan from "morgan";
import type { Router, Application } from "express";
import { UserRouter } from "./user/userRouter";
import { ConfigServer } from "./config/config";
import { DataSource } from "typeorm";

class ServerBootstrap extends ConfigServer {
  public app: Application = express();
  private port: number = this.getNumberEnv('PORT')

  constructor () {
    super()

    this.startNecesaryMidlewares()
    this.app.use('/api', this.routes())
    this.listen()

    this.dbConnect()
  }

  public startNecesaryMidlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(morgan('dev'))
    this.app.use(cors())
  }

  public routes (): Router [] {
    return [
      new UserRouter().router
    ]
  }

  public listen () {
    this.app.listen(this.port, () => {      
      console.log(`listening on http://localhost:${this.port}`)
    });
  }
  async dbConnect () {
    try {
      await new DataSource(this.typeORMConfig).initialize();
      console.log("Data Source has been initialized!")
    } catch (err) {
      console.error("Error during Data Source initialization", err)
    }
  }
}

new ServerBootstrap()

