import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('coucou, bien joué, tu as écrit un log');
    Logger.log('Ceci est un log avec le logger');
    return 'Hello World!';
  }
}
