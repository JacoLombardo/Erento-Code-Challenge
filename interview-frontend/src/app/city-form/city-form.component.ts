import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { City } from '../city';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css'],
})
export class CityFormComponent {
  searchTerm: string = '';
  cities: City[] = [];

  submitted = false;

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.searchCities(this.searchTerm).subscribe((data) => {
      console.log(data);
      this.cities = data;
    });
  }
}
