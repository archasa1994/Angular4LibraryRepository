"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//import { RouterModule, Routes } from '@angular/router';
var test_module_1 = require("./test.module");
var app_router_1 = require("./app.router");
var auth_guard_1 = require("./_guards/auth.guard");
//import { SimpleNotificationsModule } from 'angular2-notifications'
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var employeeList_component_1 = require("./employee/employeeList.component");
var employeeTitle_pipe_1 = require("./employee/employeeTitle.pipe");
var employeeCount_component_1 = require("./employee/employeeCount.component");
var home_component_1 = require("./home/home.component");
var pageNotFound_component_1 = require("./others/pageNotFound.component");
var hero_form_component_1 = require("./hero/hero-form.component");
var employee_service_1 = require("./employee/employee.service");
var createEmployee_component_1 = require("./employee/createEmployee.component");
var spinner_component_1 = require("./spinner/spinner.component");
var spinner_service_1 = require("./spinner/spinner.service");
var login_component_1 = require("./login/login.component");
var appGlobals_1 = require("./global/appGlobals");
var about_component_1 = require("./others/about.component");
var books_component_1 = require("./others/books.component");
var dailyBookIssue_component_1 = require("./others/dailyBookIssue.component");
var book_service_1 = require("./others/book.service");
var addNewBook_component_1 = require("./others/addNewBook.component");
var shelfs_component_1 = require("./others/shelfs.component");
var addNewShelf_component_1 = require("./others/addNewShelf.component");
var bookIssued_component_1 = require("./others/bookIssued.component");
var users_component_1 = require("./user/users.component");
var userDetails_component_1 = require("./user/userDetails.component");
var user_service_1 = require("./user/user.service");
var addUser_component_1 = require("./user/addUser.component");
var alert_component_1 = require("./alert/alert.component");
var alert_service_1 = require("./alert/alert.service");
// Routes is an array of Route objects
// Each route maps a URL path to a component
// The 3rd route specifies the route to redirect to if the path
// is empty. In our case we are redirecting to /home
// The 4th route (**) is the wildcard route. This route is used
// if the requested URL doesn't match any other routes already defined
//const appRoutes: Routes = [
//    { path: 'home', component: HomeComponent },
//    { path: 'employees', component: EmployeeListComponent },
//    { path: 'employees/:code', component: EmployeeComponent },
//    { path: '', redirectTo: '/home', pathMatch: 'full' },
//    { path: 'createEmployee', component: CreateEmployeeComponent },
//    { path: '**', component: PageNotFoundComponent }
//];
// To let the router know about the routes defined above,
// pass "appRoutes" constant to forRoot(appRoutes) method
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule,
                app_router_1.routes, test_module_1.TestModule],
            declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, employeeList_component_1.EmployeeListComponent, employeeTitle_pipe_1.EmployeeTitlePipe, employeeCount_component_1.EmployeeCountComponent, home_component_1.HomeComponent,
                pageNotFound_component_1.PageNotFoundComponent, createEmployee_component_1.CreateEmployeeComponent, hero_form_component_1.HeroFormComponent, spinner_component_1.SpinnerComponent, login_component_1.LoginComponent, about_component_1.AboutComponent,
                books_component_1.BooksComponent, dailyBookIssue_component_1.DailyBookIssueComponent, addNewBook_component_1.AddNewBookComponent, shelfs_component_1.ShelfsComponent, addNewShelf_component_1.AddNewShelfComponent, bookIssued_component_1.BookIssuedComponent,
                users_component_1.UsersComponent, userDetails_component_1.UserDetailsComponent, addUser_component_1.AddUserComponent, alert_component_1.AlertComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [employee_service_1.EmployeeService, spinner_service_1.SpinnerService, auth_guard_1.AuthGuard, appGlobals_1.AppGlobals, book_service_1.BookService, user_service_1.UserService, alert_service_1.AlertService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map