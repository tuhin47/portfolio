import {Component, Input, OnInit} from '@angular/core';
import {Experience} from "./experience";


@Component({
  selector: 'app-experience-unit',
  templateUrl: './experience-unit.component.html',
  styleUrls: ['./experience-unit.component.css']
})
export class ExperienceUnitComponent {

  @Input() experience!: Experience;

}
