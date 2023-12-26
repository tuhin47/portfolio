import {WorkingPlace} from "../resume/experience-unit/experience";
import {SkillGroup} from "../resume/skill-group/skill-group";
import {About} from "../about/about";

export interface AppData {
  listOfExperiences: WorkingPlace[];
  skillGroups: SkillGroup[];
  about: About;
}

