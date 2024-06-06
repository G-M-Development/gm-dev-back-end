import { BadRequestException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
const { MAIL_HOST, MAIL_USER, MAIL_RASS, MAIL_PORT, TO_MAIL, FROM_MAIL } =
  process.env;

let transporter;
try {
  transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: Number(MAIL_PORT),
    secure: true,
    auth: {
      user: MAIL_USER,
      pass: MAIL_RASS,
    },
  });
} catch (error) {}

@Injectable()
export class AppService {
  async sendMail(data) {
    if (!data.name && !data.lastName && !data.email && !data.tel) {
      throw new BadRequestException('Дані відсутні');
    }

    const mail = data.email;
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const matchAll = regexp.test(mail);
    console.log(matchAll);
    if (!matchAll) {
      throw new BadRequestException('Некоректна пошта');
    }
    await transporter.sendMail({
      from: FROM_MAIL,
      to: TO_MAIL,
      subject: 'New Lead!',
      html: `<p> Name : ${data.name},</p>
      <p> LastName: ${data.lastName},</p> 
      <p> Email: ${data.email},</p> 
      <p> Phone: ${data.tel},</p> 
      <p> Subscribe: ${data.subscribe},</p>  `,
    });

    return;
  }

  async writeMe(data) {
    if (!data.email) {
      throw new BadRequestException('Дані відсутні');
    }
    const mail = data.email;
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const matchAll = regexp.test(mail);
    console.log(matchAll);
    if (!matchAll) {
      throw new BadRequestException('Некоректна пошта');
    }
    await transporter.sendMail({
      from: '<mail-test1@ukr.net>',
      to: 'i0962112822@gmail.com',
      subject: 'Write Me!',
      html: `<p> Email: ${data.email},</p>`,
    });

    return;
  }
}
