import {Component} from '@angular/core';
import {AppService} from "../shared/app.service";
import {About} from "./about";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about!: About;

  constructor(private appService: AppService) {
    this.appService.getAppData().then(
      value => {
        this.about = value.about;
      }
    )
  }

}
