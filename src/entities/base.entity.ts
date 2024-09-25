import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm"

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id = null as unknown as string;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createAt = null as unknown as Date;

    @CreateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updateAt = null as unknown as Date;
}