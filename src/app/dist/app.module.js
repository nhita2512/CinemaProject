"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var home_module_1 = require("./main/home/home.module");
var admin_module_1 = require("./main/admin/admin.module");
var auth_module_1 = require("./auth/auth.module");
// Import your library
var _modal_module_1 = require("./main/home/-modal/-modal.module");
var platform_browser_1 = require("@angular/platform-browser");
// Animation
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var auth_interceptor_1 = require("../app/core/interceptors/auth.interceptor");
var alert_component_1 = require("./shared/alert/alert.component");
var dialog_component_1 = require("./shared/dialog/dialog.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, alert_component_1.AlertComponent, dialog_component_1.DialogComponent],
            imports: [
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                router_1.RouterModule,
                home_module_1.HomeModule,
                admin_module_1.AdminModule,
                _modal_module_1.ModalModule,
                platform_browser_1.BrowserModule,
                auth_module_1.AuthModule,
                ng_bootstrap_1.NgbModule,
            ],
            providers: [auth_interceptor_1.AuthInterceptor],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
