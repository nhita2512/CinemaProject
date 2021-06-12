import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NguoiDung, UpdatedUser, UserParam } from '@/core/model/ngouoidung';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { AuthService } from '../service/auth.service';
import { UsersComponent } from '../../main/admin/users/users.component';
@Injectable({
  providedIn: 'root',
})
export class NguoidungService {
  //userlist
  userList: NguoiDung[] = [];
  constructor(private _http: HttpClient, private authService: AuthService) {}
  currentUser = this.authService.getCurrentUser();
  authToken = this.currentUser.accessToken;
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${this.authToken}`,
    }),
  };
  // Lay Danh sach nguoi dung- http get userList
  getDanhSachNguoiDung(): Observable<NguoiDung[]> {
    let url = `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`;
    // cho map => result (Ko can .json)
    return this._http.get<NguoiDung[]>(url);
  }
  //Lay data 1 nguoi dung trong userList
  getUserData(username: UserParam): Observable<UpdatedUser> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan';
    return this._http.post<UpdatedUser>(url, username, this.httpOptions);
  }
  //Add User vao List - post
  addUser(values: UpdatedUser): Observable<any> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung';

    return this._http.post(url, values, this.httpOptions);
  }
  //Update - put
  updateUser(data: any, username: string): Observable<any> {
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung?TaiKhoan=${username}`;

    return this._http.put<any>(url, data, this.httpOptions);
  }
  //delete
  deleteUser(username: string): Observable<any> {
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${username}`;
    const index = this.userList.findIndex((user) => user.taiKhoan === username);
    if (index !== -1) {
      this.userList.splice(index, 1);
      alert('xoa thanh cong!');
    }
    return this._http.delete<any>(url, this.httpOptions);
  }
  //search by name
  search(username: string): Observable<any> {
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01?TaiKhoan=${username}`;
    return this._http.get<any>(url + username);
  }
}
