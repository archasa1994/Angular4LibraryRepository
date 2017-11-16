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
var book_service_1 = require("./book.service");
var router_1 = require("@angular/router");
var ng2_toasty_1 = require("ng2-toasty");
var appGlobals_1 = require("../global/appGlobals");
var AddNewBookComponent = /** @class */ (function () {
    function AddNewBookComponent(_bookService, _router, _toastyService, _appGlobal) {
        this._bookService = _bookService;
        this._router = _router;
        this._toastyService = _toastyService;
        this._appGlobal = _appGlobal;
        this.isSubmitted = false;
    }
    AddNewBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bookService.getCategories().subscribe(function (result) {
            _this.categories = result;
        }, function (error) {
            alert('Something went wrong! Please try again later!');
        });
    };
    AddNewBookComponent.prototype.cancel = function () {
        this._router.navigate(['home/about/books']);
    };
    AddNewBookComponent.prototype.loadShelfs = function (id) {
        var _this = this;
        this._bookService.getShelfs(id).subscribe(function (result) {
            _this.shelfs = result;
        }, function (error) {
            alert('Something went wrong! Please try again later!');
        });
    };
    AddNewBookComponent.prototype.addNewBook = function (newBook, category, shelf) {
        var _this = this;
        if (newBook.value.bookName == '' || newBook.value.author == '' || category == 0 || shelf == 0) {
            this.isSubmitted = true;
            return;
        }
        this._bookService.addNewbook(newBook, category, shelf).subscribe(function (result) {
            if (result) {
                _this._toastyService.success(_this._appGlobal.getSuccessToast("Book added successfully!"));
                //this._toastyService.success('Book added successfully!');
                _this._router.navigate(['home/about/books']);
            }
            else {
                _this._toastyService.error(_this._appGlobal.getErrorToast("Failed to add Book!"));
                //this._toastyService.error('Failed to add book!');
                //alert('Something went wrong! Please try again later!');
            }
        }, function (error) {
            _this._toastyService.error(_this._appGlobal.getFailureToast());
            //this._toastyService.error('Something went wrong. Please try again later!')
            //alert('Something went wrong! Please try again later!');
        });
    };
    AddNewBookComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/others/addNewBook.component.html'
        }),
        __metadata("design:paramtypes", [book_service_1.BookService, router_1.Router, ng2_toasty_1.ToastyService, appGlobals_1.AppGlobals])
    ], AddNewBookComponent);
    return AddNewBookComponent;
}());
exports.AddNewBookComponent = AddNewBookComponent;
//# sourceMappingURL=addNewBook.component.js.map