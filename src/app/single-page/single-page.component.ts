import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.sass']
})
export class SinglePageComponent implements OnInit {

  dayID: number;
  dayWeather;

  // Injection route and weather Data services
  constructor(private route: ActivatedRoute, private weatherData: WeatherService) { }

  ngOnInit() {
      // Get IP of page in
      this.route.params
          .subscribe((params: Params ) => {
              this.dayID = params.id;
          } );
      // Get weather data from API for single plage
      this.weatherData.getWeather(665850)
          .subscribe((response) => {
              this.dayWeather = response;
          });
  }

}
