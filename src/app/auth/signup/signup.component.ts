import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';
import { SignupGuard } from '../../core/guards/signup.guard';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isLoading: boolean = false;
  ann: string = '';
  error: string = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private guard: SignupGuard
  ) {
    // taiKhoan, matKhau, email, hoTen, soDt
    this.signupForm = new FormGroup({
      taiKhoan: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      matKhau: new FormControl('', [
        Validators.required,
        Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      hoTen: new FormControl('', [Validators.required]),
      soDt: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  checkError(field: string, type?: string) {
    const control = this.signupForm.get(field);

    if (type) {
      return control?.errors?.[type];
    }

    return control?.invalid && (control?.touched || control?.dirty);
  }

  handleSignup() {
    // Xử lý chặn khi submit nhưng input có lỗi
    // this.signupForm.markAllAsTouched();
    // if (this.signupForm.invalid) return;
    // this.isLoading = true;
    this.authService.signup(this.signupForm.value).subscribe({
      next: (result) => {
        localStorage.setItem('user', JSON.stringify(result));
        console.log(result);
        alert('Sign up successfully!');
        this.router.navigateByUrl('/signin');
      },
      error: (error) => {
        this.isLoading = false;
        console.log(error);
        this.error = 'Your information is wrong at something!';
      },
    });
    this.guard.canDeactivate;
  }
  // Tham khao lai code cua dangKy Component da Delete ->
  //vi phai push them value of signup Form vao trong Mang DS nguoi dung da lay
}
