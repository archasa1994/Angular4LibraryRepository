import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SpinnerService } from '../spinner/spinner.service';


@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeComponent {
    employee: IEmployee;
    statusMessage: string = 'Loading data. Please wait...';
    showDetails: boolean = false;
    isEdit: boolean = false;
    isSubmitted: boolean = false;

    constructor(private _employeeService: EmployeeService, private _activatedRoute: ActivatedRoute, private _router: Router, private _spinnerService: SpinnerService) { }

    ngOnInit() {
        this._spinnerService.show();
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode)
            .subscribe((employeeData) => {
                this._spinnerService.hide();
                if (employeeData == null) {
                    this.statusMessage = 'Employee with the specified Employee Code does not exist';
                }
                else {
                    this.employee = employeeData
                }
            },
            (error) => {
                this._spinnerService.hide();
                this.statusMessage = 'Problem with the service. Please try again after sometime';
            });
    }

    onBackButtonClick(): void {
        this._router.navigate(['/home/employees']);
    }

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }

    editEmployee(code: string, name: string, gender: string, salary: number, dob: Date): void {
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
                .subscribe((result) => {
                    if (result == true) {
                        this._spinnerService.hide();
                        this.isEdit = false;
                        this.employee = editedEmployee;
                    }
                    else {
                        this._spinnerService.hide();
                        alert(['Employee updation failed!']);
                    }
                },
                (error) => {
                    this._spinnerService.hide();
                    alert(['Problem with the service. Please try again after sometime']);
                });
        }
    }

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

    cancelEdit(): void {
        this._spinnerService.hide();
        this.isEdit = false;
    }
}