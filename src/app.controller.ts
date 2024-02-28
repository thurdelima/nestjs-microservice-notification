import { MailerService } from '@nestjs-modules/mailer';
import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

type NotificationDTO = {
  email: string;
  startAt: Date;
  endAt: Date;
  name: string;
  title: string;
  description: string;
}

@Controller()
export class AppController {
  constructor(private mailerService: MailerService) { }



  @EventPattern('task_notification')
  async askNotification(data: any) {
    console.log("recebendo msg");
    console.log(data);

    const result = await this.mailerService.sendMail({
      to: data.email,
      from: 'taskmanager@email.com',
      subject: 'Nova atividade',
      html: `
        <body>
            <h1>Olá ${data.name} </h1>

            <span>Você tem uma tarefa para hoje </span>
            <br/>
            <span>Título: ${data.title}</span>
            <br/>
            <span>Descrição: ${data.description}</span>
            <br/>
            <span>Início: ${data.startAt}</span>
            <br/>
            <span>Fim: ${data.endAt}</span>
        </body>
      `,
    });
    console.log(result);
  }
}
