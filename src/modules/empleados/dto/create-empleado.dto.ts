import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  numeroTelefono: string;
}
