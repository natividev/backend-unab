import { Injectable } from '@nestjs/common';
import { CreateAreaDto } from '../dto/create-area.dto';
import { UpdateAreaDto } from '../dto/update-area.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AreaService {
  constructor(private readonly _prisma: PrismaService) {}

  async create({ nivelId, nombre }: CreateAreaDto) {
    await this._prisma.area.create({
      data: {
        nombre,
        nivel: {
          connect: {
            id: nivelId,
          },
        },
      },
    });

    return {
      message: 'Area creada correctamente',
    };
  }

  async findAll() {
    return await this._prisma.area.findMany({
      select: {
        id: true,
        nombre: true,
        nivel: {
          select: {
            nombre: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this._prisma.area.findUnique({
      where: { id },
      select: {
        id: true,
        nombre: true,
        nivel: {
          select: {
            nombre: true,
          },
        },
      },
    });
  }

  async update(id: number, { nivelId, nombre }: UpdateAreaDto) {
    await this._prisma.area.update({
      where: { id },
      data: {
        nombre,
        nivel: {
          connect: {
            id: nivelId,
          },
        },
      },
    });

    return {
      message: 'Area actualizada correctamente',
    };
  }

  async remove(id: number) {
    await this._prisma.area.delete({
      where: { id },
    });

    return {
      message: 'Area eliminada correctamente',
    };
  }
}
