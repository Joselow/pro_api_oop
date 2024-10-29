import { hash } from 'bcrypt';
import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { UserDTO } from "../dto/userDTO";
import { UserEntity } from "../entities/user.entity";
import { plainToClass } from "class-transformer";

export class UserService extends BaseService<UserEntity> {
  constructor() {
    super(UserEntity)
  }

  async getUsers(): Promise<UserEntity[]> {    
    return await this.repository.find()
  }

  async getUserById(id: UserEntity['id']): Promise<UserEntity | null> {    
    return await this.repository.findOneBy({ id})
  }

  async createUser(body: UserDTO): Promise<UserDTO> {  
    body.password = await hash(body.password, 10);
    const userCreated = await this.repository.save({ ...body })
    return plainToClass(UserDTO, userCreated)
  }

  async updateUser(id: UserEntity['id'], body: UserDTO): Promise<UpdateResult> {    
    return await this.repository.update({ id: id }, body)
  }

  async deleteUser(id: UserEntity['id']): Promise<DeleteResult>  {    
    return await this.repository.delete({ id })
  }

}