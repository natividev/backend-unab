import { IsString } from 'class-validator';

export class CreateNivelDto {
  @IsString()
  nombre: string;
}
