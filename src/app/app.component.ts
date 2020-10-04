import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
// declare function SearchFunction(): any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DerivativeAnalysis2';

  isShowDiv = true;
  closeResult: string;

  OpenChooseTrade() {
    this.isShowDiv = false;
  }
  
  PopUpShow = true;
  OpenPopUp() {
    this.PopUpShow = !this.PopUpShow;
  }

  loginShow = false;
  LoginPage(){
    this.loginShow = true;
  }

  isForms=false;
  public OpenForms()
  {
    this.isForms= !this.isForms;
    console.log(this.isForms);
  }

  ngOnInit() {
    // SearchFunction();
  }
  // constructor(private modalService: NgbModal) { }
  // open(content) {
  //   // this.showDerivativeBlock = !this.showDerivativeBlock;
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  //   console.log("Hello modal");
  // }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
 
  
}
