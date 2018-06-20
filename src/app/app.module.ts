import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import { LandingComponent } from './components/landing/landing/landing.component';
import { LoginComponent } from './components/landing/login/login.component';
import { OnboardingComponent } from './components/landing/onboarding/onboarding.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { UserProfileComponent } from './components/utilities/user-profile/user-profile.component';
import { UserConnectionsComponent } from './components/utilities/user-connections/user-connections.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    OnboardingComponent,
    DashboardComponent,
    UserProfileComponent,
    UserConnectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
