"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const productService_1 = require("../services/productService");
class ProductController {
    constructor(productService = new productService_1.ProductService()) {
        this.productService = productService;
    }
}
exports.ProductController = ProductController;
