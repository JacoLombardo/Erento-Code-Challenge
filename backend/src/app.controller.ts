import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

interface Params {
  searchTerm: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCities(@Query() params: Params) {
    return this.appService.filterCities(params.searchTerm);
  }
}
