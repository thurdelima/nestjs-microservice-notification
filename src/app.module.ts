import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [MailerModule.forRoot({
    transport: {
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: 'bruce.kihn68@ethereal.email',
        pass: '2bJ1SXErtGGNQKzjXB'
      }
    }
  })],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
