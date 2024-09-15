import { Injectable } from '@nestjs/common';
import { CreateEspecificacioneDto } from '../dto/create-especificacione.dto';
import { UpdateEspecificacioneDto } from '../dto/update-especificacione.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EspecificacionesService {
  constructor(private _prisma: PrismaService) {}

  async create({
    activoFijo,
    descripcion,
    marcaId,
    modeloId,
    serie,
    dimensiones,
    empleadoId,
  }: CreateEspecificacioneDto) {
    await this._prisma.especificacion.create({
      data: {
        descripcion,
        serie,
        activo_fijo: activoFijo,
        dimensiones,
        empleadosId: empleadoId,
        marcaId,
        modelo_id: modeloId,
      },
    });

    return {
      message: 'Especificación creada correctamente',
    };
  }

  async findAll() {
    return await this._prisma.especificacion.findMany({
      select: {
        id: true,
        descripcion: true,
        serie: true,
        activo_fijo: true,
        dimensiones: true,
        modelo: {
          select: {
            nombre: true,
          },
        },
        marca: {
          select: {
            nombre: true,
          },
        },
        empleados: {
          select: {
            nombre: true,
            apellido: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this._prisma.especificacion.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        descripcion: true,
        serie: true,
        activo_fijo: true,
        dimensiones: true,
        modelo: {
          select: {
            nombre: true,
          },
        },
        marca: {
          select: {
            nombre: true,
          },
        },
        empleados: {
          select: {
            nombre: true,
            apellido: true,
          },
        },
      },
    });
  }

  async update(
    id: number,
    {
      activoFijo,
      descripcion,
      dimensiones,
      empleadoId,
      marcaId,
      modeloId,
      serie,
    }: UpdateEspecificacioneDto,
  ) {
    await this._prisma.especificacion.update({
      where: {
        id,
      },
      data: {
        descripcion,
        serie,
        activo_fijo: activoFijo,
        dimensiones,
        empleadosId: empleadoId,
        marcaId,
        modelo_id: modeloId,
      },
    });

    return {
      message: 'Especificación actualizada correctamente',
    };
  }

  async remove(id: number) {
    await this._prisma.especificacion.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Especificación eliminada correctamente',
    };
  }
}
