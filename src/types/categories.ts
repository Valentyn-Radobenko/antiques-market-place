export type Subcategory = {
  id: number;
  nameUa: string;
  nameEng: string;
  slug: string;
};

export type Category = {
  id: number;
  nameUa: string;
  nameEng: string;
  slug: string;
  subcategories: Subcategory[];
};
