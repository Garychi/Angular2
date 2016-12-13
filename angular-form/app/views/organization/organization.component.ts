/**
 * Created by Mos on 2016/12/12.
 */
import {Component} from '@angular/core';
import {OrganizationService} from '../../service/OrganizationService';

import {Organization} from './Organization';


@Component({
    moduleId: module.id,
    selector: 'organization',
    templateUrl: 'organization.component.html'
})

export class OrganizationComponent{

    Organizations:Organization[];
    keyword:string;
    constructor(private organizationService:OrganizationService){

    }

    private searchOrg(){
        this.organizationService.search(this.keyword)
            .subscribe(response =>this.Organizations=response,
            error =>console.log(error),
            function complete() {
                console.log('complete');
            })
    }

    private insertOrg(){
        this.organizationService.insert(this.keyword)
            .subscribe(response =>this.Organizations=response,
                error =>console.log(error),
                function complete() {
                    console.log('complete');
                })
    }

    private updateOrg(){

    }

    private deleteOrg(){

    }
}