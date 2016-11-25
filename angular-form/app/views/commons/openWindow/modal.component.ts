/**
 * Created by Mos on 2016/11/15.
 */
import { Component ,ViewChild} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';


@Component({
    moduleId:module.id,
    selector:'open-win',
    templateUrl:'modal.component.html'
})

export class ModalComponent{
    @ViewChild('childModal') public childModal:ModalDirective;

    public showChildModal():void {
        this.childModal.show();
    }

    public hideChildModal():void {
        this.childModal.hide();
    }
}