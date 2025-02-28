export type SortType = {
  id: number;
  nameUa: string;
  nameEng: string;
  slug: string;
};

export type SortingType = {
  id: number;
  nameUa: string;
  nameEng: string;
  slug: string;
  sortType: SortType[];
};
