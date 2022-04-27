import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements AfterViewInit {
  @Input() public country: string;
  @Input() public countryCode: string;
  public closeHeader: boolean;
  constructor() {
    this.closeHeader = true;
  }

  public ngAfterViewInit(): void {
  }

  public onCloseClick(): void {
    this.closeHeader = false;
  }
}