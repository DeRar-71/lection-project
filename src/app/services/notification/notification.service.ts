import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private _snackBar: MatSnackBar,
    private translate: TranslateService
  )
  {

  }

  private messageNotify = '';
  private actionText = '';

  private loadTextNotify(key: string) {
    this.translate.get(key).subscribe( (text: string) => {
      this.messageNotify = text;
    });
  }

  public sendSuccessNotify(message: string) {
    this.loadTextNotify(message);
    this.openSnackBar(this.messageNotify, 'success');
  }

  public sendFailNotify(message: string) {
    this.openSnackBar(message, 'fail');
  }

  private openSnackBar(message: string, panelClass: string) {
    this.translate.get('BUTTONS.CLOSE').subscribe( (text: string) => {
      console.log(text)
      this.actionText = text;
    });

    this._snackBar.open(message, this.actionText, {
      duration: 3000,
      panelClass: [panelClass],
    });
  }
}
