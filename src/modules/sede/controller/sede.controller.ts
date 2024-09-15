import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SedeService } from '../services/sede.service';
import { CreateSedeDto } from '../dto/create-sede.dto';
import { UpdateSedeDto } from '../dto/update-sede.dto';

@Controller('sede')
export class SedeController {
  constructor(private readonly sedeService: SedeService) {}

  @Post()
  async create(@Body() createSedeDto: CreateSedeDto) {
    return await this.sedeService.create(createSedeDto);
  }

  @Get()
  async findAll() {
    return await this.sedeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sedeService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSedeDto: UpdateSedeDto) {
    return await this.sedeService.update(+id, updateSedeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.sedeService.remove(+id);
  }
}
