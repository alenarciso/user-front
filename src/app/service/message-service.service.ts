import { Injectable } from '@angular/core';
import { MatSnackBar }  from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  constructor(private snack: MatSnackBar) { }

  exibir(msg: string): void{
   this.snack.open(msg,'X', {
     duration: 3000,
     horizontalPosition: 'right',
     verticalPosition: 'top'
   })
  }
}