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
var DailyBookIssueComponent = /** @class */ (function () {
    function DailyBookIssueComponent(_bookService, _router, _toastyService, _appGlobal) {
        this._bookService = _bookService;
        this._router = _router;
        this._toastyService = _toastyService;
        this._appGlobal = _appGlobal;
        this.isSubmitted = false;
    }
    DailyBookIssueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bookService.getBooks().subscribe(function (result) {
            if (result.length != 0) {
                _this.books = result;
                _this.issueDate = null;
                _this.isSubmitted = false;
            }
            else {
                _this.books = null;
            }
        }, function (error) {
            alert('Error in service. Please try again later.');
        });
        this._bookService.getUsers().subscribe(function (result) {
            if (result.length != 0) {
                _this.users = result;
            }
            else {
                _this.users = null;
            }
        }, function (error) {
            alert('Error in service. Please try again later.');
        });
    };
    DailyBookIssueComponent.prototype.cancel = function () {
        this._router.navigate(['home/about']);
    };
    DailyBookIssueComponent.prototype.bookIssue = function (bookId, userId, book) {
        var _this = this;
        if (bookId == 0 || userId == 0 || book.form.value.issueDate === null) {
            this.isSubmitted = true;
            return;
        }
        this._bookService.bookIssue(bookId, userId, book).subscribe(function (response) {
            if (response) {
                _this._toastyService.success(_this._appGlobal.getSuccessToast("Book Issued successfully!"));
                _this.ngOnInit();
                //window.location.reload();
            }
            else {
                _this._toastyService.error(_this._appGlobal.getErrorToast("Failed to Issue Book!"));
                //this._toastyService.error('Failed to issue book!');
                //alert('Error in service. Please try again later.')
            }
        }, function (error) {
            _this._toastyService.error(_this._appGlobal.getFailureToast());
            //this._toastyService.error('Something went wrong. Please try again later!');
            //alert('Error in service. Please try again later.')
        });
    };
    DailyBookIssueComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/others/dailyBookIssue.component.html',
            styleUrls: ['app/others/dailyBookIssue.component.css']
        }),
        __metadata("design:paramtypes", [book_service_1.BookService, router_1.Router, ng2_toasty_1.ToastyService, appGlobals_1.AppGlobals])
    ], DailyBookIssueComponent);
    return DailyBookIssueComponent;
}());
exports.DailyBookIssueComponent = DailyBookIssueComponent;
//# sourceMappingURL=dailyBookIssue.component.js.map