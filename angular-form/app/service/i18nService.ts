/**
 * Created by Mos on 2017/1/23.
 */
import {Injectable} from "@angular/core";
import {TranslateService} from 'ng2-translate';


@Injectable()
export class i18nService{

    browserLang = this.translate.getBrowserLang();

    constructor(private translate:TranslateService){
        this.browserLang=this.browserLang=='zh' ? "zh_TW" :this.browserLang;
        this.translate.addLangs(["en", "fr","zh_TW"]);
        this.translate.setDefaultLang('en');
        this.translate.use(this.browserLang.match(/en|fr|zh_TW/) ? this.browserLang : 'en');
    }

    changeLang(lang){
        if(this.browserLang != lang){
            this.translate.use(lang);
        }
    }


}