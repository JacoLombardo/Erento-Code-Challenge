import { Component } from '@angular/core';

import { Search } from 'src/search';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css'],
})
export class CityFormComponent {
  model = new Search('');

  submitted = false;

  constructor(private http: HttpClient) {}

  public getFilteredCities(search: string): Observable<any> {
    const url = 'https://age-of-empires-2-api.vercel.app/api/civilizations/all';
    // const url = 'https://localhost:3000?search=be';
    // let queryParams = new HttpParams();
    // queryParams = queryParams.append('search', search);

    // return this.http.get(url, { params: queryParams }).pipe(
    //   map((data) => {
    //     console.log('1', data);
    //   })
    // );

    return this.http.get(url);
  }

  onSubmit() {
    this.submitted = true;
    const test = this.getFilteredCities(this.model.name);
    console.log(this.getFilteredCities(this.model.name));
    console.log(test);
  }
}
