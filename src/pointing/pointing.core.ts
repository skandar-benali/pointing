import { Injectable } from '@nestjs/common';
import { Pointing } from './entities';
import { PointingService } from './pointing.service';

function timestamp(date: Date): number {
  const d = new Date(date);
  return d.getTime();
}
@Injectable()
export class PointingCore {
  constructor(private pointingService: PointingService) {}
  async checkIn(employee: number, comment?: string): Promise<Pointing> {
    // create new pointing raw
    return await this.pointingService.create(employee, {
      checkIn: new Date(),
      comment,
    });
  }

  async checkOut(employee: number, comment?: string): Promise<Pointing> {
    const checkOutDate = new Date();
    // get the last pointing for this employee
    let pointing = await this.pointingService.lastPointing(employee);
    if (!pointing) pointing = await this.pointingService.create(employee, {});

    // calculate the period of work
    let period = null;
    if (pointing.checkIn) {
      period =
        (timestamp(checkOutDate) - timestamp(pointing.checkIn)) / 3600000; // 1000 * 60 * 60 to have the period in hours
    }

    // update it with date
    return await this.pointingService.update(pointing.id, {
      checkOut: new Date(),
      comment,
      period,
    });
  }
}
