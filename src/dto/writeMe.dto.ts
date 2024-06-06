import { IsString } from 'class-validator';

export class CreateWriteMeDto {
  @IsString()
  email: string;
}
