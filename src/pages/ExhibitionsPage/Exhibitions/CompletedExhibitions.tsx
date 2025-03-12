import exhibitions from './../../../data/exhibitions.json';
import { Exhibitions } from './Exhibitions';

export const CompletedExhibitions = () => {
  const completedExhibitions = exhibitions.filter(
    (exh) => exh.status === 'Завершена',
  );

  return <Exhibitions exhibitions={completedExhibitions} />;
};
