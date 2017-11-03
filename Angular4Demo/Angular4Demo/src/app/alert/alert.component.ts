import { Component, OnInit } from '@angular/core'
import { Alert, AlertType } from './alert'
import { AlertService } from './alert.service'

@Component({
    selector: 'alert',
    templateUrl: 'app/alert/alert.component.html'
})

export class AlertComponent {
    alert: Alert;

    constructor(private _alertService: AlertService) { }

    ngOnInit() {
        this._alertService.getAlert().subscribe((alert: Alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alert = null;
                return;
            }
            else {
                this.alert = alert;
            }
        });
    }

    removeAlert(alert: Alert) {
        this.alert = null;        
    }

    cssClass(alert: Alert) {
        if (!alert)
            return;
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    }
}