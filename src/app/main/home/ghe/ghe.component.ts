import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss'],
})
export class GheComponent implements OnInit {
  @Input() itemGhe;
  // Syntax cho output
  @Output() emitStatus = new EventEmitter();
  status: boolean = false;
  constructor() {}
  // Su kien dat ghe o COn
  datGhe() {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }

    this.emitStatus.emit(this.status);
  }
  ngOnInit(): void {}
}
