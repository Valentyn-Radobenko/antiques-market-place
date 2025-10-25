import { NavLink } from 'react-router-dom';
import { Subcategory } from '../../../types/categories';
import { useSelector } from 'react-redux';
import { SavingState } from '../../../store/store';

type Props = {
  subcategory: Subcategory;
};

export const SubcategoryDesc: React.FC<Props> = ({ subcategory }) => {
  const lang = useSelector((state: SavingState) => state.language.language);

  return (
    <div
      key={subcategory.id}
      className="subcategory"
    >
      <NavLink
        className="subcategory__link"
        to={`/market/${subcategory.slug}`}
      >
        {lang === 'ua' && subcategory.nameUa}
        {lang === 'en' && subcategory.nameEng}
      </NavLink>
    </div>
  );
};
