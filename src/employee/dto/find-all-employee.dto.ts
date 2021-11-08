import { IsInt, Min, Max, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class findAllEmployeeDto {
  @ApiProperty()
  @IsInt()
  @Min(1)
  page?: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number;

  @ApiProperty()
  @IsDate()
  startDate?: Date;

  @ApiProperty()
  @IsDate()
  endDate?: Date;
}
