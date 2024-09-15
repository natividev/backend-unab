import { Module } from '@nestjs/common';
import { EquipoController } from './controller/equipo.controller';
import { PrismaService } from 'src/prisma.service';
import { EquipoService } from './service/equipo.service';

@Module({
  controllers: [EquipoController],
  providers: [EquipoService, PrismaService],
})
export class EquipoModule {}
