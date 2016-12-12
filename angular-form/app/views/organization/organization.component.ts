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

    constructor(private organizationService:OrganizationService){

    }

    private searchOrg(){
        let keyword="";
        this.organizationService.search(keyword)
            .subscribe(response =>this.Organizations=response,
            error =>console.log(error),
            function complete() {
                console.log('complete');
            })
    }

    private insertOrg(){

    }

    private updateOrg(){

    }

    private deleteOrg(){

    }
}