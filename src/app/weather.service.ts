import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

    // Injection HttpClient
    constructor(private http: HttpClient ) {}

    // Get weather data from API
    getWeather( id ) {
        return this.http.get( `http://api.openweathermap.org/data/2.5/forecast/daily?id=${id}&appid=9de243494c0b295cca9337e1e96b00e2` );
    }

}

