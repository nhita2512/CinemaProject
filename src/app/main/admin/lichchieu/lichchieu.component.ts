import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../core/service/movie.service';
import { MovieShowtime, HeThongRapChieu } from '../../../core/model/movie';
@Component({
  selector: 'app-lichchieu',
  templateUrl: './lichchieu.component.html',
  styleUrls: ['./lichchieu.component.scss'],
})
export class LichchieuComponent implements OnInit {
  listHeThongRap: HeThongRapChieu[] = [];
  constructor(private moviesv: MovieService) {}
  ngOnInit(): void {
    this.moviesv.getHeThongRap().subscribe({
      next: (result) => {
        console.log(result);
        this.listHeThongRap = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
