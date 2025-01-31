import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customer/entities/customer.entity";
import { PurchaseToProduct } from "./purchaseToProduct.entity";

@Entity({ name: 'purchases' })
export class PurchaseEntity extends BaseEntity {
  @Column()
  paymentMethod!: string

  @Column()
  status!: string

  @ManyToOne(() => CustomerEntity, (customer) => customer.purchases)
  @JoinColumn({ name: 'customer_id'})
  customer!: CustomerEntity

  @OneToMany(() => PurchaseToProduct, ({ purchase }) => purchase)
  purchaseToProducts!: PurchaseToProduct[];
} 