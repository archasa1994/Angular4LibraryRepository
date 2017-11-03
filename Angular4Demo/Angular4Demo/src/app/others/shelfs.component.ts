import { Component, OnInit } from '@angular/core'
import { BookService } from './book.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: 'app/others/shelfs.component.html'
})

export class ShelfsComponent {
    categories: any[];
    shelfs: any[];
    isAddNewShelf: boolean = false;

    constructor(private _bookService: BookService, private _router: Router) { }

    ngOnInit() {
        this._bookService.getCategories().subscribe(result => this.categories = result);         
    }

    getShelfsByCategory(category: number) {
        this._bookService.getShelfsByCategory(category).subscribe(result => this.shelfs = result);
    } 

    enableAddShelf() {
        this.isAddNewShelf = true;
    }

    newShelfAdded() {
        this.isAddNewShelf = false;
        this.ngOnInit();
    } 

    cancel() {
        this.isAddNewShelf = false;
    }   
}