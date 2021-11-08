import { IsInt, Min, Max, IsDate } from 'class-validator';

export class findAllEmployeeDto {
  @IsInt()
  @Min(1)
  page?: number;

  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number;

  @IsDate()
  startDate?: Date;

  @IsDate()
  endDate?: Date;
}
