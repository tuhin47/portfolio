
export interface WorkingPlace{
  title: string;
  data: Experience[];
}

export interface Experience {
  position: string;
  responsibilities: string[];
  details?: string;
  period: string;
  company: string;
  companyUrl: string;
}
