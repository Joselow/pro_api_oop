import express from "express";
import cors from "cors";
import morgan from "morgan";
import type { Router, Application } from "express";
import { UserRouter } from "./router/userRouter";

class ServerBootstrap {
  public app: Application = express();
  private port: number = 8000;

  constructor () {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
    this.app.use(cors());

    this.app.use('/api', this.routes())
    this.listen();
  }

  public routes (): Router [] {
    return [
      new UserRouter().router
    ]
  }

  public listen () {
    this.app.listen(this.port, () => {
      console.log(`listening on http://localhost:${this.port}`);
      
    });
  }
}

new ServerBootstrap()
