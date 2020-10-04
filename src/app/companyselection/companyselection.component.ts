import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit, Output } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { concat, Observable } from 'rxjs';
import { BackendDerivatives, derivatives, futuresderivatives, optionsderivatives } from 'src/derivatives';

import { UtilityService } from '../utility.service';
@Component({
  selector: 'app-companyselection',
  templateUrl: './companyselection.component.html',
  styleUrls: ['./companyselection.component.css']
})
export class CompanyselectionComponent implements OnInit {


  constructor(private primengConfig: PrimeNGConfig, private utility: UtilityService) { }

  ngOnInit(): void {
  }

  displayBasic: boolean;
  // showBasicDialog() {
  //   this.displayBasic = true;
  // }

  FuturesData: futuresderivatives = {
    companyName: '',
    futuresCat: '',
    underlyingAsset: '',
    lotQuantity: 0,
    futuresPrice: 0

  };

  OptionsData: optionsderivatives = {
    companyName: '',
    optionsCat: '', //long short
    optionsType: '', //call put
    underlyingAsset: '',
    lotQuantity: 0,
    strikePrice: 0,
    premium: 0
  };

  showBasicDialogamazon() {
    this.displayBasic = true;
    this.FuturesData.companyName = "Amazon"
    this.OptionsData.companyName = "Amazon"
    
}
showBasicDialoggoogle() {
  this.displayBasic = true;
  this.FuturesData.companyName = "Google"
  this.OptionsData.companyName = "Google"
  
}
showBasicDialogwalmart() {
  this.displayBasic = true;
  this.FuturesData.companyName = "Walmart"
  this.OptionsData.companyName = "Walmart"
  
}

  onAssetChange(event) {
    this.FuturesData.underlyingAsset = event.target.value
    this.OptionsData.underlyingAsset = event.target.value
  }

  onFuturesMarketChange(event) {
    this.FuturesData.futuresCat = event.target.value
    // console.log(this.FormData.futuresCat)
  }

  onOptionMarketChange(event) {
    this.OptionsData.optionsCat = event.target.value
  }


  onOptionTypeChange(event) {
    this.OptionsData.optionsType = event.target.value

  }

  strikeprice(event) {
    this.OptionsData.strikePrice = event.target.value


  }

  futureslist: Array<futuresderivatives> = [];
  optionsList: optionsderivatives[] = [];
  futuressummaryclicked: boolean = false;
  optionssummaryclicked: boolean = false;
  summarydisplay:boolean = false;
  createFuturesList() {
    let fd1: futuresderivatives = {
      companyName: '',
      futuresCat: '',
      underlyingAsset: '',
      lotQuantity: 0,
      futuresPrice: 0
    }
    fd1.companyName = this.FuturesData.companyName;
    fd1.lotQuantity = this.FuturesData.lotQuantity;
    fd1.futuresCat = this.FuturesData.futuresCat;
    fd1.futuresPrice = this.FuturesData.futuresPrice;
    fd1.underlyingAsset = this.FuturesData.underlyingAsset;
    this.futureslist.push(fd1);
    this.futuressummaryclicked = true;
    this.summarydisplay = true;
  }

  createOptionsList() {
    let od: optionsderivatives = {
      companyName: '',
      optionsCat: '', //long short
      optionsType: '', //call put
      underlyingAsset: '',
      lotQuantity: 0,
      strikePrice: 0,
      premium: 0
    }

    od.companyName = this.OptionsData.companyName;
    od.lotQuantity = this.OptionsData.lotQuantity;
    od.optionsCat = this.OptionsData.optionsCat;
    od.strikePrice = this.OptionsData.strikePrice;
    od.underlyingAsset = this.OptionsData.underlyingAsset;
    od.optionsType = this.OptionsData.optionsType;
    od.premium = this.OptionsData.premium;

    this.optionsList.push(od);
    this.optionssummaryclicked = true;
    this.summarydisplay = true;
  }


  analysisclicked: boolean = false;

  payOffResult: BackendDerivatives = {
    breakEvenPoints: [],
    payOffCoordinates: [],
    tradeLoss: '',
    tradeMargin: 0,
    tradeProfit: ''

  } //declaring the payoff chart array
  showlloader:boolean=false;
  sendDerivatives() {
    let totalList: derivatives = {
      futuresTrade: [],
      optionsTrade: []
    };
    this.displayBasic = false;

    totalList.futuresTrade = this.futureslist;
    totalList.optionsTrade = this.optionsList;
    console.log(totalList);

    this.utility.sendDerivative(totalList);
    // var mybody = document.getElementsByTagName('body')
    // mybody.classList.add("busy");
    document.body.style.cursor="wait"

    setTimeout(() => {
     
      this.utility.getDerivatives();
      document.body.style.cursor="default"
    },
      10000);
  

    console.log("result" + this.payOffResult);

  }



}
