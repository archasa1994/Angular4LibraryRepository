"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var employee_component_1 = require("./employee/employee.component");
var employeeList_component_1 = require("./employee/employeeList.component");
var home_component_1 = require("./home/home.component");
var pageNotFound_component_1 = require("./others/pageNotFound.component");
var createEmployee_component_1 = require("./employee/createEmployee.component");
var login_component_1 = require("./login/login.component");
var auth_guard_1 = require("./_guards/auth.guard");
var about_component_1 = require("./others/about.component");
var books_component_1 = require("./others/books.component");
var dailyBookIssue_component_1 = require("./others/dailyBookIssue.component");
var addNewBook_component_1 = require("./others/addNewBook.component");
var shelfs_component_1 = require("./others/shelfs.component");
var addNewShelf_component_1 = require("./others/addNewShelf.component");
var bookIssued_component_1 = require("./others/bookIssued.component");
var users_component_1 = require("./user/users.component");
var userDetails_component_1 = require("./user/userDetails.component");
exports.router = [
    {
        path: 'home', component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard], children: [
            {
                path: 'about',
                component: about_component_1.AboutComponent,
                children: [
                    {
                        path: 'books',
                        component: books_component_1.BooksComponent
                    },
                    {
                        path: 'dailyIssues',
                        component: dailyBookIssue_component_1.DailyBookIssueComponent
                    },
                    {
                        path: 'addNewBook',
                        component: addNewBook_component_1.AddNewBookComponent
                    },
                    {
                        path: 'shelfs',
                        component: shelfs_component_1.ShelfsComponent,
                        children: [
                            {
                                path: 'addShelf',
                                component: addNewShelf_component_1.AddNewShelfComponent
                            }
                        ]
                    },
                    {
                        path: 'booksIssued',
                        component: bookIssued_component_1.BookIssuedComponent
                    },
                ]
            },
            {
                path: 'createEmployee',
                component: createEmployee_component_1.CreateEmployeeComponent
            },
            {
                path: 'employees',
                component: employeeList_component_1.EmployeeListComponent,
            },
            {
                path: 'employees/:code',
                component: employee_component_1.EmployeeComponent
            },
            {
                path: 'users',
                component: users_component_1.UsersComponent,
            },
            {
                path: 'users/:id',
                component: userDetails_component_1.UserDetailsComponent
            }
        ]
    },
    //{ path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard] },
    //{ path: 'employees/:code', component: EmployeeComponent },
    { path: '', redirectTo: '/home/about/books', pathMatch: 'full' },
    //{ path: 'createEmployee', component: CreateEmployeeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.router.js.map