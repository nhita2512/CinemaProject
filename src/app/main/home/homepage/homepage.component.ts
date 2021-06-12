import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  // make slide in/out animation available to this component
})
export class HomepageComponent implements OnInit {
  checked: boolean = false;
  active: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  //news, reviews
  show() {
    this.checked = !this.checked;
  }
}
