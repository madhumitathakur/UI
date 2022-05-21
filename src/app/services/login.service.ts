import { Injectable } from '@angular/core';
import { Login } from '../entities/login.entity';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class LoginService {

    postUrl = 'http://localhost:8003/its-login/user/authenticate';

    constructor(private httpClient: HttpClient) { }

    createNewLogin(loginForms: any): Observable<any> {
        let httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }),
        };
        //this.addLogins(product);
        return this.httpClient.post<any>(
            this.postUrl,
            JSON.stringify(loginForms),
            httpOptions
        );
    }

    // deleteByLoginId(loginId: any): Observable<Boolean> {
    //     const headers = {
    //         'content-type': 'application/json',
    //         'Access-Control-Allow-Origin': '*',
    //     };
    //     return this.httpClient.delete<Boolean>(this.deleteUrl + '/' + loginId, {
    //         headers: headers,
    //     });
    // }

    // //create new service in rest api
    // getAllLogins(): Observable<any> {
    //     let httpOptions = {
    //         headers: new HttpHeaders({
    //             'Access-Control-Allow-Origin': '*',
    //         }),
    //     };
    //     return this.httpClient.get<any>(this.getUrl, httpOptions);
    // }

    // addLogins(loginObject: Login) {
    //     this.login.push(loginObject);
    // }
    // getAllLoginsLocal() {
    //     return this.login;
    // }


    login = [
        {
            userName: '',
            password: ''
        },
    ];



}
