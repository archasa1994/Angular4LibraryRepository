"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/share");
require("rxjs/add/operator/startWith");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var AppGlobals = /** @class */ (function () {
    function AppGlobals() {
        this.baseUrl = 'http://localhost:57445';
        this.isUserLoggedIn = new BehaviorSubject_1.BehaviorSubject(false);
    }
    AppGlobals.prototype.setLoginStatus = function (isLoggedIn) {
        this.isUserLoggedIn.next(isLoggedIn);
    };
    AppGlobals.prototype.getSuccessToast = function (message) {
        var toastOptions = {
            title: "Success",
            msg: message,
            showClose: true,
            timeout: 3000,
            theme: 'bootstrap'
        };
        return toastOptions;
    };
    AppGlobals.prototype.getErrorToast = function (message) {
        var toastOptions = {
            title: "Error",
            msg: message,
            showClose: true,
            timeout: 3000,
            theme: 'bootstrap'
        };
        return toastOptions;
    };
    AppGlobals.prototype.getFailureToast = function () {
        var toastOptions = {
            title: "Error",
            msg: "Something went wrong.Please try again later!",
            showClose: true,
            timeout: 3000,
            theme: 'bootstrap'
        };
        return toastOptions;
    };
    AppGlobals = __decorate([
        core_1.Injectable()
    ], AppGlobals);
    return AppGlobals;
}());
exports.AppGlobals = AppGlobals;
//# sourceMappingURL=appGlobals.js.map