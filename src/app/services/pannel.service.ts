import { Injectable } from '@angular/core';
import { Pannel } from '../entities/pannel.entity';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class PannelService {

    getUrl = 'http://localhost:8004/admin/panel';
    deleteUrl = 'http://localhost:8004/admin/panel/tech';
    postUrl = 'http://localhost:8004/admin/panel';
    pannel: any;

    constructor(private httpClient: HttpClient) { }

    createNewPannel(pannelForms: any): Observable<any> {
        let httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1MzE3MTA3NSwiaWF0IjoxNjUzMTM1MDc1fQ.cGqasa2aAt0j056h7NaZNtDv7Z-ARrD6SnEeAcptONo'

            }),
        };
        return this.httpClient.post<any>(
            this.postUrl,
            JSON.stringify(pannelForms),
            httpOptions
        );
    }
    addPannels(pannelObject: Pannel) {
        this.pannel.push(pannelObject);
    }

    deleteBypannelId(employeeId: any): Observable<Boolean> {
        const headers = {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        };
        return this.httpClient.delete<Boolean>(this.deleteUrl + '/' + employeeId, {
            headers: headers,
        });
    }

    getAllPannelMembers(): Observable<any> {
        let httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
            }),
        };
        return this.httpClient.get<any>(this.getUrl, httpOptions);
    }
}
