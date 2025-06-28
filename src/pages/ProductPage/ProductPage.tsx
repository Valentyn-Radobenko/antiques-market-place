import { Crumbs } from '../../components/Crumbs/Crumbs';
import { Dropdown } from '../../components/Dropdown/Dropdown';

export const ProductPage = () => {
  return (
    <>
      <Crumbs
        links={['/product', '/product', '/product', '/product']}
        titles={['Маркет', 'Нумізматика', 'Монети Європи', 'Талер 1641']}
      />

      <div className="product">
        <div className="product__media">
          <div className="product__title"></div>
          <div className="product__img"></div>
        </div>
        <div className="product__info">
          <div className="product__top">
            <div className="product__chars">
              <div className="product__char">
                <div className="product__char-icon"></div>
                <span className="product__char-label"></span>
                <span className="product__char-value"></span>
              </div>
              <div className="product__char">
                <div className="product__char-icon"></div>
                <span className="product__char-label"></span>
                <span className="product__char-value"></span>
              </div>
              <div className="product__char">
                <div className="product__char-icon"></div>
                <span className="product__char-label"></span>
                <span className="product__char-value"></span>
              </div>
              <div className="product__char">
                <div className="product__char-icon"></div>
                <span className="product__char-label"></span>
                <span className="product__char-value"></span>
              </div>
              <div className="product__char">
                <div className="product__char-icon"></div>
                <span className="product__char-label"></span>
                <span className="product__char-value"></span>
              </div>
            </div>
            <Dropdown
              buttonArea="all"
              buttonTitle={() => (
                <p className="product__dropdown-text">Детальна інформація</p>
              )}
              renderContent={() => <></>}
              customClassName="product__dropdown"
            />
          </div>
          <div className="product__middle">
            <div className="product__price"></div>
            <div className="product__cta"></div>
          </div>
          <div className="product__bottom">
            <div className="product__bottom-block">
              <div className="product__bottom-block-title"></div>
              <div className="product__bottom-block-option">
                <div className="product__bottom-block-option-icon"></div>
                <div className="product__bottom-block-option-description"></div>
              </div>
              <div className="product__bottom-block-option">
                <div className="product__bottom-block-option-icon"></div>
                <div className="product__bottom-block-option-description"></div>
              </div>
              <div className="product__bottom-block-option">
                <div className="product__bottom-block-option-icon"></div>
                <div className="product__bottom-block-option-description"></div>
              </div>
            </div>
            <div className="product__bottom-block">
              <div className="product__bottom-block-title"></div>
              <div className="product__bottom-block-option">
                <div className="product__bottom-block-option-icon"></div>
                <div className="product__bottom-block-option-description"></div>
              </div>
              <div className="product__bottom-block-option">
                <div className="product__bottom-block-option-icon"></div>
                <div className="product__bottom-block-option-description"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
