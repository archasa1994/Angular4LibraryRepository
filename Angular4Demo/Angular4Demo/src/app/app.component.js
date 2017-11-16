"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var spinner_service_1 = require("./spinner/spinner.service");
var router_1 = require("@angular/router");
var appGlobals_1 = require("./global/appGlobals");
var AppComponent = /** @class */ (function () {
    function AppComponent(spinnerService, _router, _appGlobals) {
        var _this = this;
        this.spinnerService = spinnerService;
        this._router = _router;
        this._appGlobals = _appGlobals;
        this.pageHeader = 'Employee Details';
        this.spinTimeout = 1;
        this.options = {
            timeOut: 5000,
            lastOnBottom: true
        };
        this._appGlobals.isUserLoggedIn.subscribe(function (value) { return _this.isLoggedIn = value; });
    }
    AppComponent.prototype.spin = function (event) {
        var _this = this;
        var timeoutMs = this.spinTimeout * 1000;
        console.log("Showing spinner for " + timeoutMs + " milliseconds");
        event.preventDefault();
        this.spinnerService.show();
        setTimeout(function () {
            _this.spinnerService.hide();
        }, timeoutMs);
    };
    AppComponent.prototype.create = function () {
        alert("success");
        //this._service.success('success', 'success');
        //this._service.success('bla', 'example')
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css']
        }),
        __metadata("design:paramtypes", [spinner_service_1.SpinnerService, router_1.Router, appGlobals_1.AppGlobals])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map