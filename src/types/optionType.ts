export type SingleOption = {
  id: number;
  nameUa: string;
  nameEng: string;
  slug: string;
};

export type Options = {
  nameUa: string;
  nameEng: string;
  slug: string;
  subcategories: SingleOption[];
  id: number;
};

export type OptionType = {
  nameUa: string;
  slug: 'filters' | 'categories' | 'sort';
  type: 'filter' | 'sort';
  options: Options[];
};
