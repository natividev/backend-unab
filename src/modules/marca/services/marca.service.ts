import { Injectable } from '@nestjs/common';
import { CreateMarcaDto } from '../dto/create-marca.dto';
import { PrismaService } from 'src/prisma.service';
import { UpdateMarcaDto } from '../dto/update-marca.dto';

@Injectable()
export class MarcaService {
  constructor(private prisma: PrismaService) {}

  async create(createMarcaDto: CreateMarcaDto) {
    await this.prisma.marca.create({
      data: createMarcaDto,
    });

    return { message: 'Marca creada' };
  }

  async findAll() {
    return await this.prisma.marca.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.marca.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateMarcaDto: UpdateMarcaDto) {
    await this.prisma.marca.update({
      where: { id },
      data: updateMarcaDto,
    });

    return { message: 'Marca actualizada' };
  }

  async remove(id: number) {
    await this.prisma.marca.delete({
      where: { id },
    });

    return { message: 'Marca eliminada ' };
  }
}
