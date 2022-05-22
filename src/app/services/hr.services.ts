import { Injectable } from '@angular/core';
import { Interview } from '../entities/interview.entity';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoginService } from './login.service';
@Injectable()
export class HrService {

    getUrl = 'http://localhost:8006/hr/candidates';
    deleteUrl = 'http://localhost:8006/hr/candidates';
    postUrl = 'http://localhost:8006/hr/candidates';
    token: string = '';
    


    constructor(private httpClient: HttpClient, private hrService: HrService) { } 

    viewInterviewMembers(hrForm:any): Observable<any> {
        this.token = this.hrService.token;
        console.log("this token in bearer ", this.token)
        let httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer ' + this.token.jwt.valueOf
                'Authorization': 'Bearer ' + this.token
            }),
        };
        return this.httpClient.post<any>(
            this.postUrl,
            JSON.stringify(hrForm),
            httpOptions
        );
    }

    giveRating(hrObject: Interview) {
        this.interview.push(hrObject);
    }
    viewCandidatesById(): Observable<any> {
        let httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
            }),
        };
        return this.httpClient.get<any>(this.getUrl, httpOptions);
    }


    interview = [
        {
            interviewId: 1,
        
            techRating: 1,

            hrRating: 2,
            finalStatus: 'fail',

            // date: '2022-09-09'
        },
    ];




    // getInterviews() { }

    // deleteInterview(index: number) {
    //     this.interview.splice(index, 1);
    // }

    // updateInterview(editInterview: any) { }


}
