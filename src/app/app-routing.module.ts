import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { TestComponent } from './component/test/test.component';
import { MessageComponent } from './component/message/message.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes = [
  {path:'heroes',component:TestComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'detail/:id',component:HeroDetailComponent},
  {path:'', redirectTo:'/dashboard',pathMatch:'full'},
  {path:'messages',component:MessageComponent},
  {path:'**', redirectTo:'/dashboard'}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule],
  declarations: []
})
export class AppRoutingModule { }
