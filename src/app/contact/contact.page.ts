import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ApiService} from '../service/api.service';
import {ContainerService} from '../service/container.service';
import * as Materialize from 'angular2-materialize';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
    currentPost: string;
    posts: any;
    public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
    fullName = new FormControl();
    pnumber = new FormControl();
    email = new FormControl();
    numbers = [];
    emails = [];

    constructor(private apiService: ApiService,
                private container: ContainerService) {
        this.getPosts();
    }

    saveFullName() {
        this.container.contact.fullname = this.fullName.value;
    }

    getPosts() {
        this.apiService.getPosts()
            .subscribe((res) => {
                this.posts = res;
                this.loadData();
            });
    }

    changePost(id) {
        this.container.currentPost = this.currentPost;
        Materialize.toast('post select: ' + id, 2000);
    }

    addNumber() {
        if (this.pnumber.value) {
            this.numbers.push(this.pnumber.value);
            this.pnumber.setValue('');
            this.container.phones.push(this.pnumber.value);
        }
    }

    loadData() {
        if (this.container.contact.post_id) {
            this.currentPost = this.container.contact.post_id;
        }
        this.fullName.setValue(this.container.contact.fullname);
        this.numbers = this.container.phones;
        this.emails = this.container.emails;
    }

    addEmail() {
        if (this.email.value) {
            this.emails.push(this.email.value);
            this.email.setValue('');
            this.container.emails.push(this.email.value);
        }
    }

    ngOnInit() {
    }
}
