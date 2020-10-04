import { Component, OnInit } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private utility: UtilityService) { }

  pageIndex=0;

  items: MenuItem[] = [
    {
      label: 'Select a company',
      routerLink: 'trades'
    },
    {
      label: 'Analysis',
      routerLink: 'analysis'
    },
    {
      label: 'Payoff Chart'

    }

  ];

  isLoggedIn: boolean;

  loggedOut(){
    this.utility.setIsLoggedOut();
  }
  ngOnInit() {
    this.isLoggedIn= this.utility.getIsLoggedIn();
  }

}
