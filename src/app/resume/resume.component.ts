import {Component, OnInit} from '@angular/core';
import {Experience} from "./experience-unit/experience";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit{
  experiences!: Experience[] ;
  isCompleted = false;

  ngOnInit(): void {
    fetch("https://gist.githubusercontent.com/tuhin47/ee4d6449b4f7d0a71b39b2c5a08f6571/raw/experiences.json", {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => {
        this.experiences = result.experiences;
        this.isCompleted = true;
      })
      .catch(error => console.log('error', error));
  }
  // https://gist.githubusercontent.com/tuhin47/61fa91d05f8cccbfdd6ef831caba1401/raw/experiences.json
}
