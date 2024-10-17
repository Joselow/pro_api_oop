"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const base_service_1 = require("../../config/base.service");
const product_entity_1 = require("../entities/product.entity");
class ProductService extends base_service_1.BaseService {
    constructor() {
        super(product_entity_1.ProductEntity);
    }
}
exports.ProductService = ProductService;
