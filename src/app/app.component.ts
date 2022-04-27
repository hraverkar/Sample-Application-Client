import { SnackbarService } from './services/snackbar.service';
import { VisiterService } from './services/visiter.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'Sample Application';
  public ipAddress: string;
  public countryName: string;
  public countryCode: string;
  public timeOut = 30000;
  public constructor(private _visiterService: VisiterService, private _snackBarService: SnackbarService) { }
  public ngOnInit(): void {
    this.showMessageSuccess();
    this.showDiscountHeader();
  }

  public showMessageSuccess() {
    this._visiterService.getIpAddress().subscribe((res: any) => {
      this.ipAddress = res.body.ip;
      this._snackBarService.show(`Your IP Address is ${this.ipAddress}`);
    });
  }

  public showDiscountHeader() {
    this._visiterService.getCountryAndInfo().subscribe((res: any) => {
      this.countryName = res.body.country_name;
      this.countryCode = res.body.country_code.toLowerCase();
    });
  }

  public ngOnDestroy(): void {
  }
}
