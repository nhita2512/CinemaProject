import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  AfterViewInit,
  Input,
} from '@angular/core';
import { NguoidungService } from '../../../core/service/nguoidung.service';
import { NguoiDung, UpdatedUser, UserParam } from '@/core/model/ngouoidung';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  addForm: FormGroup;
  isLoading: boolean = false;
  ann: string = '';
  error: string = '';
  show: boolean = false;
  userObject = new UpdatedUser();
  userList: NguoiDung[] = [];
  searchText: string = '';
  usersArray: any = [];
  constructor(private userSv: NguoidungService, private router: Router) {
    // taiKhoan, matKhau, email, hoTen, soDt
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
      maNhom: new FormControl('', [Validators?.required]),
      maLoaiNguoiDung: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAllUserList();
  }
  //get all user
  getAllUserList() {
    this.userSv.getDanhSachNguoiDung().subscribe({
      next: (res) => {
        console.log(res);
        this.userList = res;
      },
      error: (err) => {
        console.log(err);
        this.userList = err;
      },
    });
  }

  //check errors
  checkError(field: string, type?: string) {
    const control = this.addForm.get(field);

    if (type) {
      return control?.errors?.[type];
    }

    return control?.invalid && (control?.touched || control?.dirty);
  }
  //Submit
  AddUser() {
    //Xử lý chặn khi submit nhưng input có lỗi
    // this.addForm.markAllAsTouched();
    // if (this.addForm.invalid) return;
    // this.isLoading = true;
    this.userSv.addUser(this.addForm.value).subscribe({
      next: () => {
        alert('Them Thanh Cong');
        this.userList.push(this.addForm.value);
        this.reset();
        this.getAllUserList();
      },
      error: (error) => {
        alert('Them khong thanh cong');
        console.log(error);
      },
    });
  }
  //handleEdit
  onEdit(user: any) {
    this.addForm.controls['taiKhoan'].setValue(user.taiKhoan);
    this.addForm.controls['matKhau'].setValue(user.matKhau);
    this.addForm.controls['email'].setValue(user.email);
    this.addForm.controls['hoTen'].setValue(user.hoTen);
    this.addForm.controls['soDt'].setValue(user.soDt);
    this.addForm.controls['maNhom'].setValue(user.maNhom);
    this.addForm.controls['maLoaiNguoiDung'].setValue(user.maLoaiNguoiDung);
    this.modalShow();
  }
  //handleUpdate
  updateUser() {
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
        next: () => {
          alert('update thanh cong ');
          this.userList.push(this.userObject);
          this.reset();
          this.getAllUserList();
        },
        error: (error) => {
          console.log(error);
          alert('Update khong thanh cong');
        },
      });
  }
  //modal show cho Nut Edit: phai co value tu User do de show ra UI o cac Input
  //updateUser

  //handleDelete: run but bao loi Server 500
  handleDelete(username: string) {
    this.userSv.deleteUser(username).subscribe({
      next: (res) => {
        this.getAllUserList();
      },
      error: (error) => {
        console.log(error);
        alert('Something went wrong');
        this.getAllUserList();
      },
    });
  }
  //reset
  reset() {
    this.addForm.reset();
  }
  //search by taiKhoan of user
  handleSearch() {
    this.userSv.search(this.searchText).subscribe({
      next: (res) => {
        res.forEach((ele) => this.usersArray.push(ele.taiKhoan));
        this.usersArray = res;
      },
    });
  }
  //show modal
  modalShow() {
    document.getElementById('exampleModal').style.display = 'block';
  }
  //hide modal
  modalHide() {
    document.getElementById('exampleModal').style.display = 'none';
  }
}
