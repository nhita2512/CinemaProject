"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LichchieuComponent = void 0;
var core_1 = require("@angular/core");
var LichchieuComponent = /** @class */ (function () {
    function LichchieuComponent(moviesv) {
        this.moviesv = moviesv;
        this.listHeThongRap = [];
    }
    LichchieuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.moviesv.getHeThongRap().subscribe({
            next: function (result) {
                console.log(result);
                _this.listHeThongRap = result;
            },
            error: function (err) {
                console.log(err);
            }
        });
    };
    LichchieuComponent = __decorate([
        core_1.Component({
            selector: 'app-lichchieu',
            templateUrl: './lichchieu.component.html',
            styleUrls: ['./lichchieu.component.scss']
        })
    ], LichchieuComponent);
    return LichchieuComponent;
}());
exports.LichchieuComponent = LichchieuComponent;
