import { IsNumber, IsString } from 'class-validator';

export class CreateEquipoDto {
  @IsString()
  nombre: string;

  @IsNumber()
  marcaId: number;
}
