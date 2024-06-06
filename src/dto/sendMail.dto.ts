import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateSendMailDto {
  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsString()
  tel: string;

  @IsOptional()
  @IsBoolean()
  subscribe?: boolean;
}
