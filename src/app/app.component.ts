import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {animate, query, style, trigger, transition, group} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerTransition', [

      transition('* => *', [
        query(
          ':enter',
          [style({ opacity: 0 })],
          { optional: true }
        ),
        query(
          ':leave',
          // here we apply a style and use the animate function to apply the style over 0.3 seconds
          [style({ opacity: 1 }), animate('0.1s', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.1s', style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent {

  constructor(private router: Router) {
    this.router.navigate(['/landing']);
  }

  getState(outlet) {
    return outlet.activatedRouteData['state'];
  }

}
