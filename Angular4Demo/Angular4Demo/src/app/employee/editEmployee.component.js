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
var employee_service_1 = require("./employee.service");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var EditEmployeeComponent = /** @class */ (function () {
    function EditEmployeeComponent(_employeeService, _activatedRoute, _router) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
    }
    EditEmployeeComponent.prototype.ngOnInit = function () {
        var empCode = this._activatedRoute.snapshot.params['code'];
    };
    EditEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'edit-employee',
            templateUrl: 'app/employee/editEmployee.component.html',
            styleUrls: ['app/employee/editEmployee.component.css']
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.ActivatedRoute, router_2.Router])
    ], EditEmployeeComponent);
    return EditEmployeeComponent;
}());
exports.EditEmployeeComponent = EditEmployeeComponent;
//# sourceMappingURL=editEmployee.component.js.map