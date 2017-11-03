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
var user_service_1 = require("./user.service");
var UsersComponent = /** @class */ (function () {
    function UsersComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.isClicked = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isClicked = false;
        this._userService.getUsers().subscribe(function (result) { return _this.users = result; });
    };
    UsersComponent.prototype.addUser = function () {
        this.isClicked = true;
    };
    UsersComponent.prototype.cancel = function () {
        this.isClicked = false;
    };
    UsersComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/user/users.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map