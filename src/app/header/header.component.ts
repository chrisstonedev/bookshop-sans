import { Component, OnInit } from '@angular/core';
import {SessionService} from "../session.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn = false;

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.loggedIn = this.sessionService.loggedIn;
  }

}
