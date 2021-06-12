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
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        // Khi service khởi chạy, kiểm tra trong localStorage nếu có user sẽ set lại cho biến currentUser
        this.http = http;
        // BehaviorSubject: tạo ra 1 đối tượng có thể lưu trữ data
        // currentUser.value => Get value của biến currentUser
        // currentUser.next(value) => Set lại value của biến currentUser
        // currentUser.asObservale() => Chuyển currentUser thành 1 Observable => Ta có thể subcrible để theo dõi sự thay đổi data của biến này
        this.currentUserSubject = new rxjs_1.BehaviorSubject(null);
        this.currentUser = this.currentUserSubject.asObservable();
        var user = localStorage.getItem('user');
        if (user) {
            this.setCurrentUser(JSON.parse(user));
        }
    }
    AuthService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    AuthService.prototype.setCurrentUser = function (value) {
        this.currentUserSubject.next(value);
    };
    // Cho muc Dang Nhap
    AuthService.prototype.signin = function (values) {
        var url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap?maNhom=GP01';
        return this.http.post(url, values);
    };
    // Cho muc Dang Ky
    AuthService.prototype.signup = function (values) {
        var url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';
        return this.http.post(url, __assign(__assign({}, values), { maNhom: 'GP01' }));
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
