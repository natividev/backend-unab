import { Injectable } from '@nestjs/common';
import { CreateModeloDto } from '../dto/create-modelo.dto';
import { UpdateModeloDto } from '../dto/update-modelo.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ModeloService {
  constructor(private readonly _prisma: PrismaService) {}

  async create({ idMarca, nombre }: CreateModeloDto) {
    await this._prisma.modelo.create({
      data: {
        nombre,
        marca: {
          connect: {
            id: idMarca,
          },
        },
      },
    });

    return {
      message: 'Modelo creado',
    };
  }

  async findAll() {
    return await this._prisma.modelo.findMany({
      select: {
        id: true,
        nombre: true,
        created_at: true,
        updated_at: true,
        marca: {
          select: {
            nombre: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this._prisma.modelo.findUnique({
      where: { id },
      select: {
        id: true,
        nombre: true,
        created_at: true,
        updated_at: true,
        marca: {
          select: {
            nombre: true,
          },
        },
      },
    });
  }

  async update(id: number, updateModeloDto: UpdateModeloDto) {
    await this._prisma.modelo.update({
      where: { id },
      data: {
        nombre: updateModeloDto.nombre,
        marca: {
          connect: {
            id: updateModeloDto.idMarca,
          },
        },
      },
    });

    return {
      message: 'Modelo actualizado',
    };
  }

  async remove(id: number) {
    await this._prisma.modelo.delete({
      where: { id },
    });

    return {
      message: 'Modelo eliminado',
    };
  }
}
