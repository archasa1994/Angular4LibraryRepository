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
var spinner_service_1 = require("../spinner/spinner.service");
var alert_service_1 = require("../alert/alert.service");
var CreateEmployeeComponent = /** @class */ (function () {
    function CreateEmployeeComponent(_employeeService, _router, _spinnerService, _alertService) {
        this._employeeService = _employeeService;
        this._router = _router;
        this._spinnerService = _spinnerService;
        this._alertService = _alertService;
        this.isSubmitted = false;
        this.newEmployeeAdded = new core_1.EventEmitter();
        this.cancelAddNewEmployee = new core_1.EventEmitter();
    }
    CreateEmployeeComponent.prototype.onBackButtonClick = function () {
        this.cancelAddNewEmployee.emit('cancel');
        //this._router.navigate(['/home/employees']);
    };
    CreateEmployeeComponent.prototype.addNewEmployee = function (name, password, gender, salary, dob) {
        var _this = this;
        this._spinnerService.show();
        this.isSubmitted = true;
        if (name == '' || password == '' || salary.toString() == '' || dob.toString() == '') {
            this._spinnerService.hide();
            return;
        }
        this._employeeService.addNewEmployee(name, password, gender, salary, dob)
            .subscribe(function (response) {
            _this._spinnerService.hide();
            if (response == true) {
                _this.newEmployeeAdded.emit('success');
                _this._alertService.success('Employee added successfully');
                //this._router.navigate(['/home/employees']);
            }
            else {
                _this._alertService.error("Failed to add new Employee");
            }
        }, function (error) {
            _this._spinnerService.hide();
            _this._alertService.error('Problem with the service. Please try again after sometime');
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CreateEmployeeComponent.prototype, "newEmployeeAdded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CreateEmployeeComponent.prototype, "cancelAddNewEmployee", void 0);
    CreateEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'create-employee',
            templateUrl: 'app/employee/createEmployee.component.html'
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.Router, spinner_service_1.SpinnerService,
            alert_service_1.AlertService])
    ], CreateEmployeeComponent);
    return CreateEmployeeComponent;
}());
exports.CreateEmployeeComponent = CreateEmployeeComponent;
//# sourceMappingURL=createEmployee.component.js.map