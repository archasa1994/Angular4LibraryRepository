import { Component, Output, EventEmitter } from '@angular/core'
import { Router } from '@angular/router'
import { User } from './user'
import { UserService } from './user.service'
import { AlertService } from '../alert/alert.service'

@Component({
    selector: 'add-user',
    templateUrl: 'app/user/addUser.component.html'
})

export class AddUserComponent {
    user: User = new User;
    isSubmitted: boolean = false;

    constructor(private _userService: UserService, private _alertService: AlertService) { }

    @Output()
    newUserAdded: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    cancelClicked: EventEmitter<string> = new EventEmitter<string>();

    cancel() {
        this.cancelClicked.emit('cancel');
    }

    addNewUser() {
        if (this.user.UserName === undefined || this.user.Email === undefined) {
            this.isSubmitted = true;
            return;
        }
        this._userService.addNewUser(this.user).subscribe((response) => {
            if (response) {
                this.newUserAdded.emit('success');
                this._alertService.success('User added successfully!');
            }
            else {
                this._alertService.error('Failed to add user!');
                //alert('Something went wrong. Please try again later!')
            }
        },
            (error) => {
                this._alertService.error('Something went wrong. Please try again later!');
            });
    }
}

