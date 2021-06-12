"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PipeModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var shortcut_pipe_1 = require("./shortcut.pipe");
var filter_pipe_1 = require("./filter.pipe");
var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        core_1.NgModule({
            declarations: [shortcut_pipe_1.ShortcutPipe, filter_pipe_1.FilterPipe],
            imports: [common_1.CommonModule],
            exports: [shortcut_pipe_1.ShortcutPipe, filter_pipe_1.FilterPipe]
        })
    ], PipeModule);
    return PipeModule;
}());
exports.PipeModule = PipeModule;
