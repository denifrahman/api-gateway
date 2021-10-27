import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  @Redirect('api/v1/docs')
  redirect(){}
}
