import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// Router: service dùng để routing
import { Router } from '@angular/router';

import { AuthService } from '@/core/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  @ViewChild('signinForm') signinForm!: NgForm;
  error: string = '';
  isLoading: boolean = false;
  currentUser = this.authService.getCurrentUser();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  handleSignin() {
    // Chặn khi người dùng submit value chưa hợp lệ
    if (this.signinForm.invalid) return;

    this.authService.signin(this.signinForm.value).subscribe({
      next: (result) => {
        console.log(result);
        // Set kết quả đăng nhập cho biến currentUser trên authService
        this.authService.setCurrentUser(result);
        localStorage.setItem('user', JSON.stringify(result));
        alert('Your sign in is successfull!');
        if (this.currentUser.maLoaiNguoiDung == 'QuanTri') {
          this.router.navigateByUrl('/admin');
        } else {
          this.router.navigateByUrl('/');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.log(error);
        this.error = 'Your account is invalid!';
      },
    });
  }
}
