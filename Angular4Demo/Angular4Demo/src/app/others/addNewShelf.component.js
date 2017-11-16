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
var ng2_toasty_1 = require("ng2-toasty");
var appGlobals_1 = require("../global/appGlobals");
var AddNewShelfComponent = /** @class */ (function () {
    function AddNewShelfComponent(_bookService, _router, _route, _toastyService, _appGlobal) {
        this._bookService = _bookService;
        this._router = _router;
        this._route = _route;
        this._toastyService = _toastyService;
        this._appGlobal = _appGlobal;
        this.isSubmitted = false;
        this.newShelfAdded = new core_1.EventEmitter();
        this.cancelAddShelf = new core_1.EventEmitter();
    }
    AddNewShelfComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bookService.getCategories().subscribe(function (result) { return _this.categories = result; });
    };
    AddNewShelfComponent.prototype.addNewShelf = function (category) {
        var _this = this;
        if (category == 0 || this.shelfCapacity === undefined) {
            this.isSubmitted = true;
            return;
        }
        this._bookService.addNewShelf(category, this.shelfCapacity).subscribe(function (result) {
            _this.newShelfAdded.emit('success');
            _this._toastyService.success(_this._appGlobal.getSuccessToast("Shelf added successfully!"));
            //this._toastyService.success('Shelf added successfully!');
            //window.location.reload();            
            //this._router.navigate(["home/about/shelfs"]);           
        }, function (error) {
            _this._toastyService.error(_this._appGlobal.getFailureToast());
            //this._toastyService.error('Something went wrong. Please try again later!');
            //alert('Something went wrong! Please try again later!');
        });
    };
    AddNewShelfComponent.prototype.cancel = function () {
        this.cancelAddShelf.emit('cancel');
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AddNewShelfComponent.prototype, "newShelfAdded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AddNewShelfComponent.prototype, "cancelAddShelf", void 0);
    AddNewShelfComponent = __decorate([
        core_1.Component({
            selector: 'add-shelf',
            templateUrl: 'app/others/addNewShelf.component.html'
        }),
        __metadata("design:paramtypes", [book_service_1.BookService, router_1.Router, router_1.ActivatedRoute,
            ng2_toasty_1.ToastyService, appGlobals_1.AppGlobals])
    ], AddNewShelfComponent);
    return AddNewShelfComponent;
}());
exports.AddNewShelfComponent = AddNewShelfComponent;
//# sourceMappingURL=addNewShelf.component.js.map