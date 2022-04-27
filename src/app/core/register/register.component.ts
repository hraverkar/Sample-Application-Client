import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public password = '';
  public userEmail = '';
  public firstName = '';
  public lastName = '';
  public registerForm = true;
  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit(): void {
  }

  public onRegisterSubmit(): void {
    this.registerForm = true;
    this._authService.register(this.userEmail, this.password, this.firstName, this.lastName).pipe(
      take(1)
    ).subscribe({
      next: (_: any) => {
        this.registerForm = true;
        this._router.navigateByUrl('/login');
      },
      error: (_: any) => this.registerForm = false
    });
  }

  public onLoginClick(): void {
    this._router.navigateByUrl('/login');
  }

}
