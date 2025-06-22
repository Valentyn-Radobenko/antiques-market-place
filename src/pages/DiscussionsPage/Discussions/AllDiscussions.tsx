import exhibitions from './../../../data/exhibitions.json';
import { Exhibitions } from './Exhibitions';

export const AllExhibitions = () => {
  return <Exhibitions exhibitions={exhibitions} />;
};
