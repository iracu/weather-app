import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.sass']
})
export class SinglePageComponent implements OnInit {

  dt: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.dt = this.route.snapshot.params['dt'];
    console.log(this.dt);
  }

}
