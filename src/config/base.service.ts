import { DataSource, EntityTarget, Repository } from "typeorm";
import { BaseEntity } from "./base.entity";
import { dataSource } from "./database";

export class BaseService<T extends BaseEntity> {
  repository!: Repository<T>; 

  constructor(private entity: EntityTarget<T>) {
    this.initializeRepository(); 
  }

  private async initializeRepository(): Promise<void> {    
    this.repository = dataSource.getRepository(this.entity);
  }
}