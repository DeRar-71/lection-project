import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private _snackBar: MatSnackBar)
  {

  }
  public sendSuccessNotify(message: string) {
    this.openSnackBar(message, 'success');
  }

  public sendFailNotify(message: string) {
    this.openSnackBar(message, 'fail');
  }

  private openSnackBar(message: string, panelClass: string) {
    this._snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: [panelClass],
    });
  }
}
