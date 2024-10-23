import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ProductEntity } from "../../product/entities/product.entity";

@Entity({ name: 'categories' })
export class CategoryEntity extends BaseEntity {
  @Column()
  name!: string


  @OneToMany(() => ProductEntity, ({ category }) => category)
  products!: ProductEntity []
} 