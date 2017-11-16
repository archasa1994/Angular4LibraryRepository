"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Import Http & Response from angular HTTP module
var http_1 = require("@angular/http");
// Import the map operator
require("rxjs/add/operator/map");
var appGlobals_1 = require("../global/appGlobals");
var BookService = /** @class */ (function () {
    function BookService(_http, _appGlobal) {
        this._http = _http;
        this._appGlobal = _appGlobal;
    }
    BookService.prototype.getBooks = function () {
        return this._http.get(this._appGlobal.baseUrl + '/api/books/GetBooks')
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.getUsers = function () {
        return this._http.get(this._appGlobal.baseUrl + '/api/books/GetUsers')
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.getCategories = function () {
        return this._http.get(this._appGlobal.baseUrl + '/api/books/GetCategories')
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.getShelfs = function (id) {
        return this._http.get(this._appGlobal.baseUrl + '/api/books/GetShelfs/' + id)
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.getShelfsByCategory = function (category) {
        return this._http.get(this._appGlobal.baseUrl + '/api/books/GetShelfsByCategory/' + category)
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.getIssuedBooks = function () {
        return this._http.get(this._appGlobal.baseUrl + '/api/books/GetIssuedBooks')
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.bookIssue = function (bookId, userId, book) {
        var data = Object({ UserId: userId, BookId: bookId, IssueDate: book.value.issueDate });
        var body = JSON.stringify(data);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._appGlobal.baseUrl + '/api/books/BookIssue', body, options)
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.addNewbook = function (newBook, category, shelf) {
        var data = Object({ BookName: newBook.value.bookName, Author: newBook.value.author, CategoryId: category, ShelfId: shelf });
        var body = JSON.stringify(data);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._appGlobal.baseUrl + '/api/books/AddNewBook', body, options)
            .map(function (response) { return response.json(); });
    };
    BookService.prototype.addNewShelf = function (category, shelfCapacity) {
        var data = Object({ CategoryId: category, ShelfCapacity: shelfCapacity });
        var body = JSON.stringify(data);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._appGlobal.baseUrl + '/api/books/AddNewShelf', body, options)
            .map(function (response) { return response.json(); });
    };
    BookService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, appGlobals_1.AppGlobals])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map