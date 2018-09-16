import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

interface PostData {
  id: number;
  weather: [];
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
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
        name: 'Bucuresci',
        country: 'RO'
      },
      {
        id: 5128638,
        name: 'New York',
        country: 'US'
      }
  ];

  cityID = 665850;
  weather;

  constructor( private weatherData: WeatherService) {}

  ngOnInit() {
      this.weatherData.getWeather( this.cityID )
          .subscribe((response: Response) => {
            this.weather =  response.list;
            console.log(this.weather);
          });
  }

  selectCity ( id: number ) {
      this.cityID = id;
      this.weatherData.getWeather( this.cityID )
          .subscribe((response: Response) => {
            this.weather = response.list;
          });
  }

}
