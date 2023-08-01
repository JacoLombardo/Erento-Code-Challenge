import { Injectable } from '@nestjs/common';
import { cities } from '../cities';
import { City } from './types/city';

@Injectable()
export class AppService {
  filterCities(search: string) {
    const filteredCities: City[] = [];
    for (let i = 0; i < cities.length; i++) {
      if (cities[i].cityName.toLowerCase().includes(search.toLowerCase())) {
        filteredCities.push(cities[i]);
      }
    }
    if (filteredCities.length < 1) {
      return 'No city matches the criteria';
    } else {
      return filteredCities;
    }
  }
}
