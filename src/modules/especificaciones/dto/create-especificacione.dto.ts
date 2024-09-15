import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEspecificacioneDto {
  @IsString()
  descripcion: string;

  @IsNumber()
  modeloId: number;

  @IsString()
  serie: string;

  @IsString()
  @IsOptional()
  dimensiones?: string;

  @IsBoolean()
  activoFijo: boolean;

  @IsNumber()
  marcaId: number;

  @IsNumber()
  @IsOptional()
  empleadoId?: number;
}
