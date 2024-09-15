import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateModeloDto } from '../dto/create-modelo.dto';
import { UpdateModeloDto } from '../dto/update-modelo.dto';
import { ModeloService } from '../service/modelo.service';

@Controller('modelo')
export class ModeloController {
  constructor(private readonly modeloService: ModeloService) {}

  @Post()
  async create(@Body() createModeloDto: CreateModeloDto) {
    return await this.modeloService.create(createModeloDto);
  }

  @Get()
  async findAll() {
    return await this.modeloService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.modeloService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateModeloDto: UpdateModeloDto,
  ) {
    return await this.modeloService.update(+id, updateModeloDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.modeloService.remove(+id);
  }
}
