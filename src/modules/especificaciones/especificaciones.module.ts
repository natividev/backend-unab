import { Module } from '@nestjs/common';
import { EspecificacionesController } from './controller/especificaciones.controller';
import { EspecificacionesService } from './services/especificaciones.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EspecificacionesController],
  providers: [EspecificacionesService, PrismaService],
})
export class EspecificacionesModule {}
