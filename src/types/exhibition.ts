type LocalizedText = {
  ua: string;
  en: string;
};

export interface Exhibition {
  id: string;
  slug: string;
  image: string;
  title: LocalizedText;
  status: LocalizedText;
  date: LocalizedText;
  source: LocalizedText;
  price: LocalizedText;
  address: LocalizedText;
  place: LocalizedText;
  content: LocalizedText;
}
