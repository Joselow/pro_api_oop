import { Column, Entity, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from '../../config/base.entity'
import { UserEntity } from "../../user/entities/user.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";

@Entity({ name: 'customers' })
export class CustomerEntity extends BaseEntity {
  @Column()
  address!: string

  @Column()
  dni!: number

  @OneToOne(() => UserEntity, (user) => user.customer) 
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity

  @OneToMany(() => PurchaseEntity, ({ customer }) => customer)
  purchases!: PurchaseEntity[]
}