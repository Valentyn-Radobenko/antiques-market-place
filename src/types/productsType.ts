export type ProductsType = {
  totalElements: number;
  totalPages: number;
  size: number;
  content: {
    nameUa: string;
    nameEng: string;
    descriptionUa: string;
    descriptionEng: string;
    countryUa: string;
    countryEng: string;
    year: number;
    materialUa: string;
    materialEng: string;
    price: number;
    inventory: number;
    publicationDate: string;
    categoryIds: number[];
    photos: string[];
  }[];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    paged: boolean;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
};
