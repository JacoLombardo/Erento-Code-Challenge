import { Component } from '@angular/core';

import { Search } from 'src/search';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css'],
})
export class CityFormComponent {
  model = new Search('');

  submitted = false;

  constructor(private http: HttpClient) {}

  public async getFilteredCities(search: string) {
    const url = 'https://localhost:3000?search=be';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('search', search);

    return this.http.get(url, { params: queryParams });
    // return this.http.get(url);
  }

  onSubmit() {
    this.submitted = true;
    this.getFilteredCities(this.model.name);
    console.log(this.getFilteredCities(this.model.name));
  }
}
