import { IsInt, IsString } from 'class-validator';

export class CheckInOutDto {
  @IsInt()
  employee: number;

  @IsString()
  comment?: string;
}
