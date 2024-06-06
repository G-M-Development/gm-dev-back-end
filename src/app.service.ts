import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
const { MAIL_HOST, MAIL_USER, MAIL_RASS, MAIL_PORT } = process.env;

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
    if (!data) {
      return;
    }

    await transporter.sendMail({
      from: '<mail-test1@ukr.net>',
      to: 'i0962112822@gmail.com',
      subject: 'New Lid.',
      html: `<p> Name : ${data.name},</p>
      <p>LastName: ${data.lastName},</p> 
      <p> Email: ${data.email},</p> 
      <p> Phone: ${data.tel},</p> 
      <p> Subscribe: ${data.subscribe},</p>  `,
    });

    return;
  }

  async writeMe(data) {
    if (!data) {
      return;
    }

    await transporter.sendMail({
      from: '<mail-test1@ukr.net>',
      to: 'i0962112822@gmail.com',
      subject: 'Write Me.',
      html: `<p> Email: ${data.email},</p> 
       `,
    });

    return;
  }
}
