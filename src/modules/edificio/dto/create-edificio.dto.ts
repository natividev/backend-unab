import { IsNumber, IsString } from 'class-validator';

export class CreateEdificioDto {
  @IsString()
  nombre: string;

  @IsNumber()
  sedeId: number;
}
