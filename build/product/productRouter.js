"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const router_1 = require("../router/router");
const productController_1 = require("./controllers/productController");
class ProductRouter extends router_1.BaseRouter {
    constructor() {
        super(productController_1.ProductController);
    }
    routes() {
        // this.router.get('/products', (req, res, next) => this.controller.getproducts(req, res, next))    
        // this.router.get('/products/:id', (req, res, next) => this.controller.getUserById(req, res, next))    
        // this.router.post('/products', (req, res, next) => this.controller.createUser(req, res, next))    
        // this.router.put('/products/:id', (req, res, next) => this.controller.updateUser(req, res, next))    
        // this.router.delete('/products/:id', (req, res, next) => this.controller.deleteUser(req, res, next))    
    }
}
exports.ProductRouter = ProductRouter;
