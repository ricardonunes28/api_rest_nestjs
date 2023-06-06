import { IsEmail, IsOptional, IsString } from 'class-validator';
import { UserRole } from '../user-roles.enum';

export class UpdateUserDto {
  @IsOptional()
  @IsString({
    message: 'Informe um nome de usario valido',
  })
  name: string;

  @IsOptional()
  @IsEmail({}, { message: 'Informe um endereço de email valido' })
  email: string;

  @IsOptional()
  role: UserRole;

  @IsOptional()
  status: boolean;
}
