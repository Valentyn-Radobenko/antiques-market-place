export type article = {
  title: string;
  image: string;
  content: string;
};

type LocalizedText = {
  ua: string;
  en: string;
};

export interface Article {
  id: string;
  slug: string;
  image: string;
  title: LocalizedText;
  author: LocalizedText;
  source: LocalizedText;
  date: LocalizedText;
  content: LocalizedText;
}
