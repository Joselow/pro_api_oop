"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const productService_1 = require("../services/productService");
const responses_1 = require("../../utils/responses");
const catchFunctions_1 = require("../../utils/catchFunctions");
class ProductController {
    constructor(productService = new productService_1.ProductService()) {
        this.productService = productService;
        this.getProducts = (0, catchFunctions_1.catchFunctions)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productService.getProducts();
            (0, responses_1.success)(res, 200, products);
        }));
        this.getProductByID = (0, catchFunctions_1.catchFunctions)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleted = yield this.productService.getProductById(id);
            (0, responses_1.success)(res, 200, deleted);
        }));
        this.createProduct = (0, catchFunctions_1.catchFunctions)((req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log('me llegó');
            const product = yield this.productService.createProduct(req.body);
            (0, responses_1.success)(res, 200, product);
        }));
        this.updateProduct = (0, catchFunctions_1.catchFunctions)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const product = yield this.productService.updateProduct(id, req.body);
            (0, responses_1.success)(res, 200, product);
        }));
        this.deleteProduct = (0, catchFunctions_1.catchFunctions)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const product = yield this.productService.deleteProduct(id);
            (0, responses_1.success)(res, 200, product);
        }));
    }
}
exports.ProductController = ProductController;
