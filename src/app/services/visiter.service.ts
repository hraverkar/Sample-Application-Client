import { environment } from './../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, take, tap, throwError } from 'rxjs';
import { Icountry } from '../interfaces/icountry';

@Injectable({
  providedIn: 'root'
})
export class VisiterService {
  public ipAddress: string;
  constructor(private _httpClient: HttpClient) { }

  public getIpAddress() {
    return this._httpClient.get(environment.ipAddressURL, { params: new HttpParams({}), observe: 'response' })
      .pipe(
        retry(3),
        catchError(this.handleError),
        tap((res) => { })
      );
  }

  public getCountryAndInfo() {
    return this._httpClient.get<Icountry>(environment.countryURL, { params: new HttpParams({}), observe: 'response' })
      .pipe(
        retry(3),
        catchError(this.handleError),
        tap((res) => { })
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknow error!;';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error :${error.error.message}`;
    } else {
      errorMessage = `Error : ${error.status} \nMessage :${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
