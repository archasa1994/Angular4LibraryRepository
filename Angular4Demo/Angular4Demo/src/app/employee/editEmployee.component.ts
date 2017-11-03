import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'edit-employee',
    templateUrl: 'app/employee/editEmployee.component.html',
    styleUrls: ['app/employee/editEmployee.component.css']
})

export class EditEmployeeComponent {

    constructor(private _employeeService: EmployeeService, private _activatedRoute: ActivatedRoute, private _router: Router) { }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
    }
}