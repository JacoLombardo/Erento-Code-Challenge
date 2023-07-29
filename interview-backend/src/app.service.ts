import { Injectable } from '@nestjs/common';
import { cities } from '../cities';

@Injectable()
export class AppService {
  filterCities(search: string) {
    const filteredCities: Array<object> = [];
    for (let i = 0; i < cities.length; i++) {
      if (cities[i].cityName.toLowerCase().includes(search)) {
        filteredCities.push(cities[i]);
      }
    }
    if (filteredCities.length < 1) {
      return cities;
    } else {
      return filteredCities;
    }
  }
}
