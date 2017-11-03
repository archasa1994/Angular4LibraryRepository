import { Component } from '@angular/core';
import { UserPreferencesService } from '../employee/userPreferences.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/home/home.component.html',              
})

export class HomeComponent{

    user: string = localStorage.getItem('currentUser');

    constructor(private _userPreferencesService: UserPreferencesService, private _router: Router) { }

    get colour(): string {
        return this._userPreferencesService.colourPreference;
    }

    set colour(value: string) {
        this._userPreferencesService.colourPreference = value;
    } 

    logout() {
        localStorage.removeItem('currentUser');        
        this._router.navigate(['/login']);
    }   
}