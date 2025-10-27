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
import { ItemSlider } from '../../components/Sliders/ItemSlider';
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
import { useTranslation } from 'react-i18next';

export const ProductPage = () => {
  const isTablet = useIsTablet();
  const dispatch = useDispatch<AppDispatch>();
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  const lang = useSelector((state: SavingState) => state.language.language);
  const { t } = useTranslation();

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
    return <h2>{t('npt-found')}</h2>;
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
          `${t('navigation.market')}`,
          product.category[lang],
          product.subcategory[lang],
          product.name[lang],
        ]}
        customClassName="product__crumbs"
      />

      <div className="product page__product">
        {isTablet && (
          <h2 className="item-slider__header-title">{product.name[lang]}</h2>
        )}
        <div className="product__slider-wrapper">
          <ItemSlider
            title={{ ua: product.name.ua, en: product.name.en }}
            imgs={product.imgs}
          />
        </div>
        <div className="product__info">
          <div className="product__top">
            <div className="product__chars">
              <div className="product__char">
                <MapSearchSVG className="product__char-icon" />
                <span className="product__char-label">
                  {t('product__char-label')}
                </span>
                <Link
                  to={countryLink(product.country.slug)}
                  className="product__char-value product__char-value--underline"
                >
                  {product.country[lang]}
                </Link>
              </div>
              <div className="product__char">
                <DocsSVG className="product__char-icon" />
                <span className="product__char-label">
                  {t('product__char-label2')}
                </span>
                <span className="product__char-value">
                  {product.description[lang]}
                </span>
              </div>
              <div className="product__char">
                <HourglassEmptySVG className="product__char-icon" />
                <span className="product__char-label">
                  {t('product__char-label3')}
                </span>
                <Link
                  to={yearLink(product.year)}
                  className="product__char-value product__char-value--underline"
                >
                  {product.year}
                </Link>
              </div>
              <div className="product__char">
                <LandslideSVG className="product__char-icon" />
                <span className="product__char-label">
                  {t('product__char-label4')}
                </span>
                <Link
                  to={`/market?material=${product.material.slug}`}
                  className="product__char-value product__char-value--underline"
                >
                  {product.material[lang]}
                </Link>
              </div>
              <div className="product__char">
                <ViewComfySVG className="product__char-icon" />
                <span className="product__char-label">
                  {t('product__char-label5')}
                </span>
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
                <p className="product__dropdown-text">
                  {t('product__dropdown-text')}
                </p>
              )}
              renderContent={() => (
                <p className="product__dropdown-option">{product.info[lang]}</p>
              )}
              customClassName="product__dropdown"
            />
          </div>
          <div className="product__middle">
            <div className="product__price">
              <span className="product__price-label">
                {t('product__price-label')}
              </span>
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
              <span className="product__cta-text">
                {t('product__cta-text2')}
              </span>
              <ShoppingCartSVG className="product__cta-icon" />
            </button>
          </div>
          <div className="product__bottom">
            <div className="product__bottom-block">
              <div className="product__bottom-block-title">
                {t('product__bottom-block-title')}
              </div>
              <div className="product__bottom-block-options">
                <div className="product__bottom-block-option">
                  <AccountBalanceSVG className="product__bottom-block-option-icon" />
                  <div className="product__bottom-block-option-description">
                    {t('product__bottom-block-option-description')}
                  </div>
                </div>
                <div className="product__bottom-block-option">
                  <PaymentsSVG className="product__bottom-block-option-icon" />
                  <div className="product__bottom-block-option-description">
                    {t('product__bottom-block-option-description2')}
                  </div>
                </div>
                <div className="product__bottom-block-option">
                  <CreditCardSVG className="product__bottom-block-option-icon" />
                  <div className="product__bottom-block-option-description">
                    {t('product__bottom-block-option-description3')}
                  </div>
                </div>
              </div>
            </div>
            <div className="product__bottom-block">
              <div className="product__bottom-block-title">
                {t('product__bottom-block-title2')}
              </div>
              <div className="product__bottom-block-options">
                <div className="product__bottom-block-option">
                  <BoxSVG className="product__bottom-block-option-icon" />
                  <div className="product__bottom-block-option-description">
                    {t('product__bottom-block-option-description4')}
                  </div>
                </div>
                <div className="product__bottom-block-option">
                  <WarehouseSVG className="product__bottom-block-option-icon" />
                  <div className="product__bottom-block-option-description">
                    {t('product__bottom-block-option-description5')}
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
