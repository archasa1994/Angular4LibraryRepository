import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { AppGlobals } from '../global/appGlobals'
import { EmployeeService } from '../employee/employee.service'
import { AlertService } from '../alert/alert.service'

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    private userName: string;
    private password: string;

    constructor(private _router: Router, private _appGlobals: AppGlobals, private _activatedRoute: ActivatedRoute,
        private _employeeService: EmployeeService, private _alertService: AlertService) { }

    onSubmit() {
        this._employeeService.login(this.userName, this.password).subscribe((response) => {
            if (response) {
                localStorage.setItem('currentUser', this.userName);
                //this._appGlobals.setLoginStatus(true);
                let url: string = this._activatedRoute.snapshot.queryParams['returnUrl'];
                this._router.navigate([url ? url : '/home/about/books']);
            }
            else {
                this._alertService.error("Invalid Username or Password!");
            }
        },
            (error) => {
                this._alertService.error("Something went wrong! Please try again later.");
            })
    }

}
