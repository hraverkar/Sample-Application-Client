import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackbar: MatSnackBar) { }

  public error(message: string) {
    this._snackbar.open(message, undefined, {
      panelClass: ['snackbar-error'], duration: 2000,
      horizontalPosition: 'center', verticalPosition: 'bottom'
    });
  }

  public success(message: string) {
    this._snackbar.open(message, undefined, {
      panelClass: ['snackbar-success'], duration: 2000,
      horizontalPosition: 'center', verticalPosition: 'bottom'
    });
  }

  public warning(message: string) {
    this._snackbar.open(message, undefined, {
      panelClass: ['snackbar-warning'], duration: 2000,
      horizontalPosition: 'center', verticalPosition: 'bottom'
    });
  }

  public show(message: string) {
    this._snackbar.open(message, undefined, {
      panelClass: ['snackbar-show'], duration: 3000,
      horizontalPosition: 'center', verticalPosition: 'bottom'
    });
  }

  public info(message: string) {
    this._snackbar.open(message, undefined, {
      panelClass: ['snackbar-info'], duration: 2000,
      horizontalPosition: 'center', verticalPosition: 'bottom'
    });
  }
}
