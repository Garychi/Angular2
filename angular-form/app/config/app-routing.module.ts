/**
 * Created by Mos on 2016/11/22.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FinTechComponent} from '../views/fintech/fintech.component';
import {StocksComponent} from '../views/stocks/stocks.component';
import {EmployeeComponent} from '../views/employee/employee.component';


const routes: Routes = [
    { path: '', redirectTo: '/fintech', pathMatch: 'full' },
    { path: 'fintech',  component: FinTechComponent },
    { path: 'stocks',  component: StocksComponent },
    { path: 'employee',  component: EmployeeComponent }
    // { path: 'detail/:id', component: HeroDetailComponent },
    // { path: 'game',     component: HeroesComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
