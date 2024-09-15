import { Injectable } from '@nestjs/common';
import { CreateEmpleadoDto } from '../dto/create-empleado.dto';
import { UpdateEmpleadoDto } from '../dto/update-empleado.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EmpleadosService {
  constructor(private readonly _prisma: PrismaService) {}

  async create({ apellido, email, nombre, numeroTelefono }: CreateEmpleadoDto) {
    await this._prisma.empleados.create({
      data: {
        nombre: nombre,
        email: email,
        apellido: apellido,
        numero_telefono: numeroTelefono,
      },
    });
    return {
      message: 'Empleado creado exitosamente',
    };
  }

  findAll() {
    return this._prisma.empleados.findMany();
  }

  findOne(id: number) {
    return this._prisma.empleados.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        email: true,
        numero_telefono: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    await this._prisma.empleados.update({
      where: {
        id: id,
      },
      data: {
        nombre: updateEmpleadoDto.nombre,
        apellido: updateEmpleadoDto.apellido,
        email: updateEmpleadoDto.email,
        numero_telefono: updateEmpleadoDto.numeroTelefono,
      },
    });

    return {
      message: 'Empleado actualizado exitosamente',
    };
  }

  async remove(id: number) {
    await this._prisma.empleados.delete({
      where: {
        id: id,
      },
    });

    return {
      message: 'Empleado eliminado exitosamente',
    };
  }
}
