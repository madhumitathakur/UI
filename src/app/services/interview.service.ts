import { Injectable } from '@angular/core';
import { Interview } from '../entities/interview.entity';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class InterviewService {

    getUrl = 'http://localhost:8004/admin/interviews';
    deleteUrl = 'http://localhost:8004/admin/interview';
    postUrl = 'http://localhost:8004/admin/interview';

    constructor(private httpClient: HttpClient) { }

    createNewInterview(interviewForms: any): Observable<any> {
        let httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1MzE3MTA3NSwiaWF0IjoxNjUzMTM1MDc1fQ.cGqasa2aAt0j056h7NaZNtDv7Z-ARrD6SnEeAcptONo'
            }),
        };
        //this.addInterviews(product);
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
