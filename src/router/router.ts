import { Router } from 'express'

export class BaseRouter<T, U = undefined> {
  public router: Router = Router()
  public controller: T
  public midleware?: U

  constructor (TController: {new (): T}, UMidleware?: { new (): U }) { // "tipo de un constructor" en TypeScript.    
    this.controller = new TController()
    if (UMidleware) {
      this.midleware = new UMidleware(); // Solo se inicializa si UMidleware se proporciona
    }
    this.routes()
  }

  public routes () {}
}