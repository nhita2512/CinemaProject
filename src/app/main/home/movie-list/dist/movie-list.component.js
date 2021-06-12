"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieListComponent = void 0;
var core_1 = require("@angular/core");
var MovieListComponent = /** @class */ (function () {
    // de su dung dc Service
    function MovieListComponent(movieService) {
        this.movieService = movieService;
        this.slides = [];
        this.slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
        // lifecycle of angular tuong duogn vs componentDIdMount, chay 1 lan sau khi Render
        this.movieList = [];
    }
    MovieListComponent.prototype.slickInit = function (e) {
        console.log('slick initialized');
    };
    MovieListComponent.prototype.breakpoint = function (e) {
        console.log('breakpoint');
    };
    MovieListComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    MovieListComponent.prototype.beforeChange = function (e) {
        console.log('beforeChange');
    };
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // de lay data cua movie list ve
        // Observable of Angular o da ta se cham: .subcribe de lay data
        this.movieService.getMovieList().subscribe({
            next: function (result) {
                console.log(result);
                _this.movieList = result;
            },
            error: function (error) {
                console.log(error);
            },
            complete: function () {
                console.log('done');
            }
        });
    };
    MovieListComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-list',
            templateUrl: './movie-list.component.html',
            styleUrls: ['./movie-list.component.scss']
        })
    ], MovieListComponent);
    return MovieListComponent;
}());
exports.MovieListComponent = MovieListComponent;
