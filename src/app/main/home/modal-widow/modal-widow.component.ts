import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-widow',
  templateUrl: './modal-widow.component.html',
  styleUrls: ['./modal-widow.component.scss'],
})
export class ModalWidowComponent implements OnInit {
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
