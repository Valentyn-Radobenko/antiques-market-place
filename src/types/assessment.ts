export type AssessmentInfo = {
  id: number;
  title: string;
  text1: string;
  important: string;
  text2?: string;
  price: string;
  list: string[];
};

export type localizedAssessmentInfos = {
  ua: AssessmentInfo[];
  en: AssessmentInfo[];
};

export type AssessmentForm = {
  id: number;
  title: string;
  text: string;
  important?: string;
};

export type localizedAssessmentForms = {
  ua: AssessmentForm[];
  en: AssessmentForm[];
};
