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
var spinner_service_1 = require("../spinner/spinner.service");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(_employeeService, _activatedRoute, _router, _spinnerService) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._spinnerService = _spinnerService;
        this.statusMessage = 'Loading data. Please wait...';
        this.showDetails = false;
        this.isEdit = false;
        this.isSubmitted = false;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._spinnerService.show();
        var empCode = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode)
            .subscribe(function (employeeData) {
            _this._spinnerService.hide();
            if (employeeData == null) {
                _this.statusMessage = 'Employee with the specified Employee Code does not exist';
            }
            else {
                _this.employee = employeeData;
            }
        }, function (error) {
            _this._spinnerService.hide();
            _this.statusMessage = 'Problem with the service. Please try again after sometime';
        });
    };
    EmployeeComponent.prototype.onBackButtonClick = function () {
        this._router.navigate(['/home/employees']);
    };
    EmployeeComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    EmployeeComponent.prototype.editEmployee = function (code, name, gender, salary, dob) {
        var _this = this;
        if (this.isEdit == false) {
            this.isEdit = true;
            return;
        }
        else {
            this._spinnerService.show();
            this.isSubmitted = true;
            if (name == '' || salary.toString() == "" || dob.toString() == '') {
                this._spinnerService.hide();
                return;
            }
            var editedEmployee = Object({ code: code, name: name, gender: gender, annualSalary: salary, dateOfBirth: dob });
            this._employeeService.editEmployee(editedEmployee)
                .subscribe(function (result) {
                if (result == true) {
                    _this._spinnerService.hide();
                    _this.isEdit = false;
                    _this.employee = editedEmployee;
                }
                else {
                    _this._spinnerService.hide();
                    alert(['Employee updation failed!']);
                }
            }, function (error) {
                _this._spinnerService.hide();
                alert(['Problem with the service. Please try again after sometime']);
            });
        }
    };
    //deleteEmployee(empCode: IEmployee): void {
    //    if (confirm('Do you want to delete this Employee?')) {
    //        this._spinnerService.show();
    //        this._employeeService.deleteEmployee(empCode.code)
    //            .subscribe((result) => {
    //                if (result == true) {
    //                    this._spinnerService.hide();
    //                    this._router.navigate(['/home/employees']);
    //                }
    //                else {
    //                    this._spinnerService.hide();
    //                    alert(['Employee deletion failed!']);
    //                }
    //            },
    //            (error) => {
    //                this._spinnerService.hide();
    //                alert(['Problem with the service. Please try again after sometime']);
    //            });
    //    }
    //    else {
    //        return;
    //    }
    //}
    EmployeeComponent.prototype.cancelEdit = function () {
        this._spinnerService.hide();
        this.isEdit = false;
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'my-employee',
            templateUrl: 'app/employee/employee.component.html',
            styleUrls: ['app/employee/employee.component.css']
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.ActivatedRoute, router_2.Router, spinner_service_1.SpinnerService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map