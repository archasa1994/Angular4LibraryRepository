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
var ShelfsComponent = /** @class */ (function () {
    function ShelfsComponent(_bookService, _router) {
        this._bookService = _bookService;
        this._router = _router;
        this.isAddNewShelf = false;
    }
    ShelfsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bookService.getCategories().subscribe(function (result) { return _this.categories = result; });
    };
    ShelfsComponent.prototype.getShelfsByCategory = function (category) {
        var _this = this;
        this._bookService.getShelfsByCategory(category).subscribe(function (result) { return _this.shelfs = result; });
    };
    ShelfsComponent.prototype.enableAddShelf = function () {
        this.isAddNewShelf = true;
    };
    ShelfsComponent.prototype.newShelfAdded = function () {
        this.isAddNewShelf = false;
        this.ngOnInit();
    };
    ShelfsComponent.prototype.cancel = function () {
        this.isAddNewShelf = false;
    };
    ShelfsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/others/shelfs.component.html'
        }),
        __metadata("design:paramtypes", [book_service_1.BookService, router_1.Router])
    ], ShelfsComponent);
    return ShelfsComponent;
}());
exports.ShelfsComponent = ShelfsComponent;
//# sourceMappingURL=shelfs.component.js.map