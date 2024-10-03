import { EntityTarget, Repository } from "typeorm";
import { BaseEntity } from "./base.entity";
import { ConfigServer } from "./config";

export class BaseService<T extends BaseEntity> extends ConfigServer {
  repository!: Repository<T>; 

  constructor(private entity: EntityTarget<T>) {
    super();
    this.initializeRepository(); 
  }

  private async initializeRepository(): Promise<void> {
    this.repository = await this.initRepository(this.entity); 
  }

  private async initRepository(entity: EntityTarget<T>): Promise<Repository<T>> {
    const dataSource = await this.dbConnect();
    return dataSource.getRepository(entity);
  }
}