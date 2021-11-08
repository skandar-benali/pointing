import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Employee } from './entities';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto, findAllEmployeeDto } from './dto';

@Injectable()
export class EmployeeCore {
  constructor(private employeeService: EmployeeService) {}

  async add(employee: CreateEmployeeDto): Promise<Employee> {
    return this.employeeService.create(employee);
  }

  async list(filter: findAllEmployeeDto): Promise<Employee[]> {
    return this.employeeService.findMany(
      {
        ...(filter?.startDate && { createdAt: { gte: filter?.startDate } }),
        ...(filter?.endDate && { createdAt: { gte: filter?.startDate } }),
      },
      {
        page: filter?.page,
        limit: filter.limit,
      },
    );
  }

  async findOne(id: number): Promise<Employee | null> {
    const employee = await this.employeeService.findOne(id);
    if (!employee) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    return employee;
  }

  async remove(id: number): Promise<Employee> {
    const employee = await this.employeeService.findOne(id);
    if (!employee) throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    return await this.employeeService.delete(id);
  }
}
