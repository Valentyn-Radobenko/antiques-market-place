export type AssessmentInfo = {
  id: number;
  title: string;
  text1: string;
  important: string;
  text2?: string;
  price: string;
  list: string[];
};

export type AssessmentForm = {
  id: number;
  title: string;
  text: string;
  important?: string;
};
