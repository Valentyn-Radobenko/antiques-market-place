import { NavLink } from 'react-router-dom';
import { Subcategory } from '../../../types/categories';

type Props = {
  subcategory: Subcategory;
};

export const SubcategoryDesc: React.FC<Props> = ({ subcategory }) => {
  return (
    <div
      key={subcategory.id}
      className="subcategory"
    >
      <NavLink
        className="subcategory__link"
        to={`/market/${subcategory.slug}`}
      >
        {subcategory.nameUa}
      </NavLink>
    </div>
  );
};
