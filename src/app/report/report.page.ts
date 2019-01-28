import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ApiService} from '../service/api.service';
import {ContainerService} from '../service/container.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-report',
    templateUrl: './report.page.html',
    styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

    currentGoal: string;
    goals: any;
    summary = new FormControl();
    volume = new FormControl();
    comment = new FormControl();
    currentProduct: string;
    products: any;
    currentMethod: string;
    methods: any;
    satisfied: boolean;
    currentServices: any;
    services: any;
    currentSupplier: string;
    suppliers: any;
    loadMethod = false;
    loadProducts = false;
    loadServices = false;

    reportId: any;

    constructor(private apiService: ApiService,
                private router: Router,
                private container: ContainerService) {
        this.getGoals();
        this.getMethods();
        this.getProducts();
        this.getServices();
        console.log(this.container);
    }

    changeGoal() {
        console.log(this.currentGoal);
    }

    changeProduct() {
        console.log(this.currentProduct);
    }

    changeSatisfied() {
    }

    changeMethod() {
        this.getSuppliers();
    }

    changeService() {
        console.log(this.currentServices);
    }

    changeSupplier() {

    }

    getSuppliers() {
        this.apiService.getSuppliers(this.currentMethod)
            .subscribe(res => this.suppliers = res);
    }

    getProducts() {
        this.loadProducts = true;
        this.apiService.getProducts(this.container.general.profile_id)
            .subscribe(res => this.products = res);
        this.loadProducts = false;
    }

    getMethods() {
        this.loadMethod = true;
        this.apiService.getMethods()
            .subscribe((res) => {
                this.methods = res;
                this.loadMethod = false;
            });
    }

    getServices() {
        this.loadServices = true;
        this.apiService.getServices()
            .subscribe((res) => {
                this.services = res;
                this.loadServices = false;
            });
    }


    getGoals() {
        this.apiService.getGoals()
            .subscribe(res => this.goals = res);
    }


    moveNext() {
        this.createReport();
    }

    createReport() {
        this.apiService.createReport(this.summary.value, this.volume.value, this.satisfied,
            this.comment.value, this.currentGoal, this.currentProduct, this.currentMethod, this.currentSupplier)
            .subscribe((res: any) => {
                console.log(res);
                this.reportId = res.id;
                this.createServices();
            });

    }

    createServices() {
        for (let i = 0; i < this.currentServices.length; i++) {
            this.apiService.createServices(this.currentServices[i], this.reportId)
                .subscribe(res => console.log(res));
        }
        this.createQuestionnaire();
    }

    createQuestionnaire() {
        this.apiService.createQuestionnaire(this.container.client, this.container.area, this.container.address,
            this.container.parentCompany, this.container.contact_id, this.container.general_id, this.reportId, this.container.branch_id)
            .subscribe((res: any) => {
                console.log(res);
                this.router.navigate(['/questionnaires']);
            });
    }

    ngOnInit() {
    }
}
