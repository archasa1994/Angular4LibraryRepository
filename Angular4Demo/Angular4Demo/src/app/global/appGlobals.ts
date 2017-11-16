import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ToastOptions } from 'ng2-toasty'

@Injectable()
export class AppGlobals {
    baseUrl: string = 'http://localhost:57445';
    public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    setLoginStatus(isLoggedIn: boolean) {
        this.isUserLoggedIn.next(isLoggedIn);
    }

    getSuccessToast(message: string): ToastOptions {
        var toastOptions: ToastOptions = {
            title: "Success",
            msg: message,
            showClose: true,
            timeout: 3000,
            theme: 'bootstrap'
        };
        return toastOptions;
    }

    getErrorToast(message: string): ToastOptions {
        var toastOptions: ToastOptions = {
            title: "Error",
            msg: message,
            showClose: true,
            timeout: 3000,
            theme: 'bootstrap'
        };
        return toastOptions;
    }

    getFailureToast(): ToastOptions {
        var toastOptions: ToastOptions = {
            title: "Error",
            msg: "Something went wrong.Please try again later!",
            showClose: true,
            timeout: 3000,
            theme: 'bootstrap'
        };
        return toastOptions;
    }
}