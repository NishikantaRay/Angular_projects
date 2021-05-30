import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DeptComponent } from './dept/dept.component';
import { SerComponent } from './ser/ser.component';
import { NoticeComponent } from './notice/notice.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component'; 
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
  NavComponent,
  FooterComponent,
  AboutComponent,
  DeptComponent,
  SerComponent,
  NoticeComponent,
  HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgbModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }