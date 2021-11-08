import { Controller, Post, Body } from '@nestjs/common';
import { CheckInOutDto } from './dto';
import { PointingCore } from './pointing.core';

@Controller('pointing')
export class PointingController {
  constructor(private readonly pointingCore: PointingCore) {}

  @Post('check-in')
  checkIn(@Body() payload: CheckInOutDto) {
    const { employee, comment } = payload;
    return this.pointingCore.checkIn(employee, comment);
  }

  @Post('check-out')
  checkOut(@Body() payload: CheckInOutDto) {
    const { employee, comment } = payload;
    return this.pointingCore.checkOut(employee, comment);
  }
}
