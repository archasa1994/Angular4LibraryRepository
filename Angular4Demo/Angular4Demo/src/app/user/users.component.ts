import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { User } from './user'
import { UserService } from './user.service'

@Component({
    templateUrl: 'app/user/users.component.html'
})

export class UsersComponent {
    users: User[];
    isClicked: boolean = false;

    constructor(private _router: Router, private _userService: UserService) { }

    ngOnInit() {
        this.isClicked = false;
        this._userService.getUsers().subscribe(result => this.users = result);        
    }

    addUser()
    {
        this.isClicked = true;
    }

    cancel() {
        this.isClicked = false;
    }
}
