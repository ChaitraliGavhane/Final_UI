import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MenuComponent } from './menu/menu.component';
import { CompanyselectionComponent } from './companyselection/companyselection.component';
// import { HomePageComponent } from './home-page/home-page.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from '../../node_modules/primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnalysisComponent } from './analysis/analysis.component';
import { TabViewModule } from 'primeng/tabview';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingpageComponent,
    MenuComponent,
    CompanyselectionComponent,

    AnalysisComponent,
    MainComponent

    // HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    TabViewModule,
    HttpClientModule,
    FormsModule,
    StepsModule,
    ToastModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
