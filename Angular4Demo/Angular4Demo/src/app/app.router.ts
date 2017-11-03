import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component'
import { EmployeeListComponent } from './employee/employeeList.component'
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe'
import { EmployeeCountComponent } from './employee/employeeCount.component'
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './others/pageNotFound.component'
import { CreateEmployeeComponent } from './employee/createEmployee.component'
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './_guards/auth.guard'
import { AboutComponent } from './others/about.component'
import { BooksComponent } from './others/books.component'
import { DailyBookIssueComponent } from './others/dailyBookIssue.component'
import { AddNewBookComponent } from './others/addNewBook.component'
import { ShelfsComponent } from './others/shelfs.component'
import { AddNewShelfComponent } from './others/addNewShelf.component'
import { BookIssuedComponent } from './others/bookIssued.component'
import { UsersComponent } from './user/users.component'
import { UserDetailsComponent } from './user/userDetails.component'
import { AddUserComponent } from './user/addUser.component'

export const router: Routes = [
    {
        path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
            {
                path: 'about',
                component: AboutComponent,
                children: [
                    {
                        path: 'books',
                        component: BooksComponent
                    },
                    {
                        path: 'dailyIssues',
                        component: DailyBookIssueComponent
                    },
                    {
                        path: 'addNewBook',
                        component: AddNewBookComponent
                    },
                    {
                        path: 'shelfs',
                        component: ShelfsComponent,
                        children: [
                            {
                                path: 'addShelf',
                                component: AddNewShelfComponent
                            }]
                    },
                    {
                        path: 'booksIssued',
                        component: BookIssuedComponent
                    },
                    ]
            },
            {
                path: 'createEmployee',
                component: CreateEmployeeComponent
            },
            {
                path: 'employees',
                component: EmployeeListComponent,
                //children: [{
                //    path: 'createEmployee',
                //    component: CreateEmployeeComponent
                //}]               
            },
            {
                path: 'employees/:code',
                component: EmployeeComponent
            },
            {
                path: 'users',
                component: UsersComponent,
                //children: [
                //    {
                //        path: ':id',
                //        component: UserDetailsComponent
                //    }]
                //children: [
                //    {
                //        path: 'addUser',
                //        component: AddUserComponent
                //    }]
            },
            {
                path: 'users/:id',
                component: UserDetailsComponent
            }]
    },
    //{ path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard] },
    //{ path: 'employees/:code', component: EmployeeComponent },
    { path: '', redirectTo: '/home/about/books', pathMatch: 'full' },
    //{ path: 'createEmployee', component: CreateEmployeeComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
