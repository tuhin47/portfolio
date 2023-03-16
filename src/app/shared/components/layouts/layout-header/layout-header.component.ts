// Angular modules
import {Component, OnInit} from '@angular/core';
import {FadeInOut} from "../../../utils/fade-in-out";

@Component({
  selector    : 'app-layout-header',
  templateUrl : './layout-header.component.html',
  styleUrls   : ['./layout-header.component.scss'],
  animations: [FadeInOut]
})
export class LayoutHeaderComponent implements OnInit
{

  public ngOnInit() : void
  {

  }

}
