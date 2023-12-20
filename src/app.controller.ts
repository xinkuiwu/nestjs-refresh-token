import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { AppService } from './app.service';
import { LoginGuard } from "./login.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('aaa')
  aaa() {
    return 'aaa'
  }

  @Get('bbb')
  @UseGuards(LoginGuard)
  bbb() {
    return 'bbb'
  }


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
