type LocalizedText = {
  ua: string;
  en: string;
  slug?: string;
};

export interface Product {
  id: string;
  slug: string;
  imgs: string[];
  name: Omit<LocalizedText, 'slug'>;
  description: Omit<LocalizedText, 'slug'>;
  country: LocalizedText;
  year: string;
  material: LocalizedText;
  category: LocalizedText;
  subcategory: LocalizedText;
  info: Omit<LocalizedText, 'slug'>;
  price: number;
  publicationDate: string;
}
