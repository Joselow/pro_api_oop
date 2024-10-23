import { CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm"

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')                              //  creaa el campo auto
    id = null as unknown as string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })   //  creaa el campo auto
    createAt = null as unknown as Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })   //  actualiza el campo auto
    updateAt = null as unknown as Date;
}