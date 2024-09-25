import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ProductEntity } from "../../product/entities/product.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";

@Entity({ name: 'purchase_to_product' })
export class PurchaseToProduct extends BaseEntity {
  @Column()
  quantity!: number

  @Column()
  totalPrice!: number

  @ManyToOne(() => PurchaseEntity, (purchase) => purchase.purchaseToProducts)
  public purchase!: PurchaseEntity

  @ManyToOne(() => ProductEntity, (product) => product.purchaseToProducts)
  public product!: ProductEntity
} 