import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    authToken: string;
    apiUrl: string;
    headers;

    constructor(
        private http: HttpClient,
        private  config: ConfigService
    ) {
        this.apiUrl = this.config.apiUrl;
        console.log(this.config.authToken);
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Authorization': this.config.authToken
        });
    }

    createPhoto(photo, report_id) {
        return this.http.post(this.config.apiUrl + 'photo/create', {
            photo: photo,
            report_id: report_id
        }, {headers: this.headers});
    }

    getQuestionnaires() {
        return this.http.get(this.config.apiUrl + 'questionnaire/get-all', {headers: this.headers});

    }

    getQuestionnaire(id) {
        return this.http.get(this.config.apiUrl + 'questionnaire/get/' + id, {headers: this.headers});
    }


    getProfiles() {
        return this.http.get(this.config.apiUrl + 'profile/get', {headers: this.headers});
    }

    getPosts() {
        return this.http.get(this.config.apiUrl + 'post/get-all', {headers: this.headers});
    }

    getCompanies() {
        return this.http.get(this.config.apiUrl + 'company/get-all', {headers: this.headers});
    }

    getCategories() {
        return this.http.get(this.config.apiUrl + 'category/get-all', {headers: this.headers});
    }

    getBranches(profile_id) {
        return this.http.get(this.config.apiUrl + 'branch/get/' + profile_id, {headers: this.headers});
    }

    getCrops(profile_id) {
        return this.http.get(this.config.apiUrl + 'crop/get/' + profile_id, {headers: this.headers});
    }

    getGoals() {
        return this.http.get(this.config.apiUrl + 'goal/get-all', {headers: this.headers});

    }

    getProducts(profile_id) {
        return this.http.get(this.config.apiUrl + 'product/get/' + profile_id, {headers: this.headers});
    }

    getMethods() {
        return this.http.get(this.config.apiUrl + 'purchase/get-all', {headers: this.headers});
    }

    getSuppliers(method_id) {
        return this.http.get(this.config.apiUrl + 'supplier/get/' + method_id, {headers: this.headers});
    }

    getServices() {
        return this.http.get(this.config.apiUrl + 'service/get-all', {headers: this.headers});
    }


    createReport(summary, volume, satisfied, comment, goal_id, product_id, purchase_method_id, supplier_id) {
        return this.http.post(this.config.apiUrl + 'report/create', {
            summary: summary,
            volume: volume,
            satisfied: satisfied,
            comment: comment,
            goal_id: goal_id,
            product_id: product_id,
            purchase_method_id: purchase_method_id,
            supplier_id: supplier_id
        }, {headers: this.headers});
    }

    createGeneral(category_id, company_id, profile_id, crop_id, branch_id) {
        return this.http.post(this.config.apiUrl + 'general/create', {
            category_id: category_id,
            company_id: company_id,
            profile_id: profile_id,
            crop_id: crop_id,
            branch_id: branch_id
        }, {headers: this.headers});
    }

    createContact(fullname, post_id) {
        return this.http.post(this.config.apiUrl + 'contact/create', {
            fullname: fullname,
            post_id: post_id
        }, {headers: this.headers});
    }

    createNumber(number, contact_id) {
        return this.http.post(this.config.apiUrl + 'number/create', {
            number: number,
            contact_id: contact_id
        }, {headers: this.headers});
    }

    createEmail(email, contact_id) {
        return this.http.post(this.config.apiUrl + 'email/create', {
            email: email,
            contact_id: contact_id
        }, {headers: this.headers});
    }

    createServices(service_id, report_id) {
        return this.http.post(this.config.apiUrl + 'service-report/create', {
            service_id: service_id,
            report_id: report_id
        }, {headers: this.headers});
    }

    createQuestionnaire(client, area, address, parent_company, contact_id, general_id, report_id, branch_id) {
        return this.http.post(this.config.apiUrl + 'questionnaire/create', {
            client: client,
            area: area,
            address: address,
            parent_company: parent_company,
            contact_id: contact_id,
            general_id: general_id,
            report_id: report_id,
            branch_id: branch_id
        }, {headers: this.headers});
    }

}
