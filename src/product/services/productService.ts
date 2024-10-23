import { DeleteResult, UpdateResult } from "typeorm";

import { BaseService } from "../../config/base.service";
import { ProductDTO } from "../dtos/productDTO";
import { ProductEntity } from "../entities/product.entity";

export class ProductService extends BaseService<ProductEntity>{
  constructor() {
    super(ProductEntity)
  }

  async getProducts(): Promise<ProductEntity[]> {    
    return await this.repository.find()
  }

  async getProductById(id: ProductEntity['id']): Promise<ProductEntity | null> {    
    return await this.repository.findOneBy({ id})
  }

  async createProduct(body: ProductDTO): Promise<ProductEntity> {    
    return await this.repository.save(body)
  }

  async updateProduct(id: ProductEntity['id'], body: ProductDTO): Promise<UpdateResult> {    
    return await this.repository.update({ id: id }, body)
  }

  async deleteProduct(id: ProductEntity['id']): Promise<DeleteResult>  {    
    return await this.repository.delete({ id })
  }

}