import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NivelService } from '../service/nivel.service';
import { CreateNivelDto } from '../dto/create-nivel.dto';
import { UpdateNivelDto } from '../dto/update-nivel.dto';

@Controller('nivel')
export class NivelController {
  constructor(private readonly nivelService: NivelService) {}

  @Post()
  async create(@Body() createNivelDto: CreateNivelDto) {
    return await this.nivelService.create(createNivelDto);
  }

  @Get()
  async findAll() {
    return await this.nivelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.nivelService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateNivelDto: UpdateNivelDto,
  ) {
    return await this.nivelService.update(+id, updateNivelDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.nivelService.remove(+id);
  }
}
