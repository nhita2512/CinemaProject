import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './main/admin/admin-layout/admin-layout.component';
import { LichchieuComponent } from './main/admin/lichchieu/lichchieu.component';
import { MainAdminComponent } from './main/admin/main-admin/main-admin.component';
import { QuanlyphimComponent } from './main/admin/quanlyphim/quanlyphim.component';
import { UserAddComponent } from './main/admin/user-add/user-add.component';
import { UserEditComponent } from './main/admin/user-edit/user-edit.component';
import { UsersComponent } from './main/admin/users/users.component';
import { HomeModule } from './main/home/home.module';
import { AdminGuard } from '../app/core/guards/admin.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomeModule,
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: MainAdminComponent },
      { path: 'quanlyphim', component: QuanlyphimComponent },
      { path: 'quanlyuser', component: UsersComponent },
      { path: 'adduser', component: UserAddComponent },
      { path: 'edituser/:id', component: UserEditComponent },
      { path: 'quanlyRap', component: LichchieuComponent },
    ],
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
