export interface product {
  id: string;
  slug: string;
  imgs: string[];
  name: {
    ua: string;
    eng: string;
  };
  description: {
    ua: string;
    eng: string;
  };
  country: {
    ua: string;
    eng: string;
    slug: string;
  };
  year: string;
  material: {
    ua: string;
    eng: string;
    slug: string;
  };
  category: {
    ua: string;
    eng: string;
    slug: string;
  };
  subcategory: {
    ua: string;
    eng: string;
    slug: string;
  };
  info: {
    ua: string;
    eng: string;
  };
  price: number;
  publicationDate: string;
}
