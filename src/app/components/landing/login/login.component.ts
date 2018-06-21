import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Router, RouterEvent} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  //Animations for Icons
  animations: [
    trigger('userIconToggle', [
      state('toggled', style({
        color: '#fed418',
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
        color: '#fed418',
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
  // Booleans
  private isLoggingOn: boolean = false;
  private passwordIsVisible: boolean = false;
  private userHasEnteredInput: boolean = false;
  private hidePrompt: boolean = false;

  // States
  private userIconToggledState = 'unToggled';
  private passwordIconToggledState = 'unToggled';
  private passwordState = 'password';

  // References
  private windowHeightRef: number;
  @ViewChild('usernameEditRef') usernameEditRef:ElementRef;
  @ViewChild('passwordEditRef') passwordEditRef:ElementRef;

  constructor(private routerModule: Router) {}

  ngOnInit() {
    this.windowHeightRef = window.innerHeight;
  }

  // Event listener for when keyboard is up or down
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    alert(event.target.innerHeight +' is bigger than '+ this.windowHeightRef);
    if(event.target.innerHeight < this.windowHeightRef){
      this.hidePrompt = true;
      if(this.passwordIconToggledState === 'toggled'){
        this.passwordEditRef.nativeElement.focus();
      } else {
        this.usernameEditRef.nativeElement.focus();
      }
    } else {
      this.usernameEditRef.nativeElement.blur();
      this.passwordEditRef.nativeElement.blur();
      if(this.passwordIsVisible){
        this.changePasswordVisibility();
      }
      this.hidePrompt = false;
    }
  }

  // Method to check if user is entering data and if it should navigate back
  navigateBackwards(){
    if(this.usernameEditRef.nativeElement.value != '' ||
      this.passwordEditRef.nativeElement.value != ''){
      this.userHasEnteredInput = true;
    }
    if(!this.userHasEnteredInput){
      this.routerModule.navigate(['/landing']);
    }
  }

  // Toggle Icon State
  userIconToggleState(){
    this.userIconToggledState == 'toggled' ? this.userIconToggledState = 'unToggled':
      this.userIconToggledState = 'toggled';
  }
  // Toggle Icon State
  passwordIconToggleState(){
    this.passwordIconToggledState == 'toggled' ? this.passwordIconToggledState = 'unToggled':
      this.passwordIconToggledState = 'toggled';
  }

  // Toggle Password Visibility
  changePasswordVisibility(){
    this.passwordIsVisible == true ? this.passwordIsVisible = false :
      this.passwordIsVisible = true;

    if(!this.passwordIsVisible){
      this.passwordState = 'password';
    } else {
      this.passwordState = 'text';
    }
  }

  //On Login Click Method
  onLoginSubmit() {
    this.isLoggingOn = true;
  }

  //Close Modal Popup
  onCloseModal(){
    this.userHasEnteredInput = false;
  }

}
