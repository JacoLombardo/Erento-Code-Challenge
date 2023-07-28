import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCities(@Query() params: any) {
    return this.appService.filterCities(params.search);
  }
}
