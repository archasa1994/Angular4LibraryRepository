import { Injectable } from '@angular/core'
import { Book } from './book'
import { BookIssued } from './bookIssued'
// Import Http & Response from angular HTTP module
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
// Import Observable from rxjs/Observable
import { Observable } from 'rxjs/Observable';
// Import the map operator
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

    constructor(private _http: Http){}

    getBooks(): Observable<Book[]> {        
        return this._http.get('http://localhost:57445/api/books/GetBooks')
            .map((response: Response) => <Book[]>response.json());        
    } 

    getUsers(): Observable<any[]> {
        return this._http.get('http://localhost:57445/api/books/GetUsers')
            .map((response: Response) => <any[]>response.json());
    }

    getCategories(): Observable<any[]> {
        return this._http.get('http://localhost:57445/api/books/GetCategories')
            .map((response: Response) => <any[]>response.json());
    }

    getShelfs(id: number): Observable<any[]> {
        return this._http.get('http://localhost:57445/api/books/GetShelfs/'+id)
            .map((response: Response) => <any[]>response.json());
    }

    getShelfsByCategory(category: number): Observable<any[]> {
        return this._http.get('http://localhost:57445/api/books/GetShelfsByCategory/' + category)
            .map((response: Response) => <any[]>response.json());
    }

    getIssuedBooks(): Observable<BookIssued[]> {
        return this._http.get('http://localhost:57445/api/books/GetIssuedBooks')
            .map((response: Response) => <BookIssued[]>response.json());
    }

    bookIssue(bookId: number, userId: number, book: any): Observable<boolean> {
        var data = Object({ UserId: userId, BookId: bookId, IssueDate: book.value.issueDate });
        var body = JSON.stringify(data);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.post('http://localhost:57445/api/books/BookIssue', body, options)
            .map((response: Response) => <boolean>response.json());
    } 

    addNewbook(newBook: any, category: number, shelf: number): Observable<boolean> {
        var data = Object({ BookName: newBook.value.bookName, Author: newBook.value.author, CategoryId: category, ShelfId: shelf });
        var body = JSON.stringify(data);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.post('http://localhost:57445/api/books/AddNewBook', body, options)
            .map((response: Response) => <boolean>response.json());
    }

    addNewShelf(category: number, shelfCapacity: number): Observable<boolean> {
        var data = Object({ CategoryId: category, ShelfCapacity: shelfCapacity });
        var body = JSON.stringify(data);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.post('http://localhost:57445/api/books/AddNewShelf', body, options)
            .map((response: Response) => <boolean>response.json());
    } 
}