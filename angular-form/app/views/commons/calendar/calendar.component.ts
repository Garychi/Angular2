/**
 * Created by Mos on 2016/12/20.
 */
import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'myCalendar',
    templateUrl: 'calendar.component.html'

})

export class CalendarComponent {

    dateValue :Date;
    dateLabel:string;

    constructor(){
        this.dateLabel='日期';
    }

    public getDateValue(): Date{
        return this.dateValue;
    }
}