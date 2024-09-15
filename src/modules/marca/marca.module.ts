import { Module } from '@nestjs/common';
import { MarcaController } from './controller/marca.controller';
import { MarcaService } from './services/marca.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MarcaController],
  providers: [MarcaService, PrismaService],
})
export class MarcaModule {}
