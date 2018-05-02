import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError} from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { User } from '../../user';

@Injectable()
export class UserService {

    private userUrl : string = 'http://cruduser.us-east-2.elasticbeanstalk.com/user'
    private crudOptions = {
        headers : new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
    
    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]>{
        return this.http.get<User[]>(this.userUrl)
        .pipe(catchError(this.handleError));
    }

    getUser(id:string | number): Observable<any>{
        const url = `${this.userUrl}/${id}`;
        return this.http.get<User>(url)
        .pipe(catchError(this.handleError));
    }

    addUser(user:User):Observable<User>{
        return this.http.post<User>(this.userUrl,user,this.crudOptions)
        .pipe(catchError(this.handleError));
    }

    deleteUser(user:User | number):Observable<User>{
        const id = typeof user == 'number'? user: user.id;
        const url = `${this.userUrl}/${id}`;
        return this.http.delete<any>(url,this.crudOptions)
        .pipe(catchError(this.handleError));
    }

    updateUser(user:User): Observable<User>{
        return this.http.put(this.userUrl,user,this.crudOptions)
        .pipe(catchError(this.handleError));
    }

    private handleError(error:HttpErrorResponse){
        console.error(error);

        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return new ErrorObservable('Algo malo sucedio; Por favor, inténtelo de nuevo más tarde.');

    }

}
