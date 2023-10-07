import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from "./shared/shared.module";
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ContactItemComponent } from './contact/contact-item/contact-item.component';
import { OtherComponent } from './other/other.component';
import { ExperienceUnitComponent } from './resume/experience-unit/experience-unit.component';
import { SkillGroupComponent } from './resume/skill-group/skill-group.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent,
    ContactItemComponent,
    OtherComponent,
    ExperienceUnitComponent,
    SkillGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
