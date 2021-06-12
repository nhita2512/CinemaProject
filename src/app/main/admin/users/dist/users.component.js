"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersComponent = void 0;
var core_1 = require("@angular/core");
var ngouoidung_1 = require("@/core/model/ngouoidung");
var forms_1 = require("@angular/forms");
var UsersComponent = /** @class */ (function () {
    function UsersComponent(userSv, router) {
        this.userSv = userSv;
        this.router = router;
        this.isLoading = false;
        this.ann = '';
        this.error = '';
        this.show = false;
        this.userObject = new ngouoidung_1.UpdatedUser();
        this.userList = [];
        this.searchText = '';
        this.usersArray = [];
        // taiKhoan, matKhau, email, hoTen, soDt
        this.addForm = new forms_1.FormGroup({
            taiKhoan: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(3),
                forms_1.Validators.maxLength(20),
            ]),
            matKhau: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
            ]),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            hoTen: new forms_1.FormControl('', [forms_1.Validators.required]),
            soDt: new forms_1.FormControl('', [forms_1.Validators.required]),
            maNhom: new forms_1.FormControl('', [forms_1.Validators === null || forms_1.Validators === void 0 ? void 0 : forms_1.Validators.required]),
            maLoaiNguoiDung: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getAllUserList();
    };
    //get all user
    UsersComponent.prototype.getAllUserList = function () {
        var _this = this;
        this.userSv.getDanhSachNguoiDung().subscribe({
            next: function (res) {
                console.log(res);
                _this.userList = res;
            },
            error: function (err) {
                console.log(err);
                _this.userList = err;
            }
        });
    };
    //check errors
    UsersComponent.prototype.checkError = function (field, type) {
        var _a;
        var control = this.addForm.get(field);
        if (type) {
            return (_a = control === null || control === void 0 ? void 0 : control.errors) === null || _a === void 0 ? void 0 : _a[type];
        }
        return (control === null || control === void 0 ? void 0 : control.invalid) && ((control === null || control === void 0 ? void 0 : control.touched) || (control === null || control === void 0 ? void 0 : control.dirty));
    };
    //Submit
    UsersComponent.prototype.AddUser = function () {
        var _this = this;
        //Xử lý chặn khi submit nhưng input có lỗi
        // this.addForm.markAllAsTouched();
        // if (this.addForm.invalid) return;
        // this.isLoading = true;
        this.userSv.addUser(this.addForm.value).subscribe({
            next: function () {
                alert('Them Thanh Cong');
                _this.userList.push(_this.addForm.value);
                _this.reset();
                _this.getAllUserList();
            },
            error: function (error) {
                alert('Them khong thanh cong');
                console.log(error);
            }
        });
    };
    //handleEdit
    UsersComponent.prototype.onEdit = function (user) {
        this.addForm.controls['taiKhoan'].setValue(user.taiKhoan);
        this.addForm.controls['matKhau'].setValue(user.matKhau);
        this.addForm.controls['email'].setValue(user.email);
        this.addForm.controls['hoTen'].setValue(user.hoTen);
        this.addForm.controls['soDt'].setValue(user.soDt);
        this.addForm.controls['maNhom'].setValue(user.maNhom);
        this.addForm.controls['maLoaiNguoiDung'].setValue(user.maLoaiNguoiDung);
        this.modalShow();
    };
    //handleUpdate
    UsersComponent.prototype.updateUser = function () {
        var _this = this;
        this.userObject.taiKhoan = this.addForm.value.taiKhoan;
        this.userObject.matKhau = this.addForm.value.matKhau;
        this.userObject.email = this.addForm.value.email;
        this.userObject.hoTen = this.addForm.value.hoTen;
        this.userObject.soDt = this.addForm.value.soDt;
        this.userObject.maNhom = this.addForm.value.maNhom;
        this.userObject.maLoaiNguoiDung = this.addForm.value.maLoaiNguoiDung;
        //subscribe ham updateUser
        this.userSv
            .updateUser(this.userObject, this.userObject.taiKhoan)
            .subscribe({
            next: function () {
                alert('update thanh cong ');
                _this.userList.push(_this.userObject);
                _this.reset();
                _this.getAllUserList();
            },
            error: function (error) {
                console.log(error);
                alert('Update khong thanh cong');
            }
        });
    };
    //modal show cho Nut Edit: phai co value tu User do de show ra UI o cac Input
    //updateUser
    //handleDelete: run but bao loi Server 500
    UsersComponent.prototype.handleDelete = function (username) {
        var _this = this;
        this.userSv.deleteUser(username).subscribe({
            next: function (res) {
                _this.getAllUserList();
            },
            error: function (error) {
                console.log(error);
                alert('Something went wrong');
                _this.getAllUserList();
            }
        });
    };
    //reset
    UsersComponent.prototype.reset = function () {
        this.addForm.reset();
    };
    //search by taiKhoan of user
    UsersComponent.prototype.handleSearch = function () {
        var _this = this;
        this.userSv.search(this.searchText).subscribe({
            next: function (res) {
                res.forEach(function (ele) { return _this.usersArray.push(ele.taiKhoan); });
                _this.usersArray = res;
            }
        });
    };
    //show modal
    UsersComponent.prototype.modalShow = function () {
        document.getElementById('exampleModal').style.display = 'block';
    };
    //hide modal
    UsersComponent.prototype.modalHide = function () {
        document.getElementById('exampleModal').style.display = 'none';
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.scss']
        })
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
