import { Injectable } from '@angular/core'
import { User } from './user'
import { UserBookDetails } from './userBookDetails'
// Import Http & Response from angular HTTP module
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
// Import Observable from rxjs/Observable
import { Observable } from 'rxjs/Observable';
// Import the map operator
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

    constructor(private _http: Http){}

    getUsers(): Observable<User[]> {
        return this._http.get('http://localhost:57445/api/users/GetUsers')
            .map((response: Response) => <User[]>response.json());
    }

    getUserDetailsById(id: number): Observable<User> {
        return this._http.get('http://localhost:57445/api/users/GetUserDetailsById/'+ id)
            .map((response: Response) => <User>response.json());
    }

    addNewUser(user: User): Observable<boolean> {
        var data = Object({ UserName: user.UserName, Email: user.Email });
        var body = JSON.stringify(data);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.post('http://localhost:57445/api/users/AddNewUser', body, options)
            .map((response: Response) => <boolean>response.json());
    }
}