import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateEmployeeDto, findAllEmployeeDto } from './dto';
import { EmployeeCore } from './employee.core';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeCore: EmployeeCore) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeCore.add(createEmployeeDto);
  }

  @Get()
  findAll(@Query() query: findAllEmployeeDto) {
    return this.employeeCore.list({
      startDate: query?.startDate,
      endDate: query?.startDate,
      page: query?.page ? Number(query?.page) : 1,
      limit: query?.limit ? Number(query?.limit) : 10,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.employeeCore.findOne(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.employeeCore.remove(Number(id));
  }
}
