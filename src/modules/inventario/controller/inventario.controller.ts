import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InventarioService } from '../service/inventario.service';
import { CreateInventarioDto } from '../dto/create-inventario.dto';
import { UpdateInventarioDto } from '../dto/update-inventario.dto';
@Controller('inventario')
export class InventarioController {
  constructor(private readonly inventarioService: InventarioService) {}

  @Post()
  async create(@Body() createInventarioDto: CreateInventarioDto) {
    return await this.inventarioService.create(createInventarioDto);
  }

  @Get()
  async findAll() {
    return await this.inventarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.inventarioService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInventarioDto: UpdateInventarioDto,
  ) {
    return await this.inventarioService.update(+id, updateInventarioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.inventarioService.remove(+id);
  }
}
