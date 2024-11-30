import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// Enum para estado_equipo
export enum EstadoEquipo {
  ASIGNADO = 'ASIGNADO',
  DESCARTE = 'DESCARTE',
  BODEGA = 'BODEGA',
}

export class CreateInventarioDto {
  @ApiProperty({ description: 'ID de la sede', required: false })
  @IsOptional()
  @IsInt()
  sedeId?: number;

  @ApiProperty({ description: 'ID del edificio', required: false })
  @IsOptional()
  @IsInt()
  edificioId?: number;

  @ApiProperty({ description: 'ID del nivel', required: false })
  @IsOptional()
  @IsInt()
  nivelId?: number;

  @ApiProperty({ description: 'ID del área', required: false })
  @IsOptional()
  @IsInt()
  areaId?: number;

  @ApiProperty({ description: 'ID del equipo', required: false })
  @IsOptional()
  @IsInt()
  equipoId?: number;

  @ApiProperty({ description: 'ID de la especificación', required: false })
  @IsOptional()
  @IsInt()
  especificacionId?: number;

  @ApiProperty({ description: 'Dirección IP del equipo' })
  @IsString()
  direccionIp: string;

  @ApiProperty({
    enum: EstadoEquipo,
    description: 'Estado del equipo',
    default: EstadoEquipo.ASIGNADO,
  })
  @IsEnum(EstadoEquipo)
  estado: EstadoEquipo;

  @ApiProperty({ description: 'Indica si es administrativo', default: false })
  @IsBoolean()
  administrativo: boolean;

  @ApiProperty({ description: 'Indica si es académico', default: false })
  @IsBoolean()
  academico: boolean;

  @ApiProperty({ description: 'ID del empleado', required: false })
  @IsOptional()
  @IsInt()
  empleadoId?: number;

  @ApiProperty({
    description: 'Fecha de ingreso del equipo',
    default: new Date().toISOString(),
  })
  @IsDateString()
  fechaIngresoEquipo: string | Date;

  @ApiProperty({
    description: 'Fecha de asignación del equipo',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  fechaAsignado?: string | null;

  @ApiProperty({ description: 'Fecha de descarte del equipo', required: false })
  @IsOptional()
  fechaDescarte?: string | null;
}
