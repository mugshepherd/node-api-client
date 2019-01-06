import { Component } from '@angular/core';
import { Survey } from '../survey';
import { SurveyService } from '../surveys.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent {

  survey = new Survey();
  submitted = false;

  constructor(
    private surveyService: SurveyService,
    private location: Location
  ) { }

  newSurvey(): void {
    this.submitted = false;
    this.survey = new Survey();
  }
  addSurvey() {
    this.submitted = true;
    this.save();
  }
  goBack(): void {
    this.location.back();
  }
  private save(): void {
    console.log(this.survey);
    this.surveyService.addSurvey(this.survey)
      .subscribe();
  }


}
