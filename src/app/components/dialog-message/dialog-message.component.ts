import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.css',],
  template: 'passed in {{ data.messages }}',
})
export class DialogMessageComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {messages: string[]}) { }

}
