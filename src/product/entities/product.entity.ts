import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CategoryEntity } from "../../category/entities/category.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";
import { PurchaseToProduct } from "../../puchaseToProduct/entities/purchaseToProduct.entity";

@Entity({ name: 'products' })
export class ProductEntity extends BaseEntity {
  @Column()
  name!: string

  @Column()
  description!: string

  @Column({ nullable: false })
  price!: number

  @PrimaryGeneratedColumn('uuid')
  categoryId!: string


  @ManyToOne(() => CategoryEntity, ({ products }) => products)
  @JoinColumn({ name: 'category_id'})
  category!: CategoryEntity


  @OneToMany(() => PurchaseToProduct, ({ product }) => product)
  purchaseToProducts!: PurchaseToProduct[];
} 