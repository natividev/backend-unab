import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EdificioService } from '../service/edificio.service';
import { CreateEdificioDto } from '../dto/create-edificio.dto';
import { UpdateEdificioDto } from '../dto/update-edificio.dto';

@Controller('edificio')
export class EdificioController {
  constructor(private readonly edificioService: EdificioService) {}

  @Post()
  async create(@Body() createEdificioDto: CreateEdificioDto) {
    return await this.edificioService.create(createEdificioDto);
  }

  @Get()
  async findAll() {
    return await this.edificioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.edificioService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEdificioDto: UpdateEdificioDto,
  ) {
    return await this.edificioService.update(+id, updateEdificioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.edificioService.remove(+id);
  }
}
