import {Injectable} from '@angular/core';

export interface IGeneral {
    category_id: number;
    company_id: number;
    profile_id: number;
    crop_id: number;
    branch_id: number;
}

export interface IContact {
    fullname: string;
    post_id: string;
}

@Injectable({
    providedIn: 'root'
})
export class ContainerService {
    public methods;
    public profiles;

    currentPost;
    public emails = [];
    public phones = [];

    public contact: IContact = {
        fullname: '',
        post_id: '',
    };

    public date;
    public address;
    public parentCompany;
    public area;

    client: string;
    parent_company: string;
    contact_id: any;
    general_id: any;
    report_id: any;
    branch_id: any;

    public general: IGeneral = {
        category_id: 0,
        company_id: 0,
        profile_id: 0,
        crop_id: 0,
        branch_id: 0
    };

    public currentQuestionnaire: any;


    constructor() {
    }
}
