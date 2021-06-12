import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  MovieResult,
  MovieShowtime,
  HeThongRapChieu,
  CumRapChieu,
} from '../model/movie';

@Injectable({
  // Tu dong khai bao service vao trong Provider
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  // currentUser = this.authService.getCurrentUser();
  // authToken = this.currentUser.accessToken;
  // // Http Options
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json; charset=UTF-8',
  //     Authorization: `Bearer ${this.authToken}`,
  //   }),
  // };
  //movielist
  movieList: MovieResult[] = [];
  // Phuong thuc Lay List Movie tu Backend
  getMovieList(): Observable<MovieResult[]> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01';

    return this.http.get<MovieResult[]>(url);
  }
  // Phuong thuc lay thong tin Chi tiet Phim tu BE

  // Phuong thuc lay Thong tin Lich chieu phim Theo ID tung Phim de Show o MovieDetail
  getShowTime(movieId: string): Observable<any> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?maNhom=GP01';
    const params = { maPhim: movieId };
    return this.http.get<any>(url, { params });
  }
  //Phuong thuc la heThongRapChieu de show tren HomePage
  getHeThongRap(): Observable<HeThongRapChieu[]> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap';
    return this.http.get<HeThongRapChieu[]>(url);
  }
  // Lay CumRapChieu dua tren params : ko can su dung Model
  getCumRapChieu1(maHeThongRap: string): Observable<any> {
    const params = { maHeThongRap: maHeThongRap };
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=BHDStar`;
    return this.http.get<any>(url, { params });
  }
  // Lay CumRapChieu dua tren params : ko can su dung Model
  getCumRapChieu2(maHeThongRap: string): Observable<any> {
    const params = { maHeThongRap: maHeThongRap };
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=galaxy`;
    return this.http.get<any>(url, { params });
  }
  // Lay CumRapChieu dua tren params : ko can su dung Model
  getCumRapChieu3(maHeThongRap: string): Observable<any> {
    const params = { maHeThongRap: maHeThongRap };
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=megaGS`;
    return this.http.get<any>(url, { params });
  }
  // Lay CumRapChieu dua tren params : ko can su dung Model
  getCumRapChieu4(maHeThongRap: string): Observable<any> {
    const params = { maHeThongRap: maHeThongRap };
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=CGV`;
    return this.http.get<any>(url, { params });
  }
  // Lay CumRapChieu dua tren params : ko can su dung Model
  getCumRapChieu5(maHeThongRap: string): Observable<any> {
    const params = { maHeThongRap: maHeThongRap };
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=lotte`;
    return this.http.get<any>(url, { params });
  }
  // Lay CumRapChieu dua tren params : ko can su dung Model
  getCumRapChieu6(maHeThongRap: string): Observable<any> {
    const params = { maHeThongRap: maHeThongRap };
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=cineStar`;
    return this.http.get<any>(url, { params });
  }
  // Lay DateTime vs Params GP01(default) + maHeThongRap (ko can su dung Model)
  getLichChieuTheoHeThong(maHeThongRap: string): Observable<any> {
    const params = { maHeThongRap: maHeThongRap };
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=BHDStar&maNhom=GP01';
    return this.http.get<any>(url, { params });
  }
  // Phuong thuc AddMovie: done
  addMovie(movie: any): Observable<any> {
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim';
    //no upload hinh
    // Chuyển thành FormData để có thể lưu trữ dữ liệu đặc biệt như File và gửi lên server
    // const formData = new FormData();

    // for (let key in movie) {
    //   formData.append(key, movie[key]);
    // }
    // return this.http.post(url, movie);
    return this.http.post<any>(url, movie);
  }
  //update movie
  updateMovie(data: any, movieId: number): Observable<any> {
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim?MaPhim=${movieId}`;
    return this.http.put<any>(url, data);
  }
  //Delete movie:done
  deleteMovie(movieId: any): Observable<any> {
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${movieId}`;
    const index = this.movieList.findIndex((movie) => movie.maPhim === movieId);
    if (index !== -1) {
      this.movieList.splice(index, 1);
      alert('xoa thanh cong!');
    }
    return this.http.delete(url);
  }
}
