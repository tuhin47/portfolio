import {Component, OnInit} from '@angular/core';
import {SkillGroup} from "./skill-group/skill-group";
import {environment} from "../../environments/environment";
import {WorkingPlace} from "./experience-unit/experience";
import {AppService} from "../shared/app.service";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  listOfExperiences!: WorkingPlace[];
  skillGroups!: SkillGroup[];
  isCompleted = false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getAppData()
      .then(result => {
        this.listOfExperiences = result.listOfExperiences;
        this.skillGroups = result.skillGroups;
        this.isCompleted = true;
      })
      .catch(error => console.log('error', error));
  }
}
