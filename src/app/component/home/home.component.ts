import { VisiterService } from './../../services/visiter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _visiterService: VisiterService) { }
  public ipAddress: string;
  ngOnInit(): void {
  }

  public btnClick() {

  }
}
