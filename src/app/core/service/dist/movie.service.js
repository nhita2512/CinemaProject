"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieService = void 0;
var core_1 = require("@angular/core");
var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
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
        this.movieList = [];
    }
    // Phuong thuc Lay List Movie tu Backend
    MovieService.prototype.getMovieList = function () {
        var url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01';
        return this.http.get(url);
    };
    // Phuong thuc lay thong tin Chi tiet Phim tu BE
    // Phuong thuc lay Thong tin Lich chieu phim Theo ID tung Phim de Show o MovieDetail
    MovieService.prototype.getShowTime = function (movieId) {
        var url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?maNhom=GP01';
        var params = { maPhim: movieId };
        return this.http.get(url, { params: params });
    };
    //Phuong thuc la heThongRapChieu de show tren HomePage
    MovieService.prototype.getHeThongRap = function () {
        var url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap';
        return this.http.get(url);
    };
    // Lay CumRapChieu dua tren params : ko can su dung Model
    MovieService.prototype.getCumRapChieu1 = function (maHeThongRap) {
        var params = { maHeThongRap: maHeThongRap };
        var url = "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=BHDStar";
        return this.http.get(url, { params: params });
    };
    // Lay CumRapChieu dua tren params : ko can su dung Model
    MovieService.prototype.getCumRapChieu2 = function (maHeThongRap) {
        var params = { maHeThongRap: maHeThongRap };
        var url = "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=galaxy";
        return this.http.get(url, { params: params });
    };
    // Lay CumRapChieu dua tren params : ko can su dung Model
    MovieService.prototype.getCumRapChieu3 = function (maHeThongRap) {
        var params = { maHeThongRap: maHeThongRap };
        var url = "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=megaGS";
        return this.http.get(url, { params: params });
    };
    // Lay CumRapChieu dua tren params : ko can su dung Model
    MovieService.prototype.getCumRapChieu4 = function (maHeThongRap) {
        var params = { maHeThongRap: maHeThongRap };
        var url = "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=CGV";
        return this.http.get(url, { params: params });
    };
    // Lay CumRapChieu dua tren params : ko can su dung Model
    MovieService.prototype.getCumRapChieu5 = function (maHeThongRap) {
        var params = { maHeThongRap: maHeThongRap };
        var url = "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=lotte";
        return this.http.get(url, { params: params });
    };
    // Lay CumRapChieu dua tren params : ko can su dung Model
    MovieService.prototype.getCumRapChieu6 = function (maHeThongRap) {
        var params = { maHeThongRap: maHeThongRap };
        var url = "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=cineStar";
        return this.http.get(url, { params: params });
    };
    // Lay DateTime vs Params GP01(default) + maHeThongRap (ko can su dung Model)
    MovieService.prototype.getLichChieuTheoHeThong = function (maHeThongRap) {
        var params = { maHeThongRap: maHeThongRap };
        var url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=BHDStar&maNhom=GP01';
        return this.http.get(url, { params: params });
    };
    // Phuong thuc AddMovie: done
    MovieService.prototype.addMovie = function (movie) {
        var url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim';
        //no upload hinh
        // Chuyển thành FormData để có thể lưu trữ dữ liệu đặc biệt như File và gửi lên server
        // const formData = new FormData();
        // for (let key in movie) {
        //   formData.append(key, movie[key]);
        // }
        // return this.http.post(url, movie);
        return this.http.post(url, movie);
    };
    //update movie
    MovieService.prototype.updateMovie = function (data, movieId) {
        var url = "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim?MaPhim=" + movieId;
        return this.http.put(url, data);
    };
    //Delete movie:done
    MovieService.prototype.deleteMovie = function (movieId) {
        var url = "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=" + movieId;
        var index = this.movieList.findIndex(function (movie) { return movie.maPhim === movieId; });
        if (index !== -1) {
            this.movieList.splice(index, 1);
            alert('xoa thanh cong!');
        }
        return this.http["delete"](url);
    };
    MovieService = __decorate([
        core_1.Injectable({
            // Tu dong khai bao service vao trong Provider
            providedIn: 'root'
        })
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
