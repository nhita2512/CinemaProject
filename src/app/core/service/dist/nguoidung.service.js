"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NguoidungService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var NguoidungService = /** @class */ (function () {
    function NguoidungService(_http, authService) {
        this._http = _http;
        this.authService = authService;
        //userlist
        this.userList = [];
        this.currentUser = this.authService.getCurrentUser();
        this.authToken = this.currentUser.accessToken;
        // Http Options
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json; charset=UTF-8',
                Authorization: "Bearer " + this.authToken
            })
        };
    }
    // Lay Danh sach nguoi dung- http get userList
    NguoidungService.prototype.getDanhSachNguoiDung = function () {
        var url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01";
        // cho map => result (Ko can .json)
        return this._http.get(url);
    };
    //Lay data 1 nguoi dung trong userList
    NguoidungService.prototype.getUserData = function (username) {
        var url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan';
        return this._http.post(url, username, this.httpOptions);
    };
    //Add User vao List - post
    NguoidungService.prototype.addUser = function (values) {
        var url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung';
        return this._http.post(url, values, this.httpOptions);
    };
    //Update - put
    NguoidungService.prototype.updateUser = function (data, username) {
        var url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung?TaiKhoan=" + username;
        return this._http.put(url, data, this.httpOptions);
    };
    //delete
    NguoidungService.prototype.deleteUser = function (username) {
        var url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=" + username;
        var index = this.userList.findIndex(function (user) { return user.taiKhoan === username; });
        if (index !== -1) {
            this.userList.splice(index, 1);
            alert('xoa thanh cong!');
        }
        return this._http["delete"](url, this.httpOptions);
    };
    //search by name
    NguoidungService.prototype.search = function (username) {
        var url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01?TaiKhoan=" + username;
        return this._http.get(url + username);
    };
    NguoidungService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], NguoidungService);
    return NguoidungService;
}());
exports.NguoidungService = NguoidungService;
