import { Router } from 'express'

export class BaseRouter<T> {
  public router: Router = Router()
  public controller: T

  constructor (TController: {new (): T}) { // "tipo de un constructor" en TypeScript.    
    this.controller = new TController()
    this.routes()
  }

  public routes () {}
}