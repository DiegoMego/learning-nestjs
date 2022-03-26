import { IsBoolean, IsEmail, IsInt, IsOptional, IsPhoneNumber, IsString, IsUUID, Length } from "class-validator";

export class CreateUserDTO {
  @IsEmail()
  Email: string

  @IsString()
  Username: string

  @IsString()
  Password: string

  @IsOptional()
  @IsPhoneNumber()
  Phone: string
}
