import { Component, OnInit } from '@angular/core';
import { MovieResult } from 'src/app/core/model/movie';
import { MovieService } from 'src/app/core/service/movie.service';

@Component({
  selector: 'app-tim-phim',
  templateUrl: './tim-phim.component.html',
  styleUrls: ['./tim-phim.component.scss'],
})
export class TimPhimComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  movieList: MovieResult[] = [];
  movie: any = {};
  checked: boolean = false;
  ngOnInit(): void {
    // Subsribe method getMovieList da Import tu MovieService=> Lay dc DS Movie thanh cong de hien thi ra
    this.movieService.getMovieList().subscribe({
      next: (result) => {
        console.log(result);
        return (this.movieList = result);
      },
      error: (error) => {
        alert('Unsuccessfull!');
        console.log(error);
      },
      complete: () => {
        console.log('done');
      },
    });
    return this.movie.tenPhim;
  }
  // An Hien movieList khi User click vao Nut Select Movie
  toggle() {
    this.checked = !this.checked;
  }
}
