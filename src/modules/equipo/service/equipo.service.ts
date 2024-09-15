import { Injectable } from '@nestjs/common';
import { CreateEquipoDto } from '../dto/create-equipo.dto';
import { UpdateEquipoDto } from '../dto/update-equipo.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EquipoService {
  constructor(private prisma: PrismaService) {}

  async create({ marcaId, nombre }: CreateEquipoDto) {
    await this.prisma.equipo.create({
      data: {
        nombre,
        marca: {
          connect: {
            id: marcaId,
          },
        },
      },
    });

    return { message: 'Equipo creado' };
  }

  async findAll() {
    return await this.prisma.equipo.findMany({
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
    return await this.prisma.equipo.findUnique({
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

  async update(id: number, { marcaId, nombre }: UpdateEquipoDto) {
    await this.prisma.equipo.update({
      where: { id },
      data: {
        nombre,
        marca: {
          connect: {
            id: marcaId,
          },
        },
      },
    });

    return { message: 'Equipo actualizado' };
  }

  async remove(id: number) {
    await this.prisma.equipo.delete({
      where: { id },
    });

    return { message: 'Equipo eliminado' };
  }
}
