export type BaseNavigation = {
  ua: string;
  en: string;
  slug: string;
  mainOption?: true;
};

export type BaseNavSortTypes = {
  ua: string;
  en: string;
  slug: string;
};

export type BaseNavSort = {
  id: string;
  nameUa: string;
  nameEn: string;
  types: BaseNavSortTypes[];
};
