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
var alert_1 = require("./alert");
var alert_service_1 = require("./alert.service");
var AlertComponent = /** @class */ (function () {
    function AlertComponent(_alertService) {
        this._alertService = _alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                // clear alerts when an empty alert is received
                _this.alert = null;
                return;
            }
            else {
                _this.alert = alert;
            }
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alert = null;
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert)
            return;
        switch (alert.type) {
            case alert_1.AlertType.Success:
                return 'alert alert-success';
            case alert_1.AlertType.Error:
                return 'alert alert-danger';
            case alert_1.AlertType.Info:
                return 'alert alert-info';
            case alert_1.AlertType.Warning:
                return 'alert alert-warning';
        }
    };
    AlertComponent = __decorate([
        core_1.Component({
            selector: 'alert',
            templateUrl: 'app/alert/alert.component.html'
        }),
        __metadata("design:paramtypes", [alert_service_1.AlertService])
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;
//# sourceMappingURL=alert.component.js.map