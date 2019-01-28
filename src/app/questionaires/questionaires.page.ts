import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../service/config.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-questionaires',
    templateUrl: './questionaires.page.html',
    styleUrls: ['./questionaires.page.scss'],
})
export class QuestionairesPage implements OnInit {

    constructor(
        private config: ConfigService,
        private router: Router) {
    }

    ngOnInit() {
    }

    create() {
        this.router.navigate(['/create']);
    }

    logout() {
        this.config.authToken = null;
        localStorage.clear();
        this.router.navigate(['/login']);
    }

}
