import { Component, Output, EventEmitter } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import { SpinnerService } from '../spinner/spinner.service';
import { AlertService } from '../alert/alert.service';


@Component({
    selector: 'create-employee',
    templateUrl: 'app/employee/createEmployee.component.html'    
})

export class CreateEmployeeComponent {

    isSubmitted: boolean = false;
    constructor(private _employeeService: EmployeeService, private _router: Router, private _spinnerService: SpinnerService,
        private _alertService: AlertService) { }

    @Output()
    newEmployeeAdded: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    cancelAddNewEmployee: EventEmitter<string> = new EventEmitter<string>();

    onBackButtonClick(): void {
        this.cancelAddNewEmployee.emit('cancel');
        //this._router.navigate(['/home/employees']);
    }

    addNewEmployee(name: string, password: string, gender: string, salary: number, dob: Date) {
        this._spinnerService.show();
        this.isSubmitted = true;
        if (name == '' || password == '' || salary.toString() == '' || dob.toString() == '') {
            this._spinnerService.hide();
            return;
        }
        this._employeeService.addNewEmployee(name, password, gender, salary, dob)
            .subscribe((response) => {
                this._spinnerService.hide();
                if (response == true) {
                    this.newEmployeeAdded.emit('success');
                    this._alertService.success('Employee added successfully');                                
                    //this._router.navigate(['/home/employees']);
                }
                else {
                    this._alertService.error("Failed to add new Employee");
                }
            },
            (error) => {
                this._spinnerService.hide();
                this._alertService.error('Problem with the service. Please try again after sometime');
            });
    }

}