import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import * as Materialize from 'angular2-materialize';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

    currentPost: string;
    posts = [{value: 'test', name: 'test'}, {value: 'test1', name: 'tes1t'}];
    description = new FormControl();
    pnumber = new FormControl();
    email = new FormControl();
    numbers = [];
    emails = [];

    constructor() {
    }

    changePost(newValue) {
        console.log(this.currentPost);
        Materialize.toast('child select: ' + newValue, 2000);
    }

    addNumber() {
        this.numbers.push(this.pnumber.value);
        this.pnumber.setValue('');
    }

    addEmail() {
        this.emails.push(this.email.value);
        this.email.setValue('');
    }

    ngOnInit() {
    }
}
