import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../core/service/movie.service';
import {
  HeThongRapChieu,
  CumRapChieu,
  LichChieuPhim,
} from '../../../core/model/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-he-thong-rap',
  templateUrl: './he-thong-rap.component.html',
  styleUrls: ['./he-thong-rap.component.scss'],
})
export class HeThongRapComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}
  heThongRapList: HeThongRapChieu[] = [];
  cumRapList: CumRapChieu[] = [];
  cumRapList1: CumRapChieu[] = [];
  cumRapList2: CumRapChieu[] = [];
  cumRapList3: CumRapChieu[] = [];
  cumRapList4: CumRapChieu[] = [];
  cumRapList5: CumRapChieu[] = [];
  lichChieuList: LichChieuPhim[] = [];
  ngOnInit(): void {
    // subscribe get HethongRap
    this.movieService.getHeThongRap().subscribe({
      next: (result) => {
        console.log(result);
        this.heThongRapList = result;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('done');
      },
    });
    //subsrcibe gt=etCumraptheohethong
    // activatedRoute: service của angular cung cấp các phương thức để làm việc với url
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        // Lấy đc mã phim => dùng mã phim gọi API
        this.movieService.getCumRapChieu1(params.maHeThongRap).subscribe({
          next: (result) => {
            console.log(result);
            this.cumRapList = result;
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
    });

    // activatedRoute: service của angular cung cấp các phương thức để làm việc với url
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        // Lấy đc mã phim => dùng mã phim gọi API
        this.movieService.getCumRapChieu2(params.maHeThongRap).subscribe({
          next: (result) => {
            console.log(result);
            this.cumRapList1 = result;
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
    });

    // activatedRoute: service của angular cung cấp các phương thức để làm việc với url
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        // Lấy đc mã phim => dùng mã phim gọi API
        this.movieService.getCumRapChieu3(params.maHeThongRap).subscribe({
          next: (result) => {
            console.log(result);
            this.cumRapList2 = result;
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
    });

    // activatedRoute: service của angular cung cấp các phương thức để làm việc với url
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        // Lấy đc mã phim => dùng mã phim gọi API
        this.movieService.getCumRapChieu4(params.maHeThongRap).subscribe({
          next: (result) => {
            console.log(result);
            this.cumRapList3 = result;
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
    });

    // activatedRoute: service của angular cung cấp các phương thức để làm việc với url
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        // Lấy đc mã phim => dùng mã phim gọi API
        this.movieService.getCumRapChieu5(params.maHeThongRap).subscribe({
          next: (result) => {
            console.log(result);
            this.cumRapList4 = result;
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
    });

    // activatedRoute: service của angular cung cấp các phương thức để làm việc với url
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        // Lấy đc mã phim => dùng mã phim gọi API
        this.movieService.getCumRapChieu6(params.maHeThongRap).subscribe({
          next: (result) => {
            console.log(result);
            this.cumRapList5 = result;
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
    });
    // Subscribe getDateTimeOfMovies
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        // sau khi lay dc params la maHeThongRap
        this.movieService
          .getLichChieuTheoHeThong(params.maHeThongRap)
          .subscribe({
            next: (res) => {
              console.log(res);
              this.lichChieuList = res;
            },
            error: (err) => {
              console.log(err);
            },
          });
      },
    });
  }
}
