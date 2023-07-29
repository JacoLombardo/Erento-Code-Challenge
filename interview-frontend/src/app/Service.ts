import { Component, Injectable } from '@angular/core';

import { Search } from 'src/search';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}

  public getData() {
    // const url = 'https://age-of-empires-2-api.vercel.app/api/civilizations/all';
    const url = 'https://localhost:3000?search=be';
    // let queryParams = new HttpParams();
    // queryParams = queryParams.append('search', search);

    // return this.http.get(url, { params: queryParams });

    return this.http.get(url);
  }
}
