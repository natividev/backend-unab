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
  create(@Body() createEdificioDto: CreateEdificioDto) {
    return this.edificioService.create(createEdificioDto);
  }

  @Get()
  findAll() {
    return this.edificioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.edificioService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEdificioDto: UpdateEdificioDto,
  ) {
    return this.edificioService.update(+id, updateEdificioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.edificioService.remove(+id);
  }
}
