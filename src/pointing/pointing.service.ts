import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Pointing } from './entities';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PointingService {
  constructor(private prisma: PrismaService) {}

  async create(
    employee: number,
    pointing: Prisma.PointingCreateWithoutEmployeeInput,
  ): Promise<Pointing> {
    return this.prisma.pointing.create({
      data: {
        ...pointing,
        employee: {
          connect: { id: employee },
        },
      },
    });
  }

  async findOne(id: number): Promise<Pointing> {
    return this.prisma.pointing.findUnique({
      where: { id },
    });
  }
  async update(
    id: number,
    pointing: Prisma.PointingUpdateWithoutEmployeeInput,
  ): Promise<Pointing> {
    return this.prisma.pointing.update({
      where: { id },
      data: pointing,
    });
  }

  async lastPointing(employee): Promise<Pointing | null> {
    const all = await this.prisma.pointing.findMany({
      where: { idEmployee: employee, checkOut: null },
      orderBy: [{ createdAt: 'desc' }],
    });
    return all[0];
  }
}
