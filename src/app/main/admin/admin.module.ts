import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UsersComponent } from './users/users.component';
import { QuanlyphimComponent } from './quanlyphim/quanlyphim.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { LichchieuComponent } from './lichchieu/lichchieu.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from '@/pipe/pipe.module';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    UsersComponent,
    QuanlyphimComponent,

    SidebarComponent,
    HeaderComponent,
    MainAdminComponent,
    LichchieuComponent,
    ChartComponent,
    LineChartComponent,
    UserAddComponent,
    UserEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
    PipeModule,
  ],
  exports: [
    AdminLayoutComponent,
    UsersComponent,
    QuanlyphimComponent,
    MainAdminComponent,
    SidebarComponent,
    HeaderComponent,
    LichchieuComponent,
    ChartComponent,
    LineChartComponent,
    UserAddComponent,
    UserEditComponent,
  ],
})
export class AdminModule {}
