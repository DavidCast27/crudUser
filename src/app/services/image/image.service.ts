import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError} from 'rxjs/operators';
import 'rxjs/add/operator/map'
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { User } from '../../user';
import { DomSanitizer} from '@angular/platform-browser';

@Injectable()
export class ImageService {

	private imageUrl : string = 'http://cruduser.us-east-2.elasticbeanstalk.com/storage'
    private crudOptions = {
        headers : new HttpHeaders({
            'Content-Type':  'multipart/form-data'
        })
    };

	constructor(private http: HttpClient , private domSanitizer: DomSanitizer) { }

	fileUpload(fileItem:File):Observable<any>{
        let fd: FormData = new FormData();
        fd.append('file', fileItem);
        console.log(fd.getAll("file"));
        return this.http.post(this.imageUrl,fd, this.crudOptions)
        .pipe(catchError(this.handleError));
    }

    getImage(id:string | number): Observable<File>{
        const url = `${this.imageUrl}?image=${id}`;
        return this.http.get(url, {responseType: "blob"})
        .map((e) => this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(e)))
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
