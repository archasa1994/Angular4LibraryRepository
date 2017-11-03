import { Component, OnInit } from '@angular/core'
import { BookService } from './book.service'
import { BookIssued } from './bookIssued'


@Component({
    templateUrl: 'app/others/bookIssued.component.html'
})

export class BookIssuedComponent {
    booksIssued: BookIssued[];

    constructor(private _bookService: BookService) { }

    ngOnInit() {
        this._bookService.getIssuedBooks().subscribe(result => this.booksIssued = result);
    }
}