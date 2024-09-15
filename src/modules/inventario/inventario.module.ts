import { Module } from '@nestjs/common';
import { InventarioService } from './service/inventario.service';
import { InventarioController } from './controller/inventario.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [InventarioController],
  providers: [InventarioService, PrismaService],
})
export class InventarioModule {}
