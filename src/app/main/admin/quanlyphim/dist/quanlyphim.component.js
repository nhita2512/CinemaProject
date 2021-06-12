"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuanlyphimComponent = void 0;
var core_1 = require("@angular/core");
var movie_1 = require("src/app/core/model/movie");
var forms_1 = require("@angular/forms");
var QuanlyphimComponent = /** @class */ (function () {
    function QuanlyphimComponent(moviesv) {
        this.moviesv = moviesv;
        this.movieObj = new movie_1.MovieUpdate();
        this.isLoading = false;
        this.ann = '';
        this.error = '';
        this.movieList = [];
        // taiKhoan, matKhau, email, hoTen, soDt
        this.addForm = new forms_1.FormGroup({
            maPhim: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(3),
                forms_1.Validators.maxLength(10),
            ]),
            tenPhim: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z])'),
            ]),
            biDanh: new forms_1.FormControl('', [forms_1.Validators.required]),
            trailer: new forms_1.FormControl('', [forms_1.Validators.required]),
            hinhAnh: new forms_1.FormControl('', [forms_1.Validators.required]),
            moTa: new forms_1.FormControl('', [forms_1.Validators === null || forms_1.Validators === void 0 ? void 0 : forms_1.Validators.required]),
            maNhom: new forms_1.FormControl('', [forms_1.Validators === null || forms_1.Validators === void 0 ? void 0 : forms_1.Validators.required]),
            ngayKhoiChieu: new forms_1.FormControl('', [forms_1.Validators === null || forms_1.Validators === void 0 ? void 0 : forms_1.Validators.required]),
            danhGia: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    }
    QuanlyphimComponent.prototype.ngOnInit = function () {
        // de lay data cua movie list ve
        // Observable of Angular o da ta se cham: .subcribe de lay data
        this.getMovieList();
    };
    //get Movielist
    QuanlyphimComponent.prototype.getMovieList = function () {
        var _this = this;
        this.moviesv.getMovieList().subscribe({
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
    //xu ly change file hinhAnh upload
    QuanlyphimComponent.prototype.handleChangeFile = function (evt) {
        var file = evt.target.files;
        this.addForm.value.hinhAnh = file;
    };
    //addmovie to list: hay bi loi hinhAnh ko dung dinh dang
    QuanlyphimComponent.prototype.handleAddMovie = function () {
        var _this = this;
        // Gọi API thêm phim
        console.log(this.addForm.value);
        this.moviesv.addMovie(this.addForm.value).subscribe({
            next: function () {
                _this.movieList.push(_this.addForm.value);
                alert('Them Phim Thanh Cong');
                _this.reset();
                _this.getMovieList();
            },
            error: function (err) {
                console.log(err);
                alert('Something went wrong');
                _this.getMovieList();
            }
        });
    };
    //Xu ly Update phim: Lay data Phim show len form => User chinh sua va save changes -> changes se dc push lai vao movieList
    QuanlyphimComponent.prototype.onEdit = function (movie) {
        this.addForm.controls['maPhim'].setValue(movie.maPhim);
        this.addForm.controls['tenPhim'].setValue(movie.tenPhim);
        this.addForm.controls['biDanh'].setValue(movie.biDanh);
        this.addForm.controls['trailer'].setValue(movie.trailer);
        this.addForm.controls['hinhAnh'].setValue(movie.hinhAnh);
        this.addForm.controls['moTa'].setValue(movie.moTa);
        this.addForm.controls['maNhom'].setValue(movie.maNhom);
        this.addForm.controls['ngayKhoiChieu'].setValue(movie.ngayKhoiChieu);
        this.addForm.controls['danhGia'].setValue(movie.danhGia);
        this.modalShow();
    };
    //update: Http response 404 err
    QuanlyphimComponent.prototype.handleUpdateMovie = function () {
        var _this = this;
        this.movieObj.maPhim = this.addForm.value.maPhim;
        this.movieObj.tenPhim = this.addForm.value.tenPhim;
        this.movieObj.biDanh = this.addForm.value.biDanh;
        this.movieObj.trailer = this.addForm.value.trailer;
        this.movieObj.hinhAnh = this.addForm.value.hinhAnh;
        this.movieObj.moTa = this.addForm.value.moTa;
        this.movieObj.maNhom = this.addForm.value.maNhom;
        this.movieObj.ngayKhoiChieu = this.addForm.value.ngayKhoiChieu;
        this.movieObj.danhGia = this.addForm.value.danhGia;
        this.moviesv.updateMovie(this.movieObj, this.movieObj.maPhim).subscribe({
            next: function () {
                _this.movieList.push(_this.movieObj);
                alert('Update phim thanh cong');
                _this.reset();
                _this.getMovieList();
            },
            error: function (err) {
                console.log(err);
                alert('Update khong thanh cong');
                _this.reset();
            }
        });
    };
    //delete movie of list:done
    QuanlyphimComponent.prototype.handleDeleteMovie = function (movieId) {
        var _this = this;
        this.moviesv.deleteMovie(movieId).subscribe({
            next: function (res) {
                _this.getMovieList();
            },
            error: function (error) {
                console.log(error);
                alert('Something went wrong');
                return;
            }
        });
    };
    //check errors
    QuanlyphimComponent.prototype.checkError = function (field, type) {
        var _a;
        var control = this.addForm.get(field);
        if (type) {
            return (_a = control === null || control === void 0 ? void 0 : control.errors) === null || _a === void 0 ? void 0 : _a[type];
        }
        return (control === null || control === void 0 ? void 0 : control.invalid) && ((control === null || control === void 0 ? void 0 : control.touched) || (control === null || control === void 0 ? void 0 : control.dirty));
    };
    //reset
    QuanlyphimComponent.prototype.reset = function () {
        this.addForm.reset();
    };
    //show modal
    QuanlyphimComponent.prototype.modalShow = function () {
        document.getElementById('exampleModal').style.display = 'block';
    };
    //hide modal
    QuanlyphimComponent.prototype.modalHide = function () {
        document.getElementById('exampleModal').style.display = 'none';
    };
    QuanlyphimComponent = __decorate([
        core_1.Component({
            selector: 'app-quanlyphim',
            templateUrl: './quanlyphim.component.html',
            styleUrls: ['./quanlyphim.component.scss']
        })
    ], QuanlyphimComponent);
    return QuanlyphimComponent;
}());
exports.QuanlyphimComponent = QuanlyphimComponent;
