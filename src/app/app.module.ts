import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { SurveyListComponent } from './surveys/survey-list/survey-list.component';
import { SurveyDetailsComponent } from './surveys/survey-details/survey-details.component';
import { NewSurveyComponent } from './surveys/new-survey/new-survey.component';
import { AppRoutingModule } from './app.routing';
import { SurveyService } from './surveys/surveys.service';


@NgModule({
  declarations: [
    AppComponent,
    SurveyListComponent,
    SurveyDetailsComponent,
    NewSurveyComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
