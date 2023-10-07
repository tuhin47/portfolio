import {Component, OnInit} from '@angular/core';
import {Experience} from "./experience-unit/experience";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  experiences?: Experience[];
  educations?: Experience[];
  publications?: Experience[];
  extras?: Experience[];
  isCompleted = true;

  ngOnInit(): void {
    // fetch("https://gist.githubusercontent.com/tuhin47/ee4d6449b4f7d0a71b39b2c5a08f6571/raw/experiences.json",
    fetch("http://localhost:9090/expeiences",
      {
        method: 'GET',
        redirect: 'follow'
      })
      .then(response => response.json())
      .then(result => {
        this.experiences = result.experiences;
        this.educations = result.educations;
        this.publications = result.publications;
        this.extras = result.extras;
        this.isCompleted = true;
        console.log(result)
      })
      .catch(error => console.log('error', error));
  }
}
