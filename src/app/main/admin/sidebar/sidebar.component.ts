import { TransformDataService } from '@/core/service/transform-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  status: boolean = true;
  constructor(private transform: TransformDataService) {}

  ngOnInit(): void {
    this.transform.asData.subscribe((kq) => {
      this.status = kq;
    });
  }
}
