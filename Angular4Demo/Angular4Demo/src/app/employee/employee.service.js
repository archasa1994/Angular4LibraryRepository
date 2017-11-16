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
// Import Http & Response from angular HTTP module
var http_1 = require("@angular/http");
// Import Observable from rxjs/Observable
var Observable_1 = require("rxjs/Observable");
// Import the map operator
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/Observable/throw");
var appGlobals_1 = require("../global/appGlobals");
// The @Injectable() decorator is used to inject other dependencies
// into this service. As our service does not have any dependencies
// at the moment, we may remove the @Injectable() decorator and the
// service works exactly the same way. However, Angular recomends
// to always use @Injectable() decorator to ensures consistency
var EmployeeService = /** @class */ (function () {
    function EmployeeService(_http, _appGlobal) {
        this._http = _http;
        this._appGlobal = _appGlobal;
    }
    EmployeeService.prototype.getEmployees = function () {
        // To convert Observable<Response> to Observable<IEmployee[]>
        // we are using the map operator
        return this._http.get(this._appGlobal.baseUrl + '/api/employees/Get')
            .map(function (response) { return response.json(); });
        //.catch(this.handleError);
    };
    EmployeeService.prototype.getEmployeeByCode = function (empCode) {
        return this._http.get(this._appGlobal.baseUrl + '/api/employees/Get/' + empCode)
            .map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.handleError = function (error) {
        //console.error(error);
        return Observable_1.Observable.throw(error);
    };
    EmployeeService.prototype.editEmployee = function (editedEmployee) {
        //var data = Object({ code: code, name: name, gender: gender, annualSalary: salary, dateOfBirth: dob });
        var body = JSON.stringify(editedEmployee);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._appGlobal.baseUrl + '/api/employees/Post', body, options)
            .map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.deleteEmployee = function (empCode) {
        var data = JSON.stringify(empCode);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._appGlobal.baseUrl + '/api/employees/DeleteEmployee', data, options)
            .map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.addNewEmployee = function (name, password, gender, salary, dob) {
        var newEmployee = Object({ name: name, password: password, gender: gender, annualSalary: salary, dateOfBirth: dob });
        var data = JSON.stringify(newEmployee);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._appGlobal.baseUrl + '/api/employees/AddNewEmployee', data, options)
            .map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.login = function (name, password) {
        var loginDetails = Object({ name: name, password: password });
        var data = JSON.stringify(loginDetails);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._appGlobal.baseUrl + '/api/employees/Login', data, options)
            .map(function (response) { return response.json(); });
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, appGlobals_1.AppGlobals])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map