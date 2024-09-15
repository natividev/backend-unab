import { Injectable } from '@nestjs/common';
import { CreateEdificioDto } from '../dto/create-edificio.dto';
import { UpdateEdificioDto } from '../dto/update-edificio.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EdificioService {
  constructor(private _prisma: PrismaService) {}

  async create(createEdificioDto: CreateEdificioDto) {
    await this._prisma.edificio.create({
      data: createEdificioDto,
    });

    return { message: 'Edificio creado' };
  }

  async findAll() {
    return await this._prisma.edificio.findMany({
      select: {
        id: true,
        nombre: true,
        created_at: true,
        updated_at: true,
        sede: {
          select: {
            nombre: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this._prisma.edificio.findUnique({
      where: { id },
      select: {
        id: true,
        nombre: true,
        created_at: true,
        updated_at: true,
        sede: {
          select: {
            nombre: true,
          },
        },
      },
    });
  }

  async update(id: number, updateEdificioDto: UpdateEdificioDto) {
    await this._prisma.edificio.update({
      where: { id },
      data: updateEdificioDto,
    });

    return { message: 'Edificio actualizado' };
  }

  async remove(id: number) {
    await this._prisma.edificio.delete({
      where: { id },
    });

    return { message: 'Edificio eliminado' };
  }
}
