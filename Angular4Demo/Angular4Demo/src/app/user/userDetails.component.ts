import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { User } from './user'
import { UserService } from './user.service'
import { SpinnerService } from '../spinner/spinner.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user-details',
    templateUrl: 'app/user/userDetails.component.html'
})

export class UserDetailsComponent {

    userDetails: User = new User;
    constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _userService: UserService, private _spinnerService: SpinnerService) { }

    ngOnInit() {
        this._spinnerService.show();
        let id: number = this._activatedRoute.snapshot.params['id'];
        this._userService.getUserDetailsById(id).subscribe((response) => {
            this._spinnerService.hide();
            this.userDetails = response;
        },
            (error) => {
                this._spinnerService.hide();
                alert('Something went wrong. Please try again later!');
            });        
    }

}