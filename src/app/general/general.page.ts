import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ApiService} from '../service/api.service';
import {ContainerService} from '../service/container.service';
import * as Materialize from 'angular2-materialize';
import {Router} from '@angular/router';

@Component({
    selector: 'app-general',
    templateUrl: './general.page.html',
    styleUrls: ['./general.page.scss'],
})
export class GeneralPage implements OnInit {

    currentProfile: number;
    currentCrop: number;
    currentCategory: number;
    currentBranch: number;
    currentCompany: string;
    profiles: any;
    crops: any;
    categories: any;
    branches: any;
    date = new Date();
    loadProfiles = false;
    loadCrops = false;
    loadBranch = false;
    loadCategory = false;
    companies: any;
    data = {};
    company = new FormControl();
    area = new FormControl();
    address = new FormControl();
    parent_company = new FormControl();
    autocompleteInit = {};


    constructor(private router: Router,
                private apiService: ApiService,
                private container: ContainerService) {
        this.getProfiles();
        this.getCategory();
        this.getCompanies();

    }

    back() {
        this.router.navigate(['/questionnaires']);
    }

    saveDate() {
        this.container.date = this.date;
    }

    saveParentCompany() {
        this.container.parentCompany = this.parent_company.value;
    }

    saveArea() {
        this.container.area = this.area.value;
    }

    saveAddress() {
        this.container.address = this.address.value;
    }


    initAuto() {
        for (let i = 0; i < this.companies.length; i++) {
            this.data[this.companies[i].name] = null;
        }
        this.autocompleteInit = {
            'data': this.data,
            onAutocomplete: (val) => {
                this.getCompanyId();
            },
        };
    }

    getCompanyId() {
        this.container.client = this.company.value;
        for (let i = 0; i < this.companies.length; i++) {
            if (this.companies[i].name === this.company.value) {
                this.container.general.company_id = this.companies[i].id;
            }
        }
    }

    getCompanies() {
        this.apiService.getCompanies()
            .subscribe((res) => {
                this.companies = res;
                this.initAuto();
            });
    }

    getProfiles() {
        this.loadProfiles = true;
        this.apiService.getProfiles()
            .subscribe((res) => {
                this.profiles = res;
                this.loadProfiles = false;
            });
    }

    getCrop() {
        this.loadCrops = true;
        this.apiService.getCrops(this.currentProfile)
            .subscribe((res) => {
                this.crops = res;
                this.loadCrops = false;
            });
    }

    getBranch() {
        this.loadBranch = true;
        this.apiService.getBranches(this.currentProfile)
            .subscribe((res) => {
                this.branches = res;
                this.loadBranch = false;
            });
    }

    getCategory() {
        this.loadCategory = true;
        this.apiService.getCategories()
            .subscribe((res) => {
                this.categories = res;
                this.loadCategory = false;
            });
    }

    changeProfile(id) {
        this.currentCrop = null;
        this.currentBranch = null;
        this.container.general.profile_id = this.currentProfile;
        console.log(this.currentProfile);
        this.getCrop();
        this.getBranch();
        Materialize.toast('Profile selected: ' + id, 2000);
    }

    changeCrop(id) {
        this.container.general.crop_id = this.currentCrop;
    }

    changeBranch(id) {
        this.container.general.branch_id = this.currentBranch;
    }

    changeCategory(id) {
        this.container.general.category_id = this.currentCategory;
    }

    ngOnInit() {
    }

    moveNext() {
        this.apiService.createGeneral(this.currentCategory, this.container.general.company_id,
            this.currentProfile, this.currentCrop, this.currentBranch)
            .subscribe((res: any) => {
                console.log(res);
                this.container.branch_id = this.currentBranch;
                this.container.general_id = res.id;
                this.router.navigate(['/contact']);
            });

    }

}
