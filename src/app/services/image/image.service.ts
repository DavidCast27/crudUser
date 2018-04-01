import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { User } from '../../user';

const cudOptions = {
	headers : new HttpHeaders({'Content-Type': 'multipart/form-data','responseType': "blob"})
}

@Injectable()
export class ImageService {


	private imageUrl : string = 'http://cruduser.us-east-2.elasticbeanstalk.com/storage'
	constructor(private http: HttpClient) { }

	getImage(id:string | number): Observable<File>{
		const url = `${this.imageUrl}?image=${id}`;
		return this.http.get<any>(url, cudOptions)
		.catch(this.handleError);
	}

	private handleError(error:any){
		console.error(error);
		return Observable.throw(error);
		
	}

}
