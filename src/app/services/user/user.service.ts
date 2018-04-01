import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { User } from '../../user';

const cudOptions = {
	headers : new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class UserService {

	private userUrl : string = 'http://cruduser.us-east-2.elasticbeanstalk.com/user'
	constructor(private http: HttpClient) { }

	getUsers(): Observable<User[]>{
		return this.http.get<User[]>(this.userUrl)
		.catch(this.handleError);
	}

	getUser(id:string | number): Observable<any>{
		const url = `${this.userUrl}/${id}`;
		return this.http.get<User>(url)
		.catch(this.handleError);
	}

	addUser(user:User):Observable<User>{
		const newUser = Object.assign({},user);
		return this.http.post<User>(this.userUrl,newUser,cudOptions)
		.catch(this.handleError);
	}

	deleteUser(user:User | number):Observable<User>{
		const id = typeof user == 'number'? user: user.id;
		const url = `${this.userUrl}/${id}`;
		return this.http.delete<User>(url,cudOptions)
		.catch(this.handleError);
	}

	updateUser(user:User): Observable<User>{
		return this.http.put(this.userUrl,user,cudOptions)
		.catch(this.handleError);
	}

	private handleError(error:any){
		console.error(error);
		return Observable.throw(error);
		
	}

}
