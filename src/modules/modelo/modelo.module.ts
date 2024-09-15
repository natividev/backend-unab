import { Module } from '@nestjs/common';
import { ModeloController } from './controller/modelo.controller';
import { ModeloService } from './service/modelo.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ModeloController],
  providers: [ModeloService, PrismaService],
})
export class ModeloModule {}
