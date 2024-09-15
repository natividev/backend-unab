import { PartialType } from '@nestjs/mapped-types';
import { CreateEspecificacioneDto } from './create-especificacione.dto';

export class UpdateEspecificacioneDto extends PartialType(CreateEspecificacioneDto) {}
