/**
 * Created by Mos on 2017/1/12.
 */
import {Component,OnInit} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {i18nService} from '../service/i18nService';

@Component({
    moduleId:module.id,
    selector: 'setting',
    templateUrl:'setting.component.html',
    styleUrls:['setting.css']
})

export class SettingComponent implements OnInit{

    constructor(private translate: TranslateService,private i18nService:i18nService) {

    }

    ngOnInit() {

    }

    changeLang(lang){
        console.log('setting change lang');
        this.i18nService.browserLang=lang;
        this.i18nService.changeLang(this.i18nService.browserLang);
    }

    resetSetting(){

    }
}