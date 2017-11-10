import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthRequestor {
    
    // endpoint for testing
    private API_AUTH_ENDPOINT = "http://nouwaka-api01k.azurewebsites.net/api/login";
    // private API_AUTH_ENDPOINT = "http://localhost:25292/api/login";

    constructor(private http: Http) { }

    /**
     * request to api for authentication
     * @param body: body including username and password as JSON
     * @returns: return obverser for listening and handling response if successful or error if failed
     */
    requestAuth(body: any): Observable<Token> {
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        let options = new RequestOptions({
            headers: headers
        });
        let bodysend = new URLSearchParams();
        bodysend.set('email',body.email);
        bodysend.set('password',body.password);
        return this.http.post(this.API_AUTH_ENDPOINT, bodysend.toString(), options)
                 .map(response => {     
                   let data = response.json();
                   return data.token;
                })
                 .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error); 
    }
}