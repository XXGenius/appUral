import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ApiService} from '../service/api.service';
import {ContainerService} from '../service/container.service';
import * as Materialize from 'angular2-materialize';
import {Router} from '@angular/router';

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

    contactId: number;

    constructor(private apiService: ApiService,
                private container: ContainerService,
                private router: Router) {
        this.getPosts();
    }

    back() {
        this.router.navigate(['/general']);
    }

    validatePost() {
        if (!this.currentPost) {
            Materialize.toast('Сначала выберите должность.', 2000);
        }
    }

    saveFullName() {
        if (!this.currentPost && this.fullName.invalid) {
            Materialize.toast('Сначала выберите должность, затем введите ФИО контакта.', 2000);
        } else {
            console.log(this.fullName.value);
            this.apiService.createContact(this.fullName.value, this.currentPost).subscribe((res: any) => {
                console.log(res.id);
                this.contactId = res.id;
            });
        }
    }

    getPosts() {
        this.apiService.getPosts()
            .subscribe((res) => {
                this.posts = res;
            });
    }

    changePost(id) {
        this.container.currentPost = this.currentPost;
        Materialize.toast('post select: ' + id, 2000);
    }

    addNumber() {
        if (!this.contactId) {
            Materialize.toast('Сначала выберите должность, затем введите ФИО контакта.', 2000);

        } else {
            if (this.pnumber.value) {
                const phone = '+7' + this.pnumber.value;
                this.apiService.createNumber(phone, this.contactId).subscribe((res) => {
                    console.log(res);
                    this.numbers.push(this.pnumber.value);
                    this.pnumber.setValue('');
                });
            }
        }
    }

    addEmail() {
        if (!this.contactId) {
            Materialize.toast('Сначала выберите должность, затем введите ФИО контакта.', 2000);

        } else {
            if (this.email.value) {
                this.apiService.createEmail(this.email.value, this.contactId).subscribe((res) => {
                    console.log(res);
                    this.emails.push(this.email.value);
                    this.email.setValue('');
                });
            }
        }
    }

    ngOnInit() {
    }

    moveNext() {
        this.container.contact_id = this.contactId;
        this.router.navigate(['/report']);
    }
}
