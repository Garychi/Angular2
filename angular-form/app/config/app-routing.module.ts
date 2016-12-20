/**
 * Created by Mos on 2016/11/22.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FinTechComponent} from '../views/fintech/fintech.component';
import {StocksComponent} from '../views/stocks/stocks.component';
import {EmployeeComponent} from '../views/employee/employee.component';
import {OrganizationComponent}  from '../views/organization/organization.component';
import {MyDynamicFormComponent} from '../views/commons/openWindow/MyDynamicFormComponent';


const routes: Routes = [
    { path: '', redirectTo: '/fintech', pathMatch: 'full' },
    { path: 'fintech',  component: FinTechComponent },
    { path: 'stocks',  component: StocksComponent },
    { path: 'employee',  component: EmployeeComponent },
    { path: 'organization',  component: OrganizationComponent },
    { path: 'test',  component: MyDynamicFormComponent },
    // { path: 'detail/:id', component: HeroDetailComponent },
    // { path: 'game',     component: HeroesComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
