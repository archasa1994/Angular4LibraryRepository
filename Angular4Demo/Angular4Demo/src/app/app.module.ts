import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { RouterModule, Routes } from '@angular/router';
import { TestModule } from './test.module';
import { routes } from './app.router';
import { AuthGuard } from './_guards/auth.guard'
import { SimpleNotificationsModule } from 'angular2-notifications'

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component'
import { EmployeeListComponent } from './employee/employeeList.component'
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe'
import { EmployeeCountComponent } from './employee/employeeCount.component'
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './others/pageNotFound.component'
import { HeroFormComponent } from './hero/hero-form.component'
import { EmployeeService } from './employee/employee.service';
import { UserPreferencesService } from './employee/userPreferences.service';
import { CreateEmployeeComponent } from './employee/createEmployee.component'
import { SpinnerComponent } from './spinner/spinner.component'
import { SpinnerService } from './spinner/spinner.service'
import { LoginComponent } from './login/login.component'
import { AppGlobals } from './global/appGlobals'
import { AboutComponent } from './others/about.component'
import { BooksComponent } from './others/books.component'
import { DailyBookIssueComponent } from './others/dailyBookIssue.component'
import { BookService } from './others/book.service'
import { AddNewBookComponent } from './others/addNewBook.component'
import { ShelfsComponent } from './others/shelfs.component'
import { AddNewShelfComponent } from './others/addNewShelf.component'
import { BookIssuedComponent } from './others/bookIssued.component'
import { UsersComponent } from './user/users.component'
import { UserDetailsComponent } from './user/userDetails.component'
import { UserService } from './user/user.service'
import { AddUserComponent } from './user/addUser.component'
import { AlertComponent } from './alert/alert.component'
import { AlertService } from './alert/alert.service'

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
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule,
        routes, TestModule],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent, HomeComponent,
        PageNotFoundComponent, CreateEmployeeComponent, HeroFormComponent, SpinnerComponent, LoginComponent, AboutComponent,
        BooksComponent, DailyBookIssueComponent, AddNewBookComponent, ShelfsComponent, AddNewShelfComponent, BookIssuedComponent,
        UsersComponent, UserDetailsComponent, AddUserComponent, AlertComponent],
    bootstrap: [AppComponent],
    providers: [EmployeeService, SpinnerService, AuthGuard, AppGlobals, BookService, UserService, AlertService]
})
export class AppModule { }
