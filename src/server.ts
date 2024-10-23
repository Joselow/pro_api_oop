import express from "express";
import cors from "cors";
import morgan from "morgan";
import { UserRouter } from "./user/userRouter";
import { ConfigServer } from "./config/config";
import type { Router, Application, Request, Response, NextFunction, } from "express";
import { error } from "./utils/responses";
import { ProductRouter } from "./product/productRouter";

class ServerBootstrap extends ConfigServer {
  public app: Application = express();
  private port: number = this.getNumberEnv('PORT')

  constructor () {
    super()

    this.dbInit()
    this.startNecesaryMidlewares()
    this.app.use('/api', this.routes())
    this.manageErrors()
    this.listen()
    // this.dbConnect()
  }

  public startNecesaryMidlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(morgan('dev'))
    this.app.use(cors())
  }

  public routes (): Router [] {
    return [
      new UserRouter().router,
      new ProductRouter().router
    ]
  }

  public manageErrors () {
    this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
      const { statusCode = 500, message, errors = null} = err
      error(res, statusCode, message, errors )
    })
  }

  public listen () {
    this.app.listen(this.port, () => {      
      console.log(`listening on http://localhost:${this.port}`)
    });
  }
}

new ServerBootstrap()

