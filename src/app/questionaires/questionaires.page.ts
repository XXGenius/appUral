import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../service/config.service';
import {Router} from '@angular/router';
import {ApiService} from '../service/api.service';
import {ContainerService} from '../service/container.service';

@Component({
    selector: 'app-questionaires',
    templateUrl: './questionaires.page.html',
    styleUrls: ['./questionaires.page.scss'],
})
export class QuestionairesPage implements OnInit {

    questionaires: any;

    constructor(
        private config: ConfigService,
        private router: Router,
        private apiService: ApiService,
        private container: ContainerService) {
        this.getQuestionnaires();
    }

    ngOnInit() {
        console.log('test');
    }

    create() {
        this.router.navigate(['/general']);
    }

    questionnaireDetails(id) {
        console.log(id);
        this.container.currentQuestionnaire = id;
        this.router.navigate(['/questionnaire/']);
    }

    getQuestionnaires() {
        this.apiService.getQuestionnaires().subscribe((res) => {
            console.log(res);
            this.questionaires = res;
        });
    }

    logout() {
        this.config.authToken = null;
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    goQ(id) {
        console.log(id);
    }

}
