import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customer/entities/customer.entity";
import { USER_ROLE } from "../enums/UserRole";

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column()
  name!: string

  @Column()
  lastName!: string

  @Column({ nullable: false })
  email!: string

  @Column({ nullable: false, select: false })
  password!: string

  @Column({ nullable: false })
  city!: string

  @Column()
  province!: string

  @Column()
  username!: string; 

  @Column({  type: 'enum', enum: USER_ROLE, nullable: false })
  role?: USER_ROLE; 

  @Column({ type: 'int', nullable: false })
  phoneNumber!: number;

  @OneToOne(() => CustomerEntity, (customer) => customer.user)
  customer!: CustomerEntity
} 