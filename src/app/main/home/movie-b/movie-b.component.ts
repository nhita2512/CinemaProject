import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-b',
  templateUrl: './movie-b.component.html',
  styleUrls: ['./movie-b.component.scss'],
})
export class MovieBComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showModal();
    }, 2000);
  }
  showModal() {
    document.getElementById('modal-window').style.display = 'block';
  }
  hideModal() {
    document.getElementById('modal-window').style.display = 'none';
  }
}
