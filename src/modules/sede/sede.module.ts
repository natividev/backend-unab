import { Module } from '@nestjs/common';
import { SedeController } from './controller/sede.controller';
import { SedeService } from './services/sede.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [SedeController],
  providers: [SedeService, PrismaService],
})
export class SedeModule {}
