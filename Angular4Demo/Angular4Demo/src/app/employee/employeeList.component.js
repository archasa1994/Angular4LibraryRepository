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
var userPreferences_service_1 = require("./userPreferences.service");
var router_1 = require("@angular/router");
var spinner_service_1 = require("../spinner/spinner.service");
var ng2_toasty_1 = require("ng2-toasty");
var appGlobals_1 = require("../global/appGlobals");
var EmployeeListComponent = /** @class */ (function () {
    // Inject EmployeeService using the constructor
    // The private variable _employeeService which points to
    // EmployeeService singelton instance is then available
    // throughout this class
    function EmployeeListComponent(_employeeService, _userPreferencesService, _router, _spinnerService, _toastyService, _appGlobal) {
        this._employeeService = _employeeService;
        this._userPreferencesService = _userPreferencesService;
        this._router = _router;
        this._spinnerService = _spinnerService;
        this._toastyService = _toastyService;
        this._appGlobal = _appGlobal;
        this.statusMessage = 'Loading data. Please wait...';
        this.isAddNewEmployee = false;
        // This property keeps track of which radio button is selected
        // We have set the default value to All, so all the employees
        // are displayed in the table by default
        this.selectedEmployeeCountRadioButton = 'All';
    }
    // In ngOnInit() life cycle hook call the getEmployees()
    // service method of EmployeeService using the private
    // variable _employeeService
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._spinnerService.show();
        this._employeeService.getEmployees().subscribe(function (employeesData) {
            _this._spinnerService.hide();
            _this.employees = employeesData;
        }, function (error) {
            _this._spinnerService.hide();
            alert('Something went wrong. Please try again later.');
        });
    };
    EmployeeListComponent.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getMaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Male'; }).length;
    };
    EmployeeListComponent.prototype.getFemaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Female'; }).length;
    };
    // Depending on which radio button is selected, this method updates
    // selectedEmployeeCountRadioButton property declared above
    // This method is called when the child component (EmployeeCountComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in employeeList.component.html
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    Object.defineProperty(EmployeeListComponent.prototype, "colour", {
        get: function () {
            return this._userPreferencesService.colourPreference;
        },
        set: function (value) {
            this._userPreferencesService.colourPreference = value;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeListComponent.prototype.createEmployee = function () {
        this.isAddNewEmployee = true;
        //this._router.navigate(['/home/createEmployee']);
    };
    EmployeeListComponent.prototype.newEmployeeAdded = function () {
        this.ngOnInit();
        this.isAddNewEmployee = false;
    };
    EmployeeListComponent.prototype.cancel = function () {
        this.isAddNewEmployee = false;
    };
    EmployeeListComponent.prototype.deleteEmployee = function (empCode) {
        var _this = this;
        if (confirm('Do you want to delete this Employee?')) {
            this._spinnerService.show();
            this._employeeService.deleteEmployee(empCode.code)
                .subscribe(function (result) {
                if (result == true) {
                    _this._spinnerService.hide();
                    _this._toastyService.success(_this._appGlobal.getSuccessToast("Employee deleted successfully!"));
                    //this._toastyService.success('Employee deleted successfully.')
                    _this.ngOnInit();
                    //this._router.navigate(['/home/employees']);
                }
                else {
                    _this._spinnerService.hide();
                    _this._toastyService.error(_this._appGlobal.getErrorToast("Employee deletion failed!"));
                    //this._toastyService.error('Employee deletion failed!');
                }
            }, function (error) {
                _this._spinnerService.hide();
                _this._toastyService.error(_this._appGlobal.getFailureToast());
                //this._toastyService.error('Problem with the service. Please try again after sometime');
            });
        }
        else {
            return;
        }
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employeeList.component.css']
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, userPreferences_service_1.UserPreferencesService,
            router_1.Router, spinner_service_1.SpinnerService, ng2_toasty_1.ToastyService, appGlobals_1.AppGlobals])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map