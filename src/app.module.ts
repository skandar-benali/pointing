import { Module } from '@nestjs/common';
import { PointingModule } from './pointing/pointing.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [PointingModule, EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
