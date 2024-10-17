import { BaseService } from "../../config/base.service";
import { ProductEntity } from "../entities/product.entity";

export class ProductService extends BaseService<ProductEntity>{
  constructor() {
    super(ProductEntity)
  }
}