"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalWidowComponent = void 0;
var core_1 = require("@angular/core");
var ModalWidowComponent = /** @class */ (function () {
    function ModalWidowComponent() {
    }
    ModalWidowComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.showModal();
        }, 2000);
    };
    ModalWidowComponent.prototype.showModal = function () {
        document.getElementById('modal-window').style.display = 'block';
    };
    ModalWidowComponent.prototype.hideModal = function () {
        document.getElementById('modal-window').style.display = 'none';
    };
    ModalWidowComponent = __decorate([
        core_1.Component({
            selector: 'app-modal-widow',
            templateUrl: './modal-widow.component.html',
            styleUrls: ['./modal-widow.component.scss']
        })
    ], ModalWidowComponent);
    return ModalWidowComponent;
}());
exports.ModalWidowComponent = ModalWidowComponent;
