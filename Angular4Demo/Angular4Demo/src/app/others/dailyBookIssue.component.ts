﻿import { Component, OnInit } from '@angular/core'
import { BookService } from './book.service'
import { Router } from '@angular/router'
import { AlertService } from '../alert/alert.service'

@Component({
    templateUrl: 'app/others/dailyBookIssue.component.html',
    styleUrls: ['app/others/dailyBookIssue.component.css']
})

export class DailyBookIssueComponent {
    books: any[];
    users: any[];
    issueDate: Date;
    isSubmitted: boolean = false;

    constructor(private _bookService: BookService, private _router: Router, private _alertService: AlertService) { }

    ngOnInit() {        
        this._bookService.getBooks().subscribe((result) => {
            if (result.length != 0) {
                this.books = result;
                this.issueDate = null;
                this.isSubmitted = false;
            }
            else {
                this.books = null;
            }
        },
            (error) => {
                alert('Error in service. Please try again later.')
            });

        this._bookService.getUsers().subscribe((result) => {
            if (result.length != 0) {
                this.users = result;
            }
            else {
                this.users = null;
            }
        },
            (error) => {
                alert('Error in service. Please try again later.')
            });
    }

    cancel() {
        this._router.navigate(['home/about']);
    }

    bookIssue(bookId: number, userId: number, book: any) {
        if (bookId == 0 || userId == 0 || book.form.value.issueDate === null)
        {
            this.isSubmitted = true;
            return;
        }
        this._bookService.bookIssue(bookId, userId, book).subscribe((response) => {
            if (response) {
                this._alertService.success('Book Issued successfully!');
                this.ngOnInit();
                //window.location.reload();
            }
            else {
                this._alertService.error('Failed to issue book!');
                //alert('Error in service. Please try again later.')
            }
        },
            (error) => {
                this._alertService.error('Something went wrong. Please try again later!');
                //alert('Error in service. Please try again later.')
            });
        }
    }


    