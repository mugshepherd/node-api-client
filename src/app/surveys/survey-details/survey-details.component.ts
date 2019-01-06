import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { SurveyService } from '../surveys.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent implements OnInit {
  survey = new Survey();
  submitted = false;
  message: string;

  constructor(
    private surveyService: SurveyService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.surveyService.getSurvey(id)
      .subscribe(survey => this.survey = survey);
  }

  update(): void {
    this.submitted = true;
    this.surveyService.updateSurvey(this.survey)
      .subscribe(result => this.message = 'Survey Updated!');
  }

  delete(): void {
    this.submitted = true;
    this.surveyService.deleteSurvey(this.survey._id)
      .subscribe(result => this.message = 'Survey deleted!');
  }

  goBack(): void {
    this.location.back();
  }

}
