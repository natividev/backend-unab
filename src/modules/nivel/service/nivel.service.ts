import { Injectable } from '@nestjs/common';
import { CreateNivelDto } from '../dto/create-nivel.dto';
import { PrismaService } from 'src/prisma.service';
import { UpdateNivelDto } from '../dto/update-nivel.dto';

@Injectable()
export class NivelService {
  constructor(private readonly _prisma: PrismaService) {}

  async create(createNivelDto: CreateNivelDto) {
    await this._prisma.nivel.create({
      data: createNivelDto,
    });

    return {
      message: 'Nivel creado correctamente',
    };
  }

  async findAll() {
    return await this._prisma.nivel.findMany();
  }

  async findOne(id: number) {
    return await this._prisma.nivel.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateNivelDto: UpdateNivelDto) {
    await this._prisma.nivel.update({
      where: { id },
      data: updateNivelDto,
    });

    return {
      message: 'Nivel actualizado correctamente',
    };
  }

  async remove(id: number) {
    await this._prisma.nivel.delete({
      where: { id },
    });

    return {
      message: 'Nivel eliminado correctamente',
    };
  }
}
