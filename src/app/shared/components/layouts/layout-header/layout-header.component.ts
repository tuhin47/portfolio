// Angular modules
import {Component, OnInit} from '@angular/core';
import {FadeInOut} from "../../../utils/fade-in-out";
import {environment} from "../../../../../environments/environment";


@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
  animations: [FadeInOut]
})
export class LayoutHeaderComponent implements OnInit {
  version: any;
  versionLink: any;
  tabs = [
    {
      routerLink: "/about", icon: "icon-user", description: "About",
    },
    {
      routerLink: "/resume", icon: "icon-file-text", description: "Experience",
    },
    {
      routerLink: "/projects", icon: "icon-heart", description: "Projects",
    },
    {
      routerLink: "/contact", icon: "icon-envelope", description: "Contact",
    }
  ];

  public ngOnInit(): void {
    this.version = environment.version;
    this.versionLink = `https://github.com/tuhin47/Portfolio/releases/tag/${this.version}`;
  }

}
