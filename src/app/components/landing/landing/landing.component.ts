import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  // Script Logo Path
  private landingLogoFilePath: string = '../../../../assets/branding/freedl_script_logo_light.png';

  constructor() {}

  ngOnInit() {}

}
