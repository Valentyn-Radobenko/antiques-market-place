export type FilterType = {
  id: number;
  nameUa: string;
  nameEng: string;
  slug: string;
};

export type Filters = {
  id: number;
  nameUa: string;
  nameEng: string;
  slug: string;
  filterType: FilterType[];
};
