import { RouterModule, Routes } from '@angular/router';
import {SurveyListComponent} from './surveys/survey-list/survey-list.component';
import {SurveyDetailsComponent} from './surveys/survey-details/survey-details.component';
import {NewSurveyComponent} from './surveys/new-survey/new-survey.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'surveys',
        component: SurveyListComponent
    },
    {
        path: 'survey/add',
        component: NewSurveyComponent
    },
    {
        path: 'surveys/:id',
        component: SurveyDetailsComponent
    },
    {
        path: '',
        redirectTo: 'surveys',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
