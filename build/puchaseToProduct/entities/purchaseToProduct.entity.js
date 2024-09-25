"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseToProduct = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const product_entity_1 = require("../../product/entities/product.entity");
const purchase_entity_1 = require("../../purchase/entities/purchase.entity");
let PurchaseToProduct = class PurchaseToProduct extends base_entity_1.BaseEntity {
};
exports.PurchaseToProduct = PurchaseToProduct;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PurchaseToProduct.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PurchaseToProduct.prototype, "totalPrice", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => purchase_entity_1.PurchaseEntity, (purchase) => purchase.purchaseToProducts),
    __metadata("design:type", purchase_entity_1.PurchaseEntity)
], PurchaseToProduct.prototype, "purchase", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.ProductEntity, (product) => product.purchaseToProducts),
    __metadata("design:type", product_entity_1.ProductEntity)
], PurchaseToProduct.prototype, "product", void 0);
exports.PurchaseToProduct = PurchaseToProduct = __decorate([
    (0, typeorm_1.Entity)({ name: 'purchase_to_product' })
], PurchaseToProduct);
