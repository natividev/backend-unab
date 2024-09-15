import { IsString } from 'class-validator';

export class CreateSedeDto {
  @IsString()
  nombre: string;
}
