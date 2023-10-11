import {Component, OnInit} from '@angular/core';
import {SkillGroup} from "./skill-group/skill-group";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  listOfExperiences?: any[];
  skillGroups!: SkillGroup[];
  isCompleted = false;

  ngOnInit(): void {
    fetch(`${environment.apiBase}/experiences.json`,
    // fetch("http://localhost:9090/expeiences",
      {
        method: 'GET',
        redirect: 'follow'
      })
      .then(response => response.json())
      .then(result => {
        this.listOfExperiences = result.listOfExperiences;
        this.skillGroups = result.skillGroups;
        this.isCompleted = true;
        console.log(result)
      })
      .catch(error => console.log('error', error));
  }
}
