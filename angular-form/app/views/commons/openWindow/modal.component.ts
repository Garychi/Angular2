/**
 * Created by Mos on 2016/11/15.
 */
import { Component ,ViewChild,OnInit} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
// import {CalendarComponent} from "../calendar/calendar.component";


@Component({
    moduleId:module.id,
    selector:'open-win',
    templateUrl:'modal.component.html'
})

export class ModalComponent implements OnInit{
    // @ViewChild('childModal') public childModal:ModalDirective;
    //
    // private startDate :Date;
    //
    // private values :Map<string,Object>;
    //
    // constructor(){
    //
    // }

    ngOnInit():void{

    }

    // public showChildModal():void {
    //     this.childModal.show();
    // }
    //
    // public hideChildModal():void {
    //     this.childModal.hide();
    // }
    //
    // private add(){
    //     console.log(this.startDate);
    // }
}