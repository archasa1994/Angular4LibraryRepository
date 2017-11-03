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
var user_1 = require("./user");
var user_service_1 = require("./user.service");
var spinner_service_1 = require("../spinner/spinner.service");
var router_2 = require("@angular/router");
var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(_activatedRoute, _router, _userService, _spinnerService) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._userService = _userService;
        this._spinnerService = _spinnerService;
        this.userDetails = new user_1.User;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._spinnerService.show();
        var id = this._activatedRoute.snapshot.params['id'];
        this._userService.getUserDetailsById(id).subscribe(function (response) {
            _this._spinnerService.hide();
            _this.userDetails = response;
        }, function (error) {
            _this._spinnerService.hide();
            alert('Something went wrong. Please try again later!');
        });
    };
    UserDetailsComponent = __decorate([
        core_1.Component({
            selector: 'user-details',
            templateUrl: 'app/user/userDetails.component.html'
        }),
        __metadata("design:paramtypes", [router_2.ActivatedRoute, router_1.Router, user_service_1.UserService, spinner_service_1.SpinnerService])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());
exports.UserDetailsComponent = UserDetailsComponent;
//# sourceMappingURL=userDetails.component.js.map