import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  // City data to can select weather from specific city
  cityList = [
      {
        id: 665850,
        name: 'Suceava',
        country: 'RO'
      },
      {
        id: 618426,
        name: 'Chisinau',
        country: 'MD'
      },
      {
        id: 683508,
        name: 'Bucuresti',
        country: 'RO'
      },
      {
        id: 5128638,
        name: 'New York',
        country: 'US'
      }
  ];

  // Default city ID
  cityID = 665850;

  //API weather data
  weather;

  // Injection weather Data services
  constructor( private weatherData: WeatherService) {}

  // Load data by API on app running
  ngOnInit() {
      this.weatherData.getWeather( this.cityID )
          .subscribe((response: Response) => {
            this.weather =  response;
      });
  }

  // Load data by API for selected city
  selectCity ( id: number ) {
      this.cityID = id;
      this.weatherData.getWeather( this.cityID )
          .subscribe((response: Response) => {
              this.weather = response;
      });
  }

}
