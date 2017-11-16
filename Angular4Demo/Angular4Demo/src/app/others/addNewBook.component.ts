import { Component, OnInit } from '@angular/core'
import { BookService } from './book.service'
import { Router } from '@angular/router'
import { AlertService } from '../alert/alert.service'
import { ToastOptions, ToastyService } from 'ng2-toasty'
import { AppGlobals } from '../global/appGlobals'

@Component({
    templateUrl: 'app/others/addNewBook.component.html'
})

export class AddNewBookComponent {
    categories: any[];
    shelfs: number[];
    bookName: string;
    author: string;
    isSubmitted: boolean = false;

    constructor(private _bookService: BookService, private _router: Router, private _toastyService: ToastyService, private _appGlobal: AppGlobals) { }

    ngOnInit() {
        this._bookService.getCategories().subscribe((result) => {
            this.categories = result;
        },
            (error) => {
                alert('Something went wrong! Please try again later!');
            });
    }

    cancel() {
        this._router.navigate(['home/about/books']);
    }

    loadShelfs(id: number) {
        this._bookService.getShelfs(id).subscribe((result) => {
            this.shelfs = result;
        },
            (error) => {
                alert('Something went wrong! Please try again later!');
            });
    }

    addNewBook(newBook: any, category: number, shelf: number) {
        if (newBook.value.bookName == '' || newBook.value.author == '' || category == 0 || shelf == 0) {
            this.isSubmitted = true;
            return;
        }
        this._bookService.addNewbook(newBook, category, shelf).subscribe((result) => {
            if (result) {                
                this._toastyService.success(this._appGlobal.getSuccessToast("Book added successfully!"));
                //this._toastyService.success('Book added successfully!');
                this._router.navigate(['home/about/books']);                
            }
            else {
                this._toastyService.error(this._appGlobal.getErrorToast("Failed to add Book!"));
                //this._toastyService.error('Failed to add book!');
                //alert('Something went wrong! Please try again later!');
            }
        },
            (error) => {
                this._toastyService.error(this._appGlobal.getFailureToast());
                //this._toastyService.error('Something went wrong. Please try again later!')
                //alert('Something went wrong! Please try again later!');
            });
    }
}