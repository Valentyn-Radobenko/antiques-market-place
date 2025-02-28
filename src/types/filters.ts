export type FilterType = {
  id: number;
  nameUa: string;
  nameEng: string;
  slug: string;
};

export type FiltersType = {
  id: number;
  nameUa: string;
  nameEng: string;
  slug: string;
  filterType: FilterType[];
};
