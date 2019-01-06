import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Survey } from './survey';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class SurveyService {
    private surveysUrl = 'http://localhost:8081/api/surveys';
    constructor(
        private http: HttpClient
    ) {}

    getSurveys(): Observable<Survey[]> {
        return this.http.get<Survey[]>(this.surveysUrl);
    }
    getSurvey(id: string): Observable<Survey> {
        const url = `${this.surveysUrl}/${id}`;
        return this.http.get<Survey>(url);
    }

    addSurvey(survey: Survey): Observable<Survey> {
        return this.http.post<Survey>(this.surveysUrl, survey, httpOptions);
    }

    deleteSurvey(survey: Survey | string): Observable<Survey> {
        const id = typeof survey === 'string' ? survey : survey._id;
        const url = `${this.surveysUrl}/${id}`;
        return this.http.delete<Survey>(url, httpOptions);
    }

    updateSurvey(survey: Survey): Observable<any> {
        const url = `${this.surveysUrl}/${survey._id}`
        return this.http.put(url, survey, httpOptions);
    }
}
