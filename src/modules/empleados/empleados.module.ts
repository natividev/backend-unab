import { Module } from '@nestjs/common';
import { EmpleadosController } from './controller/empleados.controller';
import { EmpleadosService } from './service/empleados.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EmpleadosController],
  providers: [EmpleadosService, PrismaService],
})
export class EmpleadosModule {}
