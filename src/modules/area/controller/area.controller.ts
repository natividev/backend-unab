import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateAreaDto } from '../dto/create-area.dto';
import { UpdateAreaDto } from '../dto/update-area.dto';
import { AreaService } from '../service/area.service';

@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Post()
  async create(@Body() createAreaDto: CreateAreaDto) {
    return await this.areaService.create(createAreaDto);
  }

  @Get()
  async findAll() {
    return await this.areaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.areaService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAreaDto: UpdateAreaDto) {
    return await this.areaService.update(+id, updateAreaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.areaService.remove(+id);
  }
}
