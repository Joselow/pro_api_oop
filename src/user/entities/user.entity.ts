import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customer/entities/customer.entity";

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column()
  name!: string

  @Column()
  lastName!: string

  @Column({ nullable: false })
  email!: string

  @Column({ nullable: false })
  password!: string

  @Column({ nullable: false })
  city!: string

  @Column()
  province!: string

  @Column()
  username!: string; 

  @Column({ nullable: true })
  position?: string; 
  @Column({ type: 'int', nullable: false })
  phoneNumber!: number;

  @OneToOne(() => CustomerEntity, (customer) => customer.user)
  customer!: CustomerEntity
} 