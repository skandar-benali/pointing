import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Employee } from './entities';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  async create(employee: Prisma.EmployeeCreateInput): Promise<Employee> {
    return this.prisma.employee.create({
      data: employee,
    });
  }

  async findMany(
    filter: Prisma.EmployeeWhereInput = {},
    { page, limit }: { page: number; limit: number },
  ): Promise<Employee[]> {
    return this.prisma.employee.findMany({
      where: filter,
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findOne(id: number): Promise<Employee | null> {
    return this.prisma.employee.findUnique({
      where: { id },
    });
  }

  async delete(id: number): Promise<Employee> {
    return await this.prisma.employee.delete({
      where: { id },
    });
  }
}
