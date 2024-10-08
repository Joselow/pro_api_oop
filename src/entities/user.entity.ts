import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @Column()
  username!: string

  @Column()
  name!: string

  @Column()
  lastName!: string

  @Column({ nullable: true })
  position?: string

  @Column()
  phoneNumber!: number
} 