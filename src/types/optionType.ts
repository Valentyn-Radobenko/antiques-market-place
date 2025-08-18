export type SingleOption = {
  id: string;
  nameUa: string;
  nameEng: string;
  slug: string;
};

export type Options = {
  nameUa: string;
  nameEng: string;
  slug: string;
  subcategories: SingleOption[];
  id: string;
};

export type OptionType = {
  nameUa: string;
  slug: 'filters' | 'categories' | 'sort';
  type: 'multiple' | 'single';
  options: Options[];
};
