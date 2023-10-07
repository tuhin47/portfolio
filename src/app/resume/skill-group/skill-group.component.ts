import {Component, Input, OnInit} from '@angular/core';
import {SkillGroup} from "./skill-group";

@Component({
  selector: 'app-skill-group',
  templateUrl: './skill-group.component.html',
})
export class SkillGroupComponent  implements OnInit{

  @Input("skillGroup") skill !: SkillGroup;

  ngOnInit(): void {

  }

}
