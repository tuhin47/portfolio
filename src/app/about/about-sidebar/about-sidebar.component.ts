import {Component, Input} from '@angular/core';
import {AboutSidebarItem} from "./about-sidebar-item";

@Component({
    selector: 'app-about-sidebar',
    templateUrl: './about-sidebar.component.html',
})
export class AboutSidebarComponent {
  @Input() items !: AboutSidebarItem[];
}
