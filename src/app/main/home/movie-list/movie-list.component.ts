import { Component, OnInit } from '@angular/core';
import { MovieResult } from 'src/app/core/model/movie';
import { MovieService } from 'src/app/core/service/movie.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  slides = [];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
  // de su dung dc Service
  constructor(private movieService: MovieService) {}
  // lifecycle of angular tuong duogn vs componentDIdMount, chay 1 lan sau khi Render
  movieList: MovieResult[] = [];
  ngOnInit(): void {
    // de lay data cua movie list ve
    // Observable of Angular o da ta se cham: .subcribe de lay data
    this.movieService.getMovieList().subscribe({
      next: (result) => {
        console.log(result);
        this.movieList = result;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('done');
      },
    });
  }
}
