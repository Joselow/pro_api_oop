import { IsEmpty, IsEnum, IsNotEmpty, Length, Matches } from "class-validator";
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
  @Length(8, 8, { message: "password must be exactly 8 characters" })  // exactly 8 characters
  password!: string

  @IsNotEmpty()
  city!: string

  @IsNotEmpty()
  province!: string

  @IsNotEmpty()
  username!: string; 
  
  @IsNotEmpty()
  @Matches(/^\d{9}$/, { message: "phoneNumber must be a 9-digit number" }) // custom validate with regex
  phoneNumber!: number;

  @IsNotEmpty()
  @IsEnum(USER_ROLE)
  role!: USER_ROLE;
  
  constructor(data: Partial<UserDTO>) {
    super()
    Object.assign(this, data)
  }
}