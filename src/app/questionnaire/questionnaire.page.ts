import {Component, OnInit} from '@angular/core';
import {ApiService} from '../service/api.service';
import {ContainerService} from '../service/container.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-questionnaire',
    templateUrl: './questionnaire.page.html',
    styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements OnInit {

    questionnaire: any;
    showSpinner = true;

    constructor(private router: Router,
                private container: ContainerService,
                private apiService: ApiService) {
        console.log(container.currentQuestionnaire);
        this.apiService.getQuestionnaire(container.currentQuestionnaire).subscribe((res) => {
            console.log(res);
            this.questionnaire = res;
            this.showSpinner = false;
        });
    }

    back() {
        this.router.navigate(['/questionnaires']);
    }


    ngOnInit() {

    }

}
