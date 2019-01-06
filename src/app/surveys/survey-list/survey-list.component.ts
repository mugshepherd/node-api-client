import { Component, OnInit } from '@angular/core';
import {Survey} from '../survey';
import {SurveyService} from '../surveys.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  surveys: Survey[];
  constructor(
    private surveyService: SurveyService
  ) { }

  ngOnInit(): void {
    this.getSurveys();
  }

  getSurveys() {
    return this.surveyService.getSurveys()
    .subscribe(
      surveys => {
        console.log(surveys);
        this.surveys = surveys;
      }
    );
  }
}
