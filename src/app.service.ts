import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
const { MAIL_HOST, MAil_USER, MAIL_PASS } = process.env;
const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: MAil_USER,
    pass: MAIL_PASS,
  },
});
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
