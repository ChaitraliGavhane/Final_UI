import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendDerivatives, derivatives, payoffType } from 'src/derivatives';
import { CompanyselectionComponent } from '../companyselection/companyselection.component';
import { UtilityService } from '../utility.service';

declare function callpayoffchart(pc):any;

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  payoffvalue: boolean = false;
  // payOffResult: BackendDerivatives[] = []; //declaring the payoff chart array

  constructor(private route: ActivatedRoute, private router: Router, private utility: UtilityService) { }

  payOffResult: BackendDerivatives;
  summaryValue:derivatives;
  NetLoss: string = '';
  NetProfit: string = '';
  margin: number = 0;
  bp : [] = []
  pc : payoffType[];

  isLoggedIn: boolean;

  loggedOut(){
    this.utility.setIsLoggedOut();
  }

  ngOnInit(): void {

    this.isLoggedIn= this.utility.getIsLoggedIn();
    this.NetLoss = history.state.tradeLoss;
    this.NetProfit = history.state.tradeProfit;
    this.margin = history.state.tradeMargin;
    this.bp = history.state.breakEvenPoints;
    
    this.pc = history.state.payOffCoordinates
this.summaryValue = this.utility.summary;
 
  }

  ngAfterViewInit() :void {
    callpayoffchart(this.pc)
  }
  // payoffchartclicked() {
  //   this.payoffvalue = true;

  // }
}
