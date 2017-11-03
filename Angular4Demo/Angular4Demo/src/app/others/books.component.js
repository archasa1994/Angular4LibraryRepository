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
var router_1 = require("@angular/router");
var book_service_1 = require("./book.service");
var BooksComponent = /** @class */ (function () {
    function BooksComponent(_bookService, _router) {
        this._bookService = _bookService;
        this._router = _router;
        this.isDisabled = true;
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bookService.getBooks().subscribe(function (result) {
            _this.isDisabled = false;
            _this.books = result;
        }, function (error) {
            alert('Something went wrong. Please try again later.');
        });
    };
    BooksComponent.prototype.addNewBook = function () {
        this._router.navigate(['/home/about/addNewBook']);
    };
    BooksComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/others/books.component.html',
            styleUrls: ['app/others/books.component.css']
        }),
        __metadata("design:paramtypes", [book_service_1.BookService, router_1.Router])
    ], BooksComponent);
    return BooksComponent;
}());
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=books.component.js.map