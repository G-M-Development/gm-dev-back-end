import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateSendMailDto } from './dto/sendMail.dto';
import { CreateWriteMeDto } from './dto/writeMe.dto';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/csrf-token')
  getCsrfToken(@Req() req: Request, @Res() res: Response) {
    res.json({ csrfToken: req.csrfToken() });
  }

  @Post('/sendMail')
  sendMail(@Req() req: Request, @Body() createSendMailDto: CreateSendMailDto) {
    return this.appService.sendMail(createSendMailDto);
  }

  @Post('/writeMe')
  writeMe(@Req() req: Request, @Body() createWriteMeDto: CreateWriteMeDto) {
    return this.appService.writeMe(createWriteMeDto);
  }
}
