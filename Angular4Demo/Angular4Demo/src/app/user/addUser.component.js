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
var user_1 = require("./user");
var user_service_1 = require("./user.service");
var alert_service_1 = require("../alert/alert.service");
var ng2_toasty_1 = require("ng2-toasty");
var appGlobals_1 = require("../global/appGlobals");
var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(_userService, _alertService, _toastyService, _appGlobal) {
        this._userService = _userService;
        this._alertService = _alertService;
        this._toastyService = _toastyService;
        this._appGlobal = _appGlobal;
        this.user = new user_1.User;
        this.isSubmitted = false;
        this.newUserAdded = new core_1.EventEmitter();
        this.cancelClicked = new core_1.EventEmitter();
    }
    AddUserComponent.prototype.cancel = function () {
        this.cancelClicked.emit('cancel');
    };
    AddUserComponent.prototype.addNewUser = function () {
        var _this = this;
        if (this.user.UserName === undefined || this.user.Email === undefined) {
            this.isSubmitted = true;
            return;
        }
        this._userService.addNewUser(this.user).subscribe(function (response) {
            if (response) {
                _this.newUserAdded.emit('success');
                //this._alertService.success('User added successfully!');                
                _this._toastyService.success(_this._appGlobal.getSuccessToast("User added successfully!"));
            }
            else {
                //this._alertService.error('Failed to add user!');                
                _this._toastyService.error(_this._appGlobal.getErrorToast("Failed to Add User!"));
            }
        }, function (error) {
            _this._toastyService.error(_this._appGlobal.getFailureToast());
            //this._alertService.error('Something went wrong. Please try again later!');
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AddUserComponent.prototype, "newUserAdded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AddUserComponent.prototype, "cancelClicked", void 0);
    AddUserComponent = __decorate([
        core_1.Component({
            selector: 'add-user',
            templateUrl: 'app/user/addUser.component.html'
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, alert_service_1.AlertService, ng2_toasty_1.ToastyService, appGlobals_1.AppGlobals])
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=addUser.component.js.map