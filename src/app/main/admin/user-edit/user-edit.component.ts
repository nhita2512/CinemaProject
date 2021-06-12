import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NguoidungService } from '../../../core/service/nguoidung.service';
import { NguoiDung } from '@/core/model/ngouoidung';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  addForm: FormGroup;
  isLoading: boolean = false;
  ann: string = '';
  error: string = '';
  userList: NguoiDung[] = [];
  constructor() {
    this.addForm = new FormGroup({
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
      maNhom: new FormControl('', [Validators.required]),
      maLoaiNguoiDung: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
  checkError(field: string, type?: string) {
    const control = this.addForm.get(field);

    if (type) {
      return control?.errors?.[type];
    }

    return control?.invalid && (control?.touched || control?.dirty);
  }
  //handleEditUser()
}
