import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NewsComponent } from './news/news.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieBComponent } from './movie-b/movie-b.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from '@/pipe/pipe.module';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { GheComponent } from './ghe/ghe.component';
import { DsGheComponent } from './ds-ghe/ds-ghe.component';
import { EditGheComponent } from './edit-ghe/edit-ghe.component';
import { ModalModule } from './-modal/-modal.module';
import { AuthModule } from '@/auth/auth.module';
import { TimPhimComponent } from './tim-phim/tim-phim.component';
import { HeThongRapComponent } from './he-thong-rap/he-thong-rap.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { ReviewComponent } from './review/review.component';
import { ShowtimeComponent } from './showtime/showtime.component';
import { ModalWidowComponent } from './modal-widow/modal-widow.component';
@NgModule({
  declarations: [
    HomeComponent,
    MovieListComponent,
    NewsComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    MovieItemComponent,
    HomepageComponent,
    MovieDetailComponent,
    MovieBComponent,
    MobileAppComponent,
    GheComponent,
    DsGheComponent,
    EditGheComponent,
    TimPhimComponent,
    HeThongRapComponent,
    ScrollToTopComponent,
    ReviewComponent,
    ShowtimeComponent,
    ModalWidowComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    ModalModule,
    AuthModule,
    SlickCarouselModule,
  ],
  exports: [
    HomeComponent,
    MovieListComponent,
    NewsComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    MovieItemComponent,
    HomepageComponent,
    MovieDetailComponent,
    MovieBComponent,
    GheComponent,
    DsGheComponent,
    EditGheComponent,
    TimPhimComponent,
    HeThongRapComponent,
    ScrollToTopComponent,
    ReviewComponent,
    ShowtimeComponent,
    ModalWidowComponent,
  ],
})
export class HomeModule {}
