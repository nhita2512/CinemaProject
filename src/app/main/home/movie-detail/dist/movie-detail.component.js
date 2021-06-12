"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieDetailComponent = void 0;
var core_1 = require("@angular/core");
var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(activatedRoute, movieService, modalService, _sanitizer, authService, router) {
        this.activatedRoute = activatedRoute;
        this.movieService = movieService;
        this.modalService = modalService;
        this._sanitizer = _sanitizer;
        this.authService = authService;
        this.router = router;
        this.movieShowTimes = {};
        this.phim = {};
        this.cinema = {};
        this.cinemaList = {};
        this.selectedPCinema = '';
        this.currentUser = this.authService.getCurrentUser();
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(" https://www.youtube.com/embed/{{this.phim.trailer}}");
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // activatedRoute: service của angular cung cấp các phương thức để làm việc với url
        this.activatedRoute.params.subscribe({
            next: function (params) {
                console.log(params);
                // Lấy đc mã phim => dùng mã phim gọi API
                _this.movieService.getShowTime(params.movieId).subscribe({
                    next: function (result) {
                        console.log(result);
                        _this.phim = result;
                        _this.selectedPCinema = _this.phim.heThongRapChieu[0].maHeThongRap;
                        console.log(_this.selectedPCinema);
                        _this.renderShowTime();
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });
            }
        });
    };
    //RenderSHowtime
    MovieDetailComponent.prototype.renderShowTime = function (day) {
        var _this = this;
        if (day === void 0) { day = '2019-01-01'; }
        var index = this.phim.heThongRapChieu.findIndex(function (Pcine) { return Pcine.maHeThongRap === _this.selectedPCinema; });
        this.cinema = __assign({}, this.phim.heThongRapChieu[index].cumRapChieu[0]);
        this.cinema.lichChieuPhim = this.cinema.lichChieuPhim.filter(function (item) {
            return item.ngayChieuGioChieu.toString().startsWith(day);
        });
    };
    //Change He thong rap
    MovieDetailComponent.prototype.changeParentCinema = function (value) {
        this.selectedPCinema = value;
        this.renderShowTime();
    };
    // Mo Modal o trang Movie Detail
    MovieDetailComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    // Dong Modal o trang Movie Detail
    MovieDetailComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    // Alert t khi User Click vao btn "Buy Ticket"
    MovieDetailComponent.prototype.nhacDangNhap = function () {
        if (!this.currentUser) {
            alert('Please sign in to buy ticket!');
            this.router.navigateByUrl('/signin');
        }
        else {
            this.router.navigateByUrl('/trangdatghe');
            console.log(this.currentUser);
        }
    };
    MovieDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-detail',
            templateUrl: './movie-detail.component.html',
            styleUrls: ['./movie-detail.component.scss']
        })
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());
exports.MovieDetailComponent = MovieDetailComponent;
