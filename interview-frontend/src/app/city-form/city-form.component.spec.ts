import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CityFormComponent } from './city-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from '../app.component';
import { ApiService } from '../api.service';

describe('CityFormComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
        NgxPaginationModule,
      ],
      declarations: [AppComponent, CityFormComponent],
      providers: [ApiService],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CityFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'City Search Form'`, () => {
    const fixture = TestBed.createComponent(CityFormComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('City Search Form');
  });

  it('cities array should be empty on component load', () => {
    const fixture = TestBed.createComponent(CityFormComponent);
    const component = fixture.componentInstance;
    expect(component.cities).toEqual([]);
  });
});
