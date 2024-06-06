import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateSendMailDto } from './dto/sendMail.dto';
import { CreateWriteMeDto } from './dto/writeMe.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/sendMail')
  sendMail(@Body() createSendMailDto: CreateSendMailDto) {
    return this.appService.sendMail(createSendMailDto);
  }

  @Post('/writeMe')
  writeMe(@Body() createWriteMeDto: CreateWriteMeDto) {
    return this.appService.writeMe(createWriteMeDto);
  }
}
