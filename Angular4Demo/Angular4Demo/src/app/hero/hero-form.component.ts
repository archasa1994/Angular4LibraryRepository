import { Component } from '@angular/core'
import { Hero } from './hero'

@Component({
    selector: 'hero-form',
    templateUrl: 'app/hero/hero-form.component.html',
    styleUrls: ['app/hero/hero-form.component.css']
})

export class HeroFormComponent {

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted: boolean = false;

    onSubmit(): void {
        this.submitted = true;
        console.log(this.model);
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }

}