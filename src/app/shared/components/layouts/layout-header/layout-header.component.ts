// Angular modules
import {Component, OnInit} from '@angular/core';
import {FadeInOut} from "../../../utils/fade-in-out";
// @ts-ignore
import packageInfo from '../../../../../../package.json';
@Component({
  selector    : 'app-layout-header',
  templateUrl : './layout-header.component.html',
  styleUrls   : ['./layout-header.component.scss'],
  animations: [FadeInOut]
})
export class LayoutHeaderComponent implements OnInit
{
  version: any;
  public ngOnInit() : void
  {
    this.version = packageInfo.version;
  }

}
