import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PolicyComponent } from './policy/policy.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'privacy-policy',
    component:PolicyComponent
  },
  {
    path:'terms-and-conditions',
    component:TermsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
