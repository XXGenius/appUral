import {Component} from '@angular/core';
import {ConfigService} from '../service/config.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(activatedRoute: ActivatedRoute,
                router: Router,
                private config: ConfigService) {
        if (config.authToken) {
            router.navigate(['/questionnaires']);
        } else {
            router.navigate(['/login']);
        }
    }
}
