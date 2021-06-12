"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var admin_layout_component_1 = require("./admin-layout/admin-layout.component");
var users_component_1 = require("./users/users.component");
var quanlyphim_component_1 = require("./quanlyphim/quanlyphim.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var router_1 = require("@angular/router");
var header_component_1 = require("./header/header.component");
var main_admin_component_1 = require("./main-admin/main-admin.component");
var lichchieu_component_1 = require("./lichchieu/lichchieu.component");
var chart_component_1 = require("./chart/chart.component");
var ng2_charts_1 = require("ng2-charts");
var line_chart_component_1 = require("./line-chart/line-chart.component");
var user_add_component_1 = require("./user-add/user-add.component");
var user_edit_component_1 = require("./user-edit/user-edit.component");
var forms_1 = require("@angular/forms");
var pipe_module_1 = require("@/pipe/pipe.module");
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            declarations: [
                admin_layout_component_1.AdminLayoutComponent,
                users_component_1.UsersComponent,
                quanlyphim_component_1.QuanlyphimComponent,
                sidebar_component_1.SidebarComponent,
                header_component_1.HeaderComponent,
                main_admin_component_1.MainAdminComponent,
                lichchieu_component_1.LichchieuComponent,
                chart_component_1.ChartComponent,
                line_chart_component_1.LineChartComponent,
                user_add_component_1.UserAddComponent,
                user_edit_component_1.UserEditComponent,
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                ng2_charts_1.ChartsModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                pipe_module_1.PipeModule,
            ],
            exports: [
                admin_layout_component_1.AdminLayoutComponent,
                users_component_1.UsersComponent,
                quanlyphim_component_1.QuanlyphimComponent,
                main_admin_component_1.MainAdminComponent,
                sidebar_component_1.SidebarComponent,
                header_component_1.HeaderComponent,
                lichchieu_component_1.LichchieuComponent,
                chart_component_1.ChartComponent,
                line_chart_component_1.LineChartComponent,
                user_add_component_1.UserAddComponent,
                user_edit_component_1.UserEditComponent,
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
