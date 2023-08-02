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
  page: number = 1;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.searchCities('').subscribe((data) => {
      this.cities = data;
    });
  }

  onSubmit() {
    this.apiService.searchCities(this.searchTerm).subscribe((data) => {
      this.cities = data;
    });
    this.page = 1;
  }
}
