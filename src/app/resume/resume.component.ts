import {Component, OnInit} from '@angular/core';
import {Experience} from "./experience-unit/experience";
import {SkillGroup} from "./skill-group/skill-group";

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
    fetch("https://gist.githubusercontent.com/tuhin47/ee4d6449b4f7d0a71b39b2c5a08f6571/raw/experiences.json",
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
