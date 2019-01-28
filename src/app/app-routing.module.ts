import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: './home/home.module#HomePageModule'},
    {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
    {path: 'questionnaires', loadChildren: './questionaires/questionaires.module#QuestionairesPageModule'},
    {path: 'general', loadChildren: './general/general.module#GeneralPageModule'},
    {path: 'contact', loadChildren: './contact/contact.module#ContactPageModule'},
    {path: 'report', loadChildren: './report/report.module#ReportPageModule'},
    {path: 'questionnaire', loadChildren: './questionnaire/questionnaire.module#QuestionnairePageModule'},
    {path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
