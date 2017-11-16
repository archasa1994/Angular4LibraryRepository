import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
// Import Http & Response from angular HTTP module
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
// Import Observable from rxjs/Observable
import { Observable } from 'rxjs/Observable';
// Import the map operator
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { AppGlobals } from '../global/appGlobals'


// The @Injectable() decorator is used to inject other dependencies
// into this service. As our service does not have any dependencies
// at the moment, we may remove the @Injectable() decorator and the
// service works exactly the same way. However, Angular recomends
// to always use @Injectable() decorator to ensures consistency
@Injectable()
export class EmployeeService {
    constructor(private _http: Http, private _appGlobal: AppGlobals) { }

    getEmployees(): Observable<IEmployee[]> {

        // To convert Observable<Response> to Observable<IEmployee[]>
        // we are using the map operator
        return this._http.get(this._appGlobal.baseUrl+'/api/employees/Get')
            .map((response: Response) => <IEmployee[]>response.json());
            //.catch(this.handleError);
    }

    getEmployeeByCode(empCode: string): Observable<IEmployee> {
        return this._http.get(this._appGlobal.baseUrl +'/api/employees/Get/' + empCode)
            .map((response: Response) => <IEmployee>response.json());
    }

    handleError(error: Response) {
        //console.error(error);
        return Observable.throw(error);
    }

    editEmployee(editedEmployee: any): Observable<boolean> {
        //var data = Object({ code: code, name: name, gender: gender, annualSalary: salary, dateOfBirth: dob });
        var body = JSON.stringify(editedEmployee);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._appGlobal.baseUrl +'/api/employees/Post', body, options)
            .map((response: Response) => <boolean>response.json());
    }

    deleteEmployee(empCode: string): Observable<boolean> {
        var data = JSON.stringify(empCode);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._appGlobal.baseUrl +'/api/employees/DeleteEmployee', data, options)
            .map((response: Response) => <boolean>response.json());
    }

    addNewEmployee(name: string, password: string, gender: string, salary: number, dob: Date): Observable<boolean> {
        var newEmployee = Object({ name: name, password: password, gender: gender, annualSalary: salary, dateOfBirth: dob });
        var data = JSON.stringify(newEmployee);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._appGlobal.baseUrl +'/api/employees/AddNewEmployee', data, options)
            .map((response: Response) => <boolean>response.json());
    }

    login(name: string, password: string): Observable<boolean> {
        var loginDetails = Object({ name: name, password: password });
        var data = JSON.stringify(loginDetails);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._appGlobal.baseUrl +'/api/employees/Login', data, options)
            .map((response: Response) => <boolean>response.json());
    }

    //getEmployees(): IEmployee[] {
    //    return [
    //        {
    //            code: 'emp101', name: 'Tom', gender: 'Male',
    //            annualSalary: 5500, dateOfBirth: '6/25/1988'
    //        },
    //        {
    //            code: 'emp102', name: 'Alex', gender: 'Male',
    //            annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    //        },
    //        {
    //            code: 'emp103', name: 'Mike', gender: 'Male',
    //            annualSalary: 5900, dateOfBirth: '12/8/1979'
    //        },
    //        {
    //            code: 'emp104', name: 'Mary', gender: 'Female',
    //            annualSalary: 6500.826, dateOfBirth: '10/14/1980'
    //        },
    //        {
    //            code: 'emp105', name: 'Nancy', gender: 'Female',
    //            annualSalary: 6700.826, dateOfBirth: '12/15/1982'
    //        },
    //        {
    //            code: 'emp106', name: 'Steve', gender: 'Male',
    //            annualSalary: 7700.481, dateOfBirth: '11/18/1979'
    //        },
    //    ];
    //}
}