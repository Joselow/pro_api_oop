import { IsEmpty, IsNotEmpty } from "class-validator";
import { Exclude } from "class-transformer";
import { BaseDTO } from "../../config/base.dto";
import { USER_ROLE } from "../enums/UserRole";

export class UserDTO extends BaseDTO {
  @IsNotEmpty()
  name!: string

  @IsNotEmpty()
  lastName!: string

  @IsNotEmpty()
  email!: string

  @Exclude()
  @IsNotEmpty()
  password!: string

  @IsNotEmpty()
  city!: string

  @IsNotEmpty()
  province!: string

  @IsNotEmpty()
  username!: string; 

  @IsEmpty()
  position?: string; 
  
  @IsNotEmpty()
  phoneNumber!: number;

  @IsNotEmpty()
  role!: USER_ROLE;
}