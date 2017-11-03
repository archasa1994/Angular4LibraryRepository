import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Book } from './book'
import { BookService } from './book.service'

@Component({
    templateUrl: 'app/others/books.component.html',
    styleUrls: ['app/others/books.component.css']
})

export class BooksComponent {

    books: Book[];
    isDisabled: boolean = true;

    constructor(private _bookService: BookService, private _router: Router) { }

    ngOnInit() {
        this._bookService.getBooks().subscribe((result) => {
            this.isDisabled = false;
            this.books = result;
        },
            (error) => {
                alert('Something went wrong. Please try again later.');
            });
    }

    addNewBook() {
        this._router.navigate(['/home/about/addNewBook']);
    }
}