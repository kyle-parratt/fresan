import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('userIconToggle', [
      state('toggled', style({
        color: '#ffc107',
        'font-size': '18px'
      })),
      state('unToggled', style({
        color: 'black',
        'font-size': '15px'
      })),
      transition('toggled => unToggled', animate(100)),
      transition('unToggled => toggled', animate(200)),
    ]),
    trigger('passwordIconToggle', [
      state('toggled', style({
        color: '#ffc107',
        'font-size': '18px'
      })),
      state('unToggled', style({
        color: 'black',
        'font-size': '15px'
      })),
      transition('toggled => unToggled', animate(100)),
      transition('unToggled => toggled', animate(200)),
    ])
  ]
})
export class LoginComponent implements OnInit {
  private   landingLogoFilePath: string = '../../../../assets/branding/freedl_script_logo_light.png';
  private isLoggingOn: boolean = false;
  private passwordIsVisible: boolean = false;
  private userIconToggledState = 'unToggled';
  private passwordIconToggledState = 'unToggled';

  constructor() { }

  ngOnInit() {
  }

  userIconToggleState(){
    this.userIconToggledState == 'toggled' ? this.userIconToggledState = 'unToggled':
      this.userIconToggledState = 'toggled';
    console.log('toggle');
  }

  passwordIconToggleState(){
    this.passwordIconToggledState == 'toggled' ? this.passwordIconToggledState = 'unToggled':
      this.passwordIconToggledState = 'toggled';
    console.log('toggle');
  }

  changePasswordVisibility(){
    this.passwordIsVisible == true ? this.passwordIsVisible = false :
      this.passwordIsVisible = true;
  }

  onLoginSubmit() {
    this.isLoggingOn = true;
  }

}
