import { Injectable } from '@angular/core';
import { Interview } from '../entities/interview.entity';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable()
export class InterviewService {

    getUrl = 'http://localhost:8004/admin/interviews';
    deleteUrl = 'http://localhost:8004/admin/interview';
    postUrl = 'http://localhost:8004/admin/interview';
    token = {
        "jwt": ""
    }

    constructor(private httpClient: HttpClient, private loginService: LoginService) {

    }

    createNewInterview(interviewForms: any): Observable<any> {
        this.token = this.loginService.getToken();
        let httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer ' + this.token.jwt.valueOf
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1MzE4MDg0NywiaWF0IjoxNjUzMTQ0ODQ3fQ.fBmiuz_C6399ZAHv02IxvaJzFQm1si6O8CFzRlNxfPQ'


            }),
        };
        // console.log("jwt value ", this.token.jwt.valueOf)
        // console.log("jwt value only jwt  ", this.token.jwt)

        return this.httpClient.post<any>(
            this.postUrl,
            JSON.stringify(interviewForms),
            httpOptions
        );
    }

    deleteByInterviewId(interviewId: any): Observable<Boolean> {
        const headers = {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        };
        return this.httpClient.delete<Boolean>(this.deleteUrl + '/' + interviewId, {
            headers: headers,
        });
    }

    //create new service in rest api
    getAllInterviews(): Observable<any> {
        let httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
            }),
        };
        return this.httpClient.get<any>(this.getUrl, httpOptions);
    }

    addInterviews(interviewObject: Interview) {
        this.interview.push(interviewObject);
    }
    getAllInterviewsLocal() {
        return this.interview;
    }


    interview = [
        {
            interviewId: 1,
            candidateId: 100,
            techRating: 1,

            hrRating: 2,
            finalStatus: 'fail',

            // date: '2022-09-09'
        },
    ];




    getInterviews() { }

    deleteInterview(index: number) {
        this.interview.splice(index, 1);
    }

    updateInterview(editInterview: any) { }


}
