/**
 * Created by Mos on 2017/4/14.
 */
import {Component} from '@angular/core'
// import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'myDialog',
    templateUrl: 'dialog.component.html'
})

export class DialogComponent{
    selectedOption: string;

    // constructor(public dialog: MdDialog) {}

    openDialog() {
        // let dialogRef = this.dialog.open(DialogResultExampleDialog);
        // dialogRef.afterClosed().subscribe(result => {
        //     this.selectedOption = result;
        // });
    }
}


@Component({
    moduleId:module.id,
    selector: 'dialog-result-example-dialog',
    templateUrl: './dialog-result-example-dialog.html',
})

export class DialogResultExampleDialog {
    // constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}
