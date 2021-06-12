import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-mobile-app',
  templateUrl: './mobile-app.component.html',
  styleUrls: ['./mobile-app.component.scss'],
})
export class MobileAppComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    navSpeed: 500,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
