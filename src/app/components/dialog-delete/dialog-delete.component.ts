import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css'],
  template: 'passed in {{ data.name }}',
})
export class DialogDeleteComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}) { }

}
