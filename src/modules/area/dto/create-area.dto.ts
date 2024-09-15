import { IsNumber, IsString } from 'class-validator';

export class CreateAreaDto {
  @IsString()
  nombre: string;

  @IsNumber()
  nivelId: number;
}
