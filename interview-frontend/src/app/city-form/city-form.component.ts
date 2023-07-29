import { Component } from '@angular/core';

import { Search } from 'src/search';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css'],
})
export class CityFormComponent {
  model = new Search('');

  submitted = false;

  constructor(private http: HttpClient) {}

  public getFilteredCities(search: string): any {
    const url = 'https://localhost:3000?search=be';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('search', search);

    return this.http.get<any>(url, { params: queryParams });
  }

  onSubmit() {
    this.submitted = true;
    this.getFilteredCities(this.model.name);
    console.log(this.getFilteredCities(this.model.name));
  }
}
