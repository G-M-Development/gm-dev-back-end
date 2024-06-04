import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/sendMail')
  sendMail(@Body() data) {
    return this.appService.sendMail(data);
  }

  @Post('/writeMe')
  writeMe(@Body() data) {
    return this.appService.writeMe(data);
  }
}
