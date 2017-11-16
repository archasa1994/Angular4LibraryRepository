import { Component } from '@angular/core'
import { SpinnerService } from './spinner/spinner.service'
import { SpinnerComponent } from './spinner/spinner.component'
import { Router } from '@angular/router'
import { AppGlobals } from './global/appGlobals'

@Component({
    selector: 'my-app',    
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']    
})
export class AppComponent {
    pageHeader: string = 'Employee Details';    
    private spinTimeout: number = 1;
    isLoggedIn: boolean;

    constructor(private spinnerService: SpinnerService, private _router: Router, private _appGlobals: AppGlobals) {
        this._appGlobals.isUserLoggedIn.subscribe(value => this.isLoggedIn = value);
    }

    public spin(event: MouseEvent): void {
        let timeoutMs = this.spinTimeout * 1000;
        console.log(`Showing spinner for ${timeoutMs} milliseconds`);
        event.preventDefault();
        this.spinnerService.show();
        setTimeout(() => {
            this.spinnerService.hide();
        }, timeoutMs);
    } 

    public options = {
        timeOut: 5000,
        lastOnBottom: true
    };

    create() {
        alert("success");
        //this._service.success('success', 'success');
        //this._service.success('bla', 'example')
    }      
}
