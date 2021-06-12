import { SigninComponent } from '@/auth/signin/signin.component';
import { SignupComponent } from '@/auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieBComponent } from './movie-b/movie-b.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'trangchitiet/:movieId',
        component: MovieDetailComponent,
      },
      {
        path: 'trangdatghe',
        component: MovieBComponent,
      },
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
