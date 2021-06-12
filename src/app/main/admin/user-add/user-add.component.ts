import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NguoidungService } from '../../../core/service/nguoidung.service';
import { NguoiDung } from '@/core/model/ngouoidung';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  @Input() userList: NguoiDung[] = [];

  constructor(public router: Router, public userService: NguoidungService) {}

  ngOnInit(): void {}
}
