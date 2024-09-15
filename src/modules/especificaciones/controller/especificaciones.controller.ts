import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EspecificacionesService } from '../services/especificaciones.service';
import { CreateEspecificacioneDto } from '../dto/create-especificacione.dto';
import { UpdateEspecificacioneDto } from '../dto/update-especificacione.dto';

@Controller('especificaciones')
export class EspecificacionesController {
  constructor(
    private readonly especificacionesService: EspecificacionesService,
  ) {}

  @Post()
  async create(@Body() createEspecificacioneDto: CreateEspecificacioneDto) {
    return await this.especificacionesService.create(createEspecificacioneDto);
  }

  @Get()
  async findAll() {
    return await this.especificacionesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.especificacionesService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEspecificacioneDto: UpdateEspecificacioneDto,
  ) {
    return await this.especificacionesService.update(
      +id,
      updateEspecificacioneDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.especificacionesService.remove(+id);
  }
}
