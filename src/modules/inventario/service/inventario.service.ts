import { Injectable } from '@nestjs/common';
import { CreateInventarioDto } from '../dto/create-inventario.dto';
import { UpdateInventarioDto } from '../dto/update-inventario.dto';
import { PrismaService } from 'src/prisma.service';
import * as moment from 'moment';

@Injectable()
export class InventarioService {
  constructor(private _prisma: PrismaService) {}

  async create({
    academico,
    administrativo,
    direccionIp,
    estado,
    fechaIngresoEquipo,
    areaId,
    edificioId,
    empleadoId,
    equipoId,
    especificacionId,
    fechaAsignado,
    fechaDescarte,
    nivelId,
    sedeId,
  }: CreateInventarioDto) {
    await this._prisma.tipos_equipos_inventario.create({
      data: {
        direccion_ip: direccionIp,
        fecha_asignado: new Date(moment(fechaAsignado).format('YYYY-MM-DD')),
        academico,
        administrativo,
        area: {
          connect: {
            id: areaId,
          },
        },
        edificio: {
          connect: {
            id: edificioId,
          },
        },
        especificacion: {
          connect: {
            id: especificacionId,
          },
        },
        nivel: {
          connect: {
            id: nivelId,
          },
        },
        sede: {
          connect: {
            id: sedeId,
          },
        },
        empleado: {
          connect: {
            id: empleadoId,
          },
        },
        equipo: {
          connect: {
            id: equipoId,
          },
        },
        estado,
        fecha_descarte: fechaDescarte
          ? new Date(moment(fechaDescarte).format('YYYY-MM-DD'))
          : null,
        fecha_ingreso_equipo: new Date(
          moment(fechaIngresoEquipo).format('YYYY-MM-DD'),
        ),
      },
    });

    return {
      message: 'Inventario creado',
    };
  }

  async findAll() {
    return await this._prisma.tipos_equipos_inventario.findMany({
      select: {
        id: true,
        direccion_ip: true,
        fecha_asignado: true,
        academico: true,
        administrativo: true,
        estado: true,
        fecha_descarte: true,
        fecha_ingreso_equipo: true,
        area: {
          select: {
            nombre: true,
          },
        },
        edificio: {
          select: {
            nombre: true,
          },
        },
        especificacion: {
          select: {
            descripcion: true,
          },
        },
        nivel: {
          select: {
            nombre: true,
          },
        },
        sede: {
          select: {
            nombre: true,
          },
        },
        empleado: {
          select: {
            nombre: true,
            apellido: true,
          },
        },
        equipo: {
          select: {
            nombre: true,
          },
        },
        usuario: {
          select: {
            nombres: true,
            apellido: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this._prisma.tipos_equipos_inventario.findUnique({
      where: { id },
      select: {
        id: true,
        direccion_ip: true,
        fecha_asignado: true,
        academico: true,
        administrativo: true,
        estado: true,
        fecha_descarte: true,
        fecha_ingreso_equipo: true,
        area: {
          select: {
            nombre: true,
          },
        },
        edificio: {
          select: {
            nombre: true,
          },
        },
        especificacion: {
          select: {
            descripcion: true,
          },
        },
        nivel: {
          select: {
            nombre: true,
          },
        },
        sede: {
          select: {
            nombre: true,
          },
        },
        empleado: {
          select: {
            nombre: true,
            apellido: true,
          },
        },
        equipo: {
          select: {
            nombre: true,
          },
        },
        usuario: {
          select: {
            nombres: true,
            apellido: true,
          },
        },
      },
    });
  }

  async update(id: number, updateInventarioDto: UpdateInventarioDto) {
    await this._prisma.tipos_equipos_inventario.update({
      where: { id },
      data: {
        direccion_ip: updateInventarioDto.direccionIp,
        fecha_asignado: updateInventarioDto.fechaAsignado,
        academico: updateInventarioDto.academico,
        administrativo: updateInventarioDto.administrativo,
        area: {
          connect: {
            id: updateInventarioDto.areaId,
          },
        },
        edificio: {
          connect: {
            id: updateInventarioDto.edificioId,
          },
        },
        especificacion: {
          connect: {
            id: updateInventarioDto.especificacionId,
          },
        },
        nivel: {
          connect: {
            id: updateInventarioDto.nivelId,
          },
        },
        sede: {
          connect: {
            id: updateInventarioDto.sedeId,
          },
        },
        empleado: {
          connect: {
            id: updateInventarioDto.empleadoId,
          },
        },
        equipo: {
          connect: {
            id: updateInventarioDto.equipoId,
          },
        },
        estado: updateInventarioDto.estado,
        fecha_descarte: updateInventarioDto.fechaDescarte ?? null,
        fecha_ingreso_equipo: updateInventarioDto.fechaIngresoEquipo,
      },
    });

    return {
      message: 'Inventario actualizado',
    };
  }

  async remove(id: number) {
    await this._prisma.tipos_equipos_inventario.delete({
      where: { id },
    });

    return {
      message: 'Inventario eliminado',
    };
  }
}
