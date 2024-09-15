import { IsNumber, IsString } from 'class-validator';

export class CreateModeloDto {
  @IsString()
  nombre: string;

  @IsNumber()
  idMarca: number;
}
