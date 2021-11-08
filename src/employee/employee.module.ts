import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { PrismaService } from '../prisma.service';
import { EmployeeCore } from './employee.core';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, PrismaService, EmployeeCore],
})
export class EmployeeModule {}
