import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from "./components/landing/landing/landing.component";
import {OnboardingComponent} from "./components/landing/onboarding/onboarding.component";
import {LoginComponent} from "./components/landing/login/login.component";

const routes: Routes = [
  {path: 'landing', component: LandingComponent, data: { state: 'landing' }},
  {path: 'sign-up', component: OnboardingComponent, data: { state: 'sign-up' }},
  {path: 'login', component: LoginComponent, data: { state: 'login' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
