"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var home_component_1 = require("./home.component");
var movie_list_component_1 = require("./movie-list/movie-list.component");
var news_component_1 = require("./news/news.component");
var home_routing_module_1 = require("./home-routing.module");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var slider_component_1 = require("./slider/slider.component");
var ngx_owl_carousel_o_1 = require("ngx-owl-carousel-o");
var movie_item_component_1 = require("./movie-item/movie-item.component");
var homepage_component_1 = require("./homepage/homepage.component");
var movie_detail_component_1 = require("./movie-detail/movie-detail.component");
var movie_b_component_1 = require("./movie-b/movie-b.component");
var forms_1 = require("@angular/forms");
var pipe_module_1 = require("@/pipe/pipe.module");
var mobile_app_component_1 = require("./mobile-app/mobile-app.component");
var ghe_component_1 = require("./ghe/ghe.component");
var ds_ghe_component_1 = require("./ds-ghe/ds-ghe.component");
var edit_ghe_component_1 = require("./edit-ghe/edit-ghe.component");
var _modal_module_1 = require("./-modal/-modal.module");
var auth_module_1 = require("@/auth/auth.module");
var tim_phim_component_1 = require("./tim-phim/tim-phim.component");
var he_thong_rap_component_1 = require("./he-thong-rap/he-thong-rap.component");
var ngx_slick_carousel_1 = require("ngx-slick-carousel");
var scroll_to_top_component_1 = require("./scroll-to-top/scroll-to-top.component");
var review_component_1 = require("./review/review.component");
var showtime_component_1 = require("./showtime/showtime.component");
var modal_widow_component_1 = require("./modal-widow/modal-widow.component");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            declarations: [
                home_component_1.HomeComponent,
                movie_list_component_1.MovieListComponent,
                news_component_1.NewsComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                slider_component_1.SliderComponent,
                movie_item_component_1.MovieItemComponent,
                homepage_component_1.HomepageComponent,
                movie_detail_component_1.MovieDetailComponent,
                movie_b_component_1.MovieBComponent,
                mobile_app_component_1.MobileAppComponent,
                ghe_component_1.GheComponent,
                ds_ghe_component_1.DsGheComponent,
                edit_ghe_component_1.EditGheComponent,
                tim_phim_component_1.TimPhimComponent,
                he_thong_rap_component_1.HeThongRapComponent,
                scroll_to_top_component_1.ScrollToTopComponent,
                review_component_1.ReviewComponent,
                showtime_component_1.ShowtimeComponent,
                modal_widow_component_1.ModalWidowComponent,
            ],
            imports: [
                common_1.CommonModule,
                home_routing_module_1.HomeRoutingModule,
                ngx_owl_carousel_o_1.CarouselModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                pipe_module_1.PipeModule,
                _modal_module_1.ModalModule,
                auth_module_1.AuthModule,
                ngx_slick_carousel_1.SlickCarouselModule,
            ],
            exports: [
                home_component_1.HomeComponent,
                movie_list_component_1.MovieListComponent,
                news_component_1.NewsComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                slider_component_1.SliderComponent,
                movie_item_component_1.MovieItemComponent,
                homepage_component_1.HomepageComponent,
                movie_detail_component_1.MovieDetailComponent,
                movie_b_component_1.MovieBComponent,
                ghe_component_1.GheComponent,
                ds_ghe_component_1.DsGheComponent,
                edit_ghe_component_1.EditGheComponent,
                tim_phim_component_1.TimPhimComponent,
                he_thong_rap_component_1.HeThongRapComponent,
                scroll_to_top_component_1.ScrollToTopComponent,
                review_component_1.ReviewComponent,
                showtime_component_1.ShowtimeComponent,
                modal_widow_component_1.ModalWidowComponent,
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
