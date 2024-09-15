import { Module } from '@nestjs/common';
import { NivelController } from './controller/nivel.controller';
import { NivelService } from './service/nivel.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [NivelController],
  providers: [NivelService, PrismaService],
})
export class NivelModule {}
