import exhibitions from './../../../data/exhibitions.json';
import { Exhibitions } from './Exhibitions';

export const PlannedExhibitions = () => {
  const plannedExhibitions = exhibitions.filter(
    (exh) => exh.status === 'Запланована',
  );

  return <Exhibitions exhibitions={plannedExhibitions} />;
};
