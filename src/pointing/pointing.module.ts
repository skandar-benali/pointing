import { Module } from '@nestjs/common';
import { PointingService } from './pointing.service';
import { PointingController } from './pointing.controller';
import { PrismaService } from '../prisma.service';
import { PointingCore } from './pointing.core';

@Module({
  controllers: [PointingController],
  providers: [PointingService, PrismaService, PointingCore],
})
export class PointingModule {}
