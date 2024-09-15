import { Module } from '@nestjs/common';
import { EdificioController } from './controller/edificio.controller';
import { EdificioService } from './service/edificio.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EdificioController],
  providers: [EdificioService, PrismaService],
})
export class EdificioModule {}
