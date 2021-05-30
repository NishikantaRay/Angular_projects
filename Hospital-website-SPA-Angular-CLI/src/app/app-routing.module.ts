import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DeptComponent } from './dept/dept.component';
import { NoticeComponent } from './notice/notice.component';
import { SerComponent } from './ser/ser.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "dept", component: DeptComponent},
  {path: "notice", component: NoticeComponent},
  {path: "ser", component: SerComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
