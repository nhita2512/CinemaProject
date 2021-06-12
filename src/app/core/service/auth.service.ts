import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {
  SigninParams,
  SignupParams,
  SigninResult,
  SignupResult,
} from '../model/auth';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // BehaviorSubject: tạo ra 1 đối tượng có thể lưu trữ data
  // currentUser.value => Get value của biến currentUser
  // currentUser.next(value) => Set lại value của biến currentUser
  // currentUser.asObservale() => Chuyển currentUser thành 1 Observable => Ta có thể subcrible để theo dõi sự thay đổi data của biến này
  private currentUserSubject = new BehaviorSubject<SigninResult | null>(null);
  currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    // Khi service khởi chạy, kiểm tra trong localStorage nếu có user sẽ set lại cho biến currentUser

    const user = localStorage.getItem('user');
    if (user) {
      this.setCurrentUser(JSON.parse(user));
    }
  }

  getCurrentUser() {
    return this.currentUserSubject.value;
  }

  setCurrentUser(value: any) {
    this.currentUserSubject.next(value);
  }
  // Cho muc Dang Nhap
  signin(values: SigninParams): Observable<SigninResult> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap?maNhom=GP01';

    return this.http.post<SigninResult>(url, values);
  }
  // Cho muc Dang Ky
  signup(values: SignupParams): Observable<SignupResult> {
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';

    return this.http.post<SignupResult>(url, { ...values, maNhom: 'GP01' });
  }
}
