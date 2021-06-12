"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SigninComponent = void 0;
var core_1 = require("@angular/core");
var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.error = '';
        this.isLoading = false;
        this.currentUser = this.authService.getCurrentUser();
    }
    SigninComponent.prototype.ngOnInit = function () { };
    SigninComponent.prototype.handleSignin = function () {
        var _this = this;
        // Chặn khi người dùng submit value chưa hợp lệ
        if (this.signinForm.invalid)
            return;
        this.authService.signin(this.signinForm.value).subscribe({
            next: function (result) {
                console.log(result);
                // Set kết quả đăng nhập cho biến currentUser trên authService
                _this.authService.setCurrentUser(result);
                localStorage.setItem('user', JSON.stringify(result));
                alert('Your sign in is successfull!');
                if (_this.currentUser.maLoaiNguoiDung == 'QuanTri') {
                    _this.router.navigateByUrl('/admin');
                }
                else {
                    _this.router.navigateByUrl('/');
                }
            },
            error: function (error) {
                _this.isLoading = false;
                console.log(error);
                _this.error = 'Your account is invalid!';
            }
        });
    };
    __decorate([
        core_1.ViewChild('signinForm')
    ], SigninComponent.prototype, "signinForm");
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.scss']
        })
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
