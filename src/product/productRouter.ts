import { BaseRouter } from "../router/router";
import { ProductController } from "./controllers/productController";

export class ProductRouter extends BaseRouter<ProductController>{
  constructor () {
    super(ProductController)
  }

  public routes() {
    this.router.get('/products', (req, res, next) => this.controller.getProducts(req, res, next))    
    this.router.get('/products/:id', (req, res, next) => this.controller.getProductByID(req, res, next))    
    this.router.post('/products', (req, res, next) => this.controller.createProduct(req, res, next))    
    this.router.put('/products/:id', (req, res, next) => this.controller.updateProduct(req, res, next))    
    this.router.delete('/products/:id', (req, res, next) => this.controller.deleteProduct(req, res, next))    
  }
}
