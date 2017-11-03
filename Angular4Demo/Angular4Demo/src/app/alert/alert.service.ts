import { Injectable } from '@angular/core'
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Alert, AlertType } from './alert'

@Injectable()
export class AlertService {
    private subject = new Subject<Alert>();
    private keepAfterRouteChange: boolean = false;

    constructor(private _router: Router) {
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        _router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange)
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
            }
            else {
                // clear alert messages
                this.clear();
            }
        });
    }

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    success(message: string, keepAfterrouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterrouteChange);
    }

    error(message: string, keepAfterrouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterrouteChange);
    }

    info(message: string, keepAfterrouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterrouteChange);
    }

    warning(message: string, keepAfterrouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterrouteChange);
    }

    alert(type: AlertType, message: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next(<Alert>{ type: type, message: message });
    }

    clear() {
        //clear Alerts
        this.subject.next();
    }
}