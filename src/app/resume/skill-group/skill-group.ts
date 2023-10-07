export interface SkillUnit {
  itemClass: string;
  name: string;
  width : string
}

export interface SkillGroup {
  items: SkillUnit[];
  title: string;
}
