import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '@/core/service/movie.service';
import { ModalService } from '../../../core/service/modal.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthService } from '../../../core/service/auth.service';
import { Router } from '@angular/router';
import {
  MovieShowtime,
  MovieResult,
  HeThongRapChieu,
  CumRapChieu,
  LichChieuPhim,
} from 'src/app/core/model/movie';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movieShowTimes: MovieShowtime = <MovieShowtime>{};
  phim: any = {};
  cinema = <CumRapChieu>{};
  cinemaList = <HeThongRapChieu>{};
  selectedPCinema: string = '';

  public safeURL: SafeResourceUrl;
  currentUser = this.authService.getCurrentUser();

  //  heThongRap:heThongRapChieu =[];
  //  cumRap:cumRapChieu=[];
  bodyText: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private modalService: ModalService,
    private _sanitizer: DomSanitizer,
    private authService: AuthService,
    private router: Router
  ) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      ` https://www.youtube.com/embed/{{this.phim.trailer}}`
    );
  }

  ngOnInit(): void {
    // activatedRoute: service của angular cung cấp các phương thức để làm việc với url
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        // Lấy đc mã phim => dùng mã phim gọi API
        this.movieService.getShowTime(params.movieId).subscribe({
          next: (result) => {
            console.log(result);
            this.phim = result;
            this.selectedPCinema = this.phim.heThongRapChieu[0].maHeThongRap;
            console.log(this.selectedPCinema);
            this.renderShowTime();
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
    });
  }
  //RenderSHowtime
  renderShowTime(day = '2019-01-01') {
    let index = this.phim.heThongRapChieu.findIndex(
      (Pcine) => Pcine.maHeThongRap === this.selectedPCinema
    );
    this.cinema = {
      ...this.phim.heThongRapChieu[index].cumRapChieu[0],
    };
    this.cinema.lichChieuPhim = this.cinema.lichChieuPhim.filter((item) =>
      item.ngayChieuGioChieu.toString().startsWith(day)
    );
  }
  //Change He thong rap
  changeParentCinema(value: string) {
    this.selectedPCinema = value;
    this.renderShowTime();
  }
  // Mo Modal o trang Movie Detail
  openModal(id: string) {
    this.modalService.open(id);
  }
  // Dong Modal o trang Movie Detail
  closeModal(id: string) {
    this.modalService.close(id);
  }
  // Alert t khi User Click vao btn "Buy Ticket"
  nhacDangNhap() {
    if (!this.currentUser) {
      alert('Please sign in to buy ticket!');
      this.router.navigateByUrl('/signin');
    } else {
      this.router.navigateByUrl('/trangdatghe');
      console.log(this.currentUser);
    }
  }
}
