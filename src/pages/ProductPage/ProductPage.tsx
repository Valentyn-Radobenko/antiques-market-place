import { Crumbs } from '../../components/Crumbs/Crumbs';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { ShoppingCartSVG } from '../../components/Imgs/ShoppingCartSVG';
import { DocsSVG } from '../../components/Imgs/DocsSVG';
import { HourglassEmptySVG } from '../../components/Imgs/HourglassEmptySVG';
import { LandslideSVG } from '../../components/Imgs/LandslideSVG';
import { MapSearchSVG } from '../../components/Imgs/MapSearchSVG';
import { ViewComfySVG } from '../../components/Imgs/ViewComfySVG';
import { AccountBalanceSVG } from '../../components/Imgs/AccountBalanceSVG';
import { CreditCardSVG } from '../../components/Imgs/CreditCardSVG';
import { PaymentsSVG } from '../../components/Imgs/PaymentsSVG';
import { BoxSVG } from '../../components/Imgs/BoxSVG';
import { WarehouseSVG } from '../../components/Imgs/WarehouseSVG';
import { ProductSlider } from '../../components/Sliders/ProductSlider';
import { ProductsSlider } from '../../components/Sliders/ProductsSlider';
import { useIsTablet } from '../../hooks/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, SavingState } from '../../store/store';
import {
  addItem,
  addSelectedItem,
  setIsCartOpen,
} from '../../store/slices/shoppingCartSlice';
import { Link, useParams } from 'react-router-dom';
import products from '../../data/products.json';
import { filters } from '../../data/filters';

export const ProductPage = () => {
  const isTablet = useIsTablet();
  const dispatch = useDispatch<AppDispatch>();
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const lang = useSelector((state: SavingState) => state.language.language);

  const cart = useSelector((state: SavingState) => state.shoppingCart);
  const countriesSlugs = filters.options[0].subcategories.map(
    (country) => country.slug,
  );

  const yearLink = (year: string) => {
    if (!product) {
      return '';
    }

    if (+year < 1453) {
      return '/market?year=0-0';
    }
    if (+year <= 1800) {
      return '/market?year=1453-1800';
    }
    if (+year <= 1945) {
      return '/market?year=1800-1945';
    }
    if (+year <= 1991) {
      return '/market?year=1945-1991';
    }
    if (+year <= 2025) {
      return '/market?year=1991-2025';
    }

    return '/market?year=other';
  };

  const countryLink = (countrySlug: string) => {
    if (countriesSlugs.includes(countrySlug)) {
      return `/market?country=${countrySlug}`;
    } else {
      return '/market?country=other';
    }
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <Crumbs
        links={[
          '/market',
          `/market?category=${product.category.slug}`,
          `/market?category=${product.subcategory.slug}`,
          '',
        ]}
        titles={[
          'Маркет',
          product.category[lang],
          product.subcategory[lang],
          product.name[lang],
        ]}
        customClassName="product__crumbs"
      />

      <div className="product page__product">
        {isTablet && (
          <h2 className="product-slider__header-title">{product.name[lang]}</h2>
        )}
        <ProductSlider
          title={{ ua: product.name.ua, eng: product.name.en }}
          imgs={product.imgs}
        />
        <div className="product__info">
          <div className="product__top">
            <div className="product__chars">
              <div className="product__char">
                <MapSearchSVG className="product__char-icon" />
                <span className="product__char-label">Країна:</span>
                <Link
                  to={countryLink(product.country.slug)}
                  className="product__char-value product__char-value--underline"
                >
                  {product.country[lang]}
                </Link>
              </div>
              <div className="product__char">
                <DocsSVG className="product__char-icon" />
                <span className="product__char-label">Опис:</span>
                <span className="product__char-value">
                  {product.description[lang]}
                </span>
              </div>
              <div className="product__char">
                <HourglassEmptySVG className="product__char-icon" />
                <span className="product__char-label">Рік:</span>
                <Link
                  to={yearLink(product.year)}
                  className="product__char-value product__char-value--underline"
                >
                  {product.year}
                </Link>
              </div>
              <div className="product__char">
                <LandslideSVG className="product__char-icon" />
                <span className="product__char-label">Матеріал:</span>
                <Link
                  to={`/market?material=${product.material.slug}`}
                  className="product__char-value product__char-value--underline"
                >
                  {product.material[lang]}
                </Link>
              </div>
              <div className="product__char">
                <ViewComfySVG className="product__char-icon" />
                <span className="product__char-label">Категорія:</span>
                <Link
                  to={`/market?subcategory=${product.subcategory.slug}`}
                  className="product__char-value product__char-value--underline"
                >
                  {product.subcategory[lang]}
                </Link>
              </div>
            </div>
            <Dropdown
              buttonArea="all"
              buttonTitle={() => (
                <p className="product__dropdown-text">Детальна інформація</p>
              )}
              renderContent={() => (
                <p className="product__dropdown-option">{product.info[lang]}</p>
              )}
              customClassName="product__dropdown"
            />
          </div>
          <div className="product__middle">
            <div className="product__price">
              <span className="product__price-label">Ціна:</span>
              <span className="product__price-value">{product.price} грн</span>
            </div>
            <button
              onClick={() => {
                dispatch(setIsCartOpen(true));
                if (product && !cart.items.find((p) => p.id === product.id)) {
                  dispatch(addItem(product));
                }

                if (
                  product &&
                  !cart.selectedItems.find((si) => si.id === product.id)
                ) {
                  dispatch(addSelectedItem(product));
                }
              }}
              className="product__cta"
            >
              <span className="product__cta-text">Купити</span>
              <ShoppingCartSVG className="product__cta-icon" />
            </button>
          </div>
          <div className="product__bottom">
            <div className="product__bottom-block">
              <div className="product__bottom-block-title">Оплата</div>
              <div className="product__bottom-block-options">
                <div className="product__bottom-block-option">
                  <AccountBalanceSVG className="product__bottom-block-option-icon" />
                  <div className="product__bottom-block-option-description">
                    На особистий рахунок платформи
                  </div>
                </div>
                <div className="product__bottom-block-option">
                  <PaymentsSVG className="product__bottom-block-option-icon" />
                  <div className="product__bottom-block-option-description">
                    Готівка при самовивозі
                  </div>
                </div>
                <div className="product__bottom-block-option">
                  <CreditCardSVG className="product__bottom-block-option-icon" />
                  <div className="product__bottom-block-option-description">
                    Переказ на карту
                  </div>
                </div>
              </div>
            </div>
            <div className="product__bottom-block">
              <div className="product__bottom-block-title">Доставка</div>
              <div className="product__bottom-block-options">
                <div className="product__bottom-block-option">
                  <BoxSVG className="product__bottom-block-option-icon" />
                  <div className="product__bottom-block-option-description">
                    Новою поштою
                  </div>
                </div>
                <div className="product__bottom-block-option">
                  <WarehouseSVG className="product__bottom-block-option-icon" />
                  <div className="product__bottom-block-option-description">
                    Самовивіз зі складу
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductsSlider />
    </>
  );
};
