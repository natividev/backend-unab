import { Injectable } from '@nestjs/common';
import { CreateSedeDto } from '../dto/create-sede.dto';
import { UpdateSedeDto } from '../dto/update-sede.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SedeService {
  constructor(private prisma: PrismaService) {}

  async create(createSedeDto: CreateSedeDto) {
    await this.prisma.sede.create({
      data: createSedeDto,
    });

    return { message: 'Sede creada' };
  }

  async findAll() {
    return await this.prisma.sede.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.sede.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateSedeDto: UpdateSedeDto) {
    await this.prisma.sede.update({
      where: { id },
      data: updateSedeDto,
    });

    return { message: 'Sede actualizada' };
  }

  async remove(id: number) {
    await this.prisma.sede.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Sede eliminada',
    };
  }
}
