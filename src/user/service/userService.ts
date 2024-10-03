import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { UserDTO } from "../dto/userDTO";
import { UserEntity } from "../entities/user.entity";

export class UserService extends BaseService<UserEntity> {
  constructor() {
    super(UserEntity)
  }

  async listUsers(): Promise<UserEntity[]> {    
    return await this.repository.find()
  }

  async createUser(body: UserDTO): Promise<UserEntity> {    
    return await this.repository.save(body)
  }

  async updateUser(body: UserDTO): Promise<UpdateResult> {    
    return await this.repository.update({id: body.id}, body)
  }

  async deleteUser(id: string): Promise<DeleteResult>  {    
    return await this.repository.delete({ id })
  }

}