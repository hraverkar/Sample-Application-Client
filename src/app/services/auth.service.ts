import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private authSubs$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public get isAuthenticated$(): Observable<boolean> {
    return this.authSubs$.asObservable();
  }
  constructor(private _router: Router, private _httpClient: HttpClient) { }

  public ngOnDestroy(): void {
    this.authSubs$.next(false);
    this.authSubs$.complete();
  }

  public login(userEmail: string, password: string): Observable<void> {
    return from(this._httpClient.post('/api/login', { userEmail, password })).pipe(map((res: any) => {
      this.handleSignInResponse(res)
    }));
  }

  public logout(): void {

  }  

  public register(userEmail: string, password: string, firstName: string, lastName: string): Observable<void> {
    return from(this._httpClient.post('/api/register', { userEmail, password, firstName, lastName })).pipe(map((res: any) => {
      this.handleSignInResponse(res)
    }));
  }

  handleSignInResponse(transaction: any): void {
    if (transaction.status !== 'SUCCESS') {
      throw new Error(`We cannot handle the ${transaction.status} status`);
    }
    this.authSubs$.next(true)
  }
}
