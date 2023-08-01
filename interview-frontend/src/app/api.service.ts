import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from './city';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  searchCities(searchTerm: string) {
    return this.http.get<City[]>(`${this.apiUrl}`, {
      params: { searchTerm },
    });
  }
}
