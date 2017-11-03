import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class SpinnerService {
    private spinnerObserver: Observer<any>;
    public spinnerObservable: Observable<any>;

    constructor() {
        this.spinnerObservable = new Observable<boolean>(observer => {
            this.spinnerObserver = observer;
        }
        ).share();
    }

    show() {
        if (this.spinnerObserver) {
            this.spinnerObserver.next(true);
        }
    }

    hide() {
        if (this.spinnerObserver) {
            this.spinnerObserver.next(false);
        }
    }
}