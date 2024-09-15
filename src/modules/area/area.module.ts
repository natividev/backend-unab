import { Module } from '@nestjs/common';
import { AreaController } from './controller/area.controller';
import { AreaService } from './service/area.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AreaController],
  providers: [AreaService, PrismaService],
})
export class AreaModule {}
