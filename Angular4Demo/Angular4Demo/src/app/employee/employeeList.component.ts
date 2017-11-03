import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { UserPreferencesService } from './userPreferences.service';
import { Router } from '@angular/router';
import { SpinnerService } from '../spinner/spinner.service';
import { AlertService } from '../alert/alert.service'

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']    
})

export class EmployeeListComponent implements OnInit {

    employees: IEmployee[];
    statusMessage: string = 'Loading data. Please wait...';
    isAddNewEmployee: boolean = false;

    // This property keeps track of which radio button is selected
    // We have set the default value to All, so all the employees
    // are displayed in the table by default
    selectedEmployeeCountRadioButton: string = 'All';

    // Inject EmployeeService using the constructor
    // The private variable _employeeService which points to
    // EmployeeService singelton instance is then available
    // throughout this class
    constructor(private _employeeService: EmployeeService, private _userPreferencesService: UserPreferencesService,
        private _router: Router, private _spinnerService: SpinnerService, private _alertService: AlertService) {
    }

    // In ngOnInit() life cycle hook call the getEmployees()
    // service method of EmployeeService using the private
    // variable _employeeService
    ngOnInit() {
        this._spinnerService.show();
        this._employeeService.getEmployees().subscribe((employeesData) => {
            this._spinnerService.hide();
            this.employees = employeesData
        },
            (error) => {
                this._spinnerService.hide();
                alert('Something went wrong. Please try again later.')
            });
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }

    // Depending on which radio button is selected, this method updates
    // selectedEmployeeCountRadioButton property declared above
    // This method is called when the child component (EmployeeCountComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in employeeList.component.html
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    get colour(): string {
        return this._userPreferencesService.colourPreference;
    }

    set colour(value: string) {
        this._userPreferencesService.colourPreference = value;
    }

    createEmployee(): void {
        this.isAddNewEmployee = true;
        //this._router.navigate(['/home/createEmployee']);
    }

    newEmployeeAdded() {
        this.ngOnInit();
        this.isAddNewEmployee = false;
    }

    cancel() {
        this.isAddNewEmployee = false;
    }

    deleteEmployee(empCode: IEmployee): void {
        if (confirm('Do you want to delete this Employee?')) {
            this._spinnerService.show();
            this._employeeService.deleteEmployee(empCode.code)
                .subscribe((result) => {
                    if (result == true) {
                        this._spinnerService.hide();
                        this._alertService.success('Employee deleted successfully.')
                        this.ngOnInit();
                        //this._router.navigate(['/home/employees']);
                    }
                    else {
                        this._spinnerService.hide();
                        this._alertService.error('Employee deletion failed!');
                    }
                },
                (error) => {
                    this._spinnerService.hide();
                    this._alertService.error('Problem with the service. Please try again after sometime');
                });
        }
        else {
            return;
        }
    }
}