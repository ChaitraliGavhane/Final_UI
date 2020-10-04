import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendDerivatives, derivatives, payoffType } from 'src/derivatives';
import { Credentials } from 'src/loginPayload'

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private myHttp: HttpClient, private router: Router) { }

  isLoggedIn: boolean = false;

  login(credentials: Credentials) {
    let httpHeaders = new HttpHeaders().set('allow-origin-access-control', '*')
      .set('Content-type', 'application/json');
    return this.myHttp
      .post('http://localhost:8080/trades/login', JSON.stringify(credentials), { headers: httpHeaders })
      .subscribe(data => {
        if (data == true) {
          this.router.navigateByUrl('/main');
          this.setIsLoggedIn();
        } if (data == false) {
          window.alert('Username And Password Incorrect');
          //          this.router.navigateByUrl();
        }
      }, err => {
        //in the failuer scenario
        console.log(err);
      });

  }
  pay: BackendDerivatives = {
    breakEvenPoints: [],
    payOffCoordinates: [],
    tradeLoss: '',
    tradeMargin: 0,
    tradeProfit: '',
  };

  summary: derivatives;
  breakEvenPoints: Array<number>;
  payOffCoordinates: Array<payoffType>;
  tradeLoss: string;
  tradeMargin: number;
  tradeProfit: string;
  sendDerivative(derivative: derivatives) {
    this.myHttp
      .post('http://localhost:8080/trades/payoff', derivative)
      .subscribe(data => {
        // let breakEvenPoints: Array<number>;
        this.summary = derivative;
        //@ts-ignore
        this.breakEvenPoints = data.breakEvenPoints
        //@ts-ignore
        this.payOffCoordinates = data.payOffCoordinates
//@ts-ignore
        this.tradeLoss = data.tradeLoss
        //@ts-ignore
        this.tradeMargin = data.tradeMargin
        //@ts-ignore
        this.tradeProfit = data.tradeProfit
        console.log("just data" + data)
        console.log(data)
        this.Makeinterface(this.breakEvenPoints ,this.payOffCoordinates,this.tradeLoss,this.tradeMargin,this.tradeProfit);

        console.log(this.tradeLoss);

        console.log('derivatives submitted successfully');

      }, err => {
        //in the failuer scenario
        console.log(err);

      });
  
  }
  
  Makeinterface(a:number[],b:payoffType[],c:string,d:number,e:string) {
    this.pay.breakEvenPoints = a
    this.pay.payOffCoordinates = b;
    this.pay.tradeLoss = c;
    this.pay.tradeMargin = d;
    this.pay.tradeProfit = e;
    console.log("pay func" + this.pay)
  }
  //get dervivative result from backend
  getDerivatives(): void {

    this.router.navigate(['/analysis'],{state:this.pay});
  }

  setIsLoggedIn() {
    this.isLoggedIn = true;
  }
  setIsLoggedOut() {
    this.isLoggedIn = false;
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

}




