import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CheckInOutDto {
  @ApiProperty()
  @IsInt()
  employee: number;

  @ApiProperty()
  @IsString()
  comment?: string;
}
