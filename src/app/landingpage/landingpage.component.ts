import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  QueryData:any={};
  constructor() { }

  ngOnInit(): void {
  }
  submitQuery(event){
    //to prevent the default action
    event.preventDefault();
   
  }
}
