import { Component } from '@angular/core';
import { CityFormComponent } from './city-form/city-form.component';
import { ApiserviceService } from './Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'interview-frontend';

  newdata: any;
  constructor(private apiservie: ApiserviceService) {}

  ngOnInit() {
    console.log(
      this.apiservie.getData().subscribe((res) => {
        this.newdata = res;
      })
    );
    console.log(this.newdata);
  }
}
