import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'about',
    templateUrl: 'app/others/about.component.html',
    styleUrls: ['app/others/about.component.css']
})

export class AboutComponent{

    constructor(private _router: Router) { }

}