import exhibitions from './../../../data/exhibitions.json';
import { Exhibitions } from './Exhibitions';

export const OngoingExhibitions = () => {
  const ongoingExhibitions = exhibitions.filter(
    (exh) => exh.status.ua === 'Досі триває',
  );

  return <Exhibitions exhibitions={ongoingExhibitions} />;
};
