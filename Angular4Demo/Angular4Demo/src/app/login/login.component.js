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
var router_1 = require("@angular/router");
var appGlobals_1 = require("../global/appGlobals");
var employee_service_1 = require("../employee/employee.service");
var alert_service_1 = require("../alert/alert.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _appGlobals, _activatedRoute, _employeeService, _alertService) {
        this._router = _router;
        this._appGlobals = _appGlobals;
        this._activatedRoute = _activatedRoute;
        this._employeeService = _employeeService;
        this._alertService = _alertService;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._employeeService.login(this.userName, this.password).subscribe(function (response) {
            if (response) {
                localStorage.setItem('currentUser', _this.userName);
                //this._appGlobals.setLoginStatus(true);
                var url = _this._activatedRoute.snapshot.queryParams['returnUrl'];
                _this._router.navigate([url ? url : '/home/about/books']);
            }
            else {
                _this._alertService.error("Invalid Username or Password!");
            }
        }, function (error) {
            _this._alertService.error("Something went wrong! Please try again later.");
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-form',
            templateUrl: 'login.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, appGlobals_1.AppGlobals, router_1.ActivatedRoute,
            employee_service_1.EmployeeService, alert_service_1.AlertService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map