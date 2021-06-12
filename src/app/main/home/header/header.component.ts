import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentUser: any = null;
  checked: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Theo dõi biến currentUser trong authService
    this.authService.currentUser.subscribe({
      next: (data) => {
        this.currentUser = data;
      },
    });
  }
  signOut() {
    this.currentUser = !this.currentUser;
    alert('Are you sure to sign out?');
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
  showDropDown() {
    this.checked = !this.checked;
  }
}
