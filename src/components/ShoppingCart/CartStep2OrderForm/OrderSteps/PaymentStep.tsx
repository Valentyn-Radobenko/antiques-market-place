import { useDispatch, useSelector } from 'react-redux';
import { useIsMobile } from '../../../../hooks/useMediaQuery';
import { AppDispatch, SavingState } from '../../../../store/store';
import { ArrowBackSVG } from '../../../Imgs/ArrowBackSVG';
import { Dropdown } from '../../../Dropdown/Dropdown';
import {
  updateDeliveryBranch,
  updateDeliveryService,
  updatePaymentMethod,
} from '../../../../store/slices/shoppingCartSlice';
import { CheckboxRound } from '../../../Imgs/CheckBoxRound/CheckBoxRound';
import classNames from 'classnames';
import { CopySVG } from '../../../Imgs/CopySVG';
import { useState } from 'react';
import { InfoSVG } from '../../../Imgs/InfoSVG';
import { Close } from '../../../Imgs/Close';
import { FilesInput } from '../../../FilesInput/FilesInput';
import { AddPhotoAlternateSVG } from '../../../Imgs/AddPhotoAlternateSVG';
import { PhotosList } from '../../../PhotosList/PhotosList';
import { Link } from 'react-router-dom';

type Props = {
  setOrderStep: React.Dispatch<React.SetStateAction<number>>;
  areErrorsOn: boolean;
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  files: File[];
};

export const PaymentStep: React.FC<Props> = ({
  setOrderStep,
  areErrorsOn,
  setFiles,
  files,
}) => {
  const isPhone = useIsMobile();
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: SavingState) => state.shoppingCart);

  const PHOTO_AMOUNT = 5;

  const [isPaymentNotificationOn, setIsPaymentNotificationOn] = useState(false);

  const totalPrice = cart.selectedItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );

  return (
    <div className="shopping-cart__order-block">
      <div className="shopping-cart__order-block-top">
        {isPhone ?
          <div className="shopping-cart__order-block-heading">
            <ArrowBackSVG
              onClick={() => setOrderStep(3)}
              className="shopping-cart__order-block-back-button"
            />
            <h3 className="shopping-cart__order-block-title">Оплата</h3>
          </div>
        : <h3 className="shopping-cart__order-block-title">Оплата</h3>}
        <p className="shopping-cart__order-block-step">
          4<span className="shopping-cart__order-block-steps">/5</span>
        </p>
      </div>
      <Dropdown
        onClick={() => {
          dispatch(updatePaymentMethod('onReceipt'));
        }}
        customIsVisible={cart.payment.method === 'onReceipt'}
        buttonArea="all"
        buttonIcon={() => (
          <CheckboxRound isActive={cart.payment.method === 'onReceipt'} />
        )}
        customClassName="shopping-cart__order-block-radio-dropdown"
        buttonTitle={() => (
          <h4 className="shopping-cart__order-block-radio-dropdown-title">
            Оплата під час отримання товару ( карта / готівка )
          </h4>
        )}
        subtitle="Послуга післяплати оплачується окремо,<br/>
          за тарифами перевізника"
        renderContent={() => (
          <>
            <div className="shopping-cart__order-block-radio-dropdown-inputs">
              <label className="shopping-cart__order-block-radio-dropdown-label">
                Служба доставки
                <input
                  type="text"
                  className={classNames(
                    'shopping-cart__order-block-radio-dropdown-input',
                    {
                      'shopping-cart__order-block-radio-dropdown-input--error':
                        areErrorsOn && !cart.delivery.service,
                    },
                  )}
                  placeholder="Нова пошта"
                  onChange={(e) =>
                    dispatch(updateDeliveryService(e.target.value))
                  }
                  value={cart.delivery.service}
                />
                {areErrorsOn && !cart.delivery.service && (
                  <p className="shopping-cart__order-block-error">
                    Вкажіть службу доставки
                  </p>
                )}
              </label>

              <label className="shopping-cart__order-block-radio-dropdown-label">
                Номер відділення
                <input
                  type="text"
                  className={classNames(
                    'shopping-cart__order-block-radio-dropdown-input',
                    {
                      'shopping-cart__order-block-radio-dropdown-input--error':
                        areErrorsOn && !cart.delivery.branch,
                    },
                  )}
                  placeholder="№456"
                  onChange={(e) =>
                    dispatch(updateDeliveryBranch(e.target.value))
                  }
                  value={cart.delivery.branch}
                />
                {areErrorsOn && !cart.delivery.branch && (
                  <p className="shopping-cart__order-block-error">
                    Вкажіть номер відділення
                  </p>
                )}
              </label>
            </div>

            <p className="shopping-cart__order-block-receiving-notification">
              Послуга післяплати оплачується окремо,
              <br /> за тарифами перевізника
            </p>
          </>
        )}
        isAfterTitleOn={false}
      />

      <Dropdown
        onClick={() => {
          if (cart.payment.method !== 'international') {
            setFiles([]);
          }

          dispatch(updatePaymentMethod('international'));
        }}
        customIsVisible={cart.payment.method === 'international'}
        buttonArea="all"
        buttonIcon={() => (
          <CheckboxRound isActive={cart.payment.method === 'international'} />
        )}
        customClassName="shopping-cart__order-block-radio-dropdown"
        buttonTitle={() => (
          <h4 className="shopping-cart__order-block-radio-dropdown-title">
            Міжнародний переказ
          </h4>
        )}
        subtitle="Послуга доставки оплачується окремо,<br/>
          за тарифами перевізника"
        renderContent={() => (
          <>
            <div className="shopping-cart__order-block-payments-info">
              <div className="shopping-cart__order-block-payments-info-block">
                <div className="shopping-cart__order-block-payments-info-unit">
                  <p className="shopping-cart__order-block-payments-info-label">
                    IBAN:
                  </p>
                  <div className="shopping-cart__order-block-payments-info-copy">
                    <p className="shopping-cart__order-block-payments-info-value">
                      UA2134565245678
                    </p>
                    <CopySVG
                      className="shopping-cart__order-block-payments-info-copy-icon"
                      onClick={() => {
                        navigator.clipboard.writeText('UA2134565245678');
                      }}
                    />
                  </div>
                </div>

                <div className="shopping-cart__order-block-payments-info-unit">
                  <p className="shopping-cart__order-block-payments-info-label">
                    SWIFT код:
                  </p>
                  <div className="shopping-cart__order-block-payments-info-copy">
                    <p className="shopping-cart__order-block-payments-info-value">
                      ABCDUAUAXS
                    </p>
                    <CopySVG
                      className="shopping-cart__order-block-payments-info-copy-icon"
                      onClick={() => {
                        navigator.clipboard.writeText('ABCDUAUAXS');
                      }}
                    />
                  </div>
                </div>

                <div
                  className="shopping-cart__order-block-payments-info-unit 
                  shopping-cart__order-block-payments-info-unit--last"
                >
                  <p className="shopping-cart__order-block-payments-info-label">
                    Сума:
                  </p>
                  <p className="shopping-cart__order-block-payments-info-value">
                    {totalPrice} грн
                  </p>
                </div>
              </div>

              <div className="shopping-cart__order-block-payments-info-block">
                <div className="shopping-cart__order-block-payments-info-unit">
                  <p className="shopping-cart__order-block-payments-info-label">
                    Назва банку:
                  </p>
                  <p className="shopping-cart__order-block-payments-info-value">
                    Приват банк
                  </p>
                </div>

                <div className="shopping-cart__order-block-payments-info-unit">
                  <p className="shopping-cart__order-block-payments-info-label">
                    Юридична адреса:
                  </p>
                  <p className="shopping-cart__order-block-payments-info-value">
                    вул.Велика Бердичівська 75
                  </p>
                </div>

                <div className="shopping-cart__order-block-payments-info-unit">
                  <p className="shopping-cart__order-block-payments-info-label">
                    Додаткова інформація:
                  </p>
                  <p className="shopping-cart__order-block-payments-info-value">
                    Переказ доступний у форматах SEPA/SWIFT з будь-якого банку.
                  </p>
                </div>
              </div>
            </div>

            <div className="shopping-cart__order-block-payments-upload">
              {isPaymentNotificationOn && (
                <div className="shopping-cart__order-block-payments-upload-notification">
                  <div className="shopping-cart__order-block-payments-upload-notification-top">
                    <InfoSVG className="shopping-cart__order-block-payments-upload-notification-top-info" />
                    <Close
                      onClick={() => {
                        setIsPaymentNotificationOn(false);
                      }}
                      className="shopping-cart__order-block-payments-upload-notification-top-close"
                    />
                  </div>

                  <p className="shopping-cart__order-block-payments-upload-notification-content">
                    &nbsp;Для підтвердження платежу, будь ласка, додайте
                    скріншот квитанції. <br /> &nbsp;Це допоможе нам швидше
                    розпочати обробку замовлення — без очікування підтвердження
                    з боку банку.
                  </p>
                </div>
              )}

              <div className="shopping-cart__order-block-payments-upload-title">
                <p className="shopping-cart__order-block-payments-upload-title-text">
                  Скрін оплати
                </p>
                <InfoSVG
                  onClick={() => {
                    setIsPaymentNotificationOn(true);
                  }}
                  onMouseEnter={() => {
                    setIsPaymentNotificationOn(true);
                  }}
                  className="shopping-cart__order-block-payments-upload-title-info"
                />
              </div>

              <FilesInput
                files={files}
                setFiles={setFiles}
                PHOTO_AMOUNT={PHOTO_AMOUNT}
                customClassName={classNames(
                  'shopping-cart__order-block-payments-upload-input',
                  {
                    'shopping-cart__order-block-payments-upload-input--error':
                      areErrorsOn && files.length === 0,
                  },
                )}
                customContent={() => (
                  <>
                    <p className="shopping-cart__order-block-payments-upload-input-text">
                      Виберіть файл
                    </p>
                    <AddPhotoAlternateSVG />
                  </>
                )}
              />
              {areErrorsOn && files.length === 0 && (
                <p className="shopping-cart__order-block-error">
                  Додайте принаймні один файл
                </p>
              )}
              {files.length > 0 && (
                <PhotosList
                  files={files}
                  setFiles={setFiles}
                />
              )}

              <p className="shopping-cart__order-block-payments-upload-formats">
                Приймаються формати: JPG, PNG, PDF
              </p>
            </div>

            <p className="shopping-cart__order-block-receiving-notification">
              Послуга доставки оплачується окремо,
              <br /> за тарифами перевізника
            </p>
          </>
        )}
        isAfterTitleOn={false}
      />

      <Dropdown
        onClick={() => {
          if (cart.payment.method !== 'internal') {
            setFiles([]);
          }

          dispatch(updatePaymentMethod('internal'));
        }}
        customIsVisible={cart.payment.method === 'internal'}
        buttonArea="all"
        buttonIcon={() => (
          <CheckboxRound isActive={cart.payment.method === 'internal'} />
        )}
        customClassName="shopping-cart__order-block-radio-dropdown"
        buttonTitle={() => (
          <h4 className="shopping-cart__order-block-radio-dropdown-title">
            Переказ на картковий рахунок компанії
          </h4>
        )}
        subtitle="Послуга доставки оплачується окремо,<br/>
          за тарифами перевізника"
        renderContent={() => (
          <>
            <div className="shopping-cart__order-block-payments-info">
              <div className="shopping-cart__order-block-payments-info-block">
                <div className="shopping-cart__order-block-payments-info-unit">
                  <p className="shopping-cart__order-block-payments-info-label">
                    Номер карти:
                  </p>
                  <div className="shopping-cart__order-block-payments-info-copy">
                    <p className="shopping-cart__order-block-payments-info-value">
                      1234 3456 5245 6785
                    </p>
                    <CopySVG
                      className="shopping-cart__order-block-payments-info-copy-icon"
                      onClick={() => {
                        navigator.clipboard.writeText('1234345652456785');
                      }}
                    />
                  </div>
                </div>

                <div className="shopping-cart__order-block-payments-info-unit">
                  <p className="shopping-cart__order-block-payments-info-label">
                    Сума:
                  </p>
                  <p className="shopping-cart__order-block-payments-info-value">
                    {totalPrice} грн
                  </p>
                </div>
              </div>

              <div className="shopping-cart__order-block-payments-info-block">
                <div className="shopping-cart__order-block-payments-info-unit">
                  <p className="shopping-cart__order-block-payments-info-label">
                    Назва банку:
                  </p>
                  <p className="shopping-cart__order-block-payments-info-value">
                    Приват банк
                  </p>
                </div>

                <div
                  className="shopping-cart__order-block-payments-info-unit 
                  shopping-cart__order-block-payments-info-unit--last"
                >
                  <p className="shopping-cart__order-block-payments-info-label">
                    Ім’я власника картки:
                  </p>
                  <p className="shopping-cart__order-block-payments-info-value">
                    Віктор Вікторович Бабкан
                  </p>
                </div>
              </div>
            </div>

            <div className="shopping-cart__order-block-payments-upload">
              {isPaymentNotificationOn && (
                <div className="shopping-cart__order-block-payments-upload-notification">
                  <div className="shopping-cart__order-block-payments-upload-notification-top">
                    <InfoSVG className="shopping-cart__order-block-payments-upload-notification-top-info" />
                    <Close
                      onClick={() => {
                        setIsPaymentNotificationOn(false);
                      }}
                      className="shopping-cart__order-block-payments-upload-notification-top-close"
                    />
                  </div>

                  <p className="shopping-cart__order-block-payments-upload-notification-content">
                    &nbsp;Для підтвердження платежу, будь ласка, додайте
                    скріншот квитанції. <br /> &nbsp;Це допоможе нам швидше
                    розпочати обробку замовлення — без очікування підтвердження
                    з боку банку.
                  </p>
                </div>
              )}

              <div className="shopping-cart__order-block-payments-upload-title">
                <p className="shopping-cart__order-block-payments-upload-title-text">
                  Скрін оплати
                </p>
                <InfoSVG
                  onClick={() => {
                    setIsPaymentNotificationOn(true);
                  }}
                  onMouseEnter={() => {
                    setIsPaymentNotificationOn(true);
                  }}
                  className="shopping-cart__order-block-payments-upload-title-info"
                />
              </div>

              <FilesInput
                files={files}
                setFiles={setFiles}
                PHOTO_AMOUNT={PHOTO_AMOUNT}
                customClassName={classNames(
                  'shopping-cart__order-block-payments-upload-input',
                  {
                    'shopping-cart__order-block-payments-upload-input--error':
                      areErrorsOn && files.length === 0,
                  },
                )}
                customContent={() => (
                  <>
                    <p className="shopping-cart__order-block-payments-upload-input-text">
                      Виберіть файл
                    </p>
                    <AddPhotoAlternateSVG />
                  </>
                )}
              />
              {areErrorsOn && files.length === 0 && (
                <p className="shopping-cart__order-block-error">
                  Додайте принаймні один файл
                </p>
              )}
              {files.length > 0 && (
                <PhotosList
                  files={files}
                  setFiles={setFiles}
                />
              )}

              <p className="shopping-cart__order-block-payments-upload-formats">
                Приймаються формати: JPG, PNG, PDF
              </p>
            </div>

            <p className="shopping-cart__order-block-receiving-notification">
              Послуга доставки оплачується окремо,
              <br /> за тарифами перевізника
            </p>
          </>
        )}
        isAfterTitleOn={false}
      />

      {cart.delivery.type === 'pickup' && (
        <Dropdown
          onClick={() => {
            if (cart.payment.method !== 'cash') {
              setFiles([]);
            }

            dispatch(updatePaymentMethod('cash'));
          }}
          customIsVisible={cart.payment.method === 'cash'}
          buttonArea="all"
          buttonIcon={() => (
            <CheckboxRound isActive={cart.payment.method === 'cash'} />
          )}
          customClassName="shopping-cart__order-block-radio-dropdown"
          buttonTitle={() => (
            <h4 className="shopping-cart__order-block-radio-dropdown-title">
              Готівка
            </h4>
          )}
          subtitle="Оплата готівкою здійснюється при самовивозі зі складу"
          renderContent={() => (
            <>
              <div className="shopping-cart__order-block-payments-info">
                <div className="shopping-cart__order-block-payments-info-block">
                  <div
                    className="shopping-cart__order-block-payments-info-unit 
                  shopping-cart__order-block-payments-info-unit--last"
                  >
                    <p className="shopping-cart__order-block-payments-info-label">
                      Адреса складу:
                    </p>
                    <Link
                      to={'https://maps.app.goo.gl/wAdeT2GGibefrzub9'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shopping-cart__order-block-payments-info-link"
                    >
                      м. Житомир, пл. Перемоги, 9
                    </Link>
                  </div>
                </div>

                <div className="shopping-cart__order-block-payments-info-block">
                  <div className="shopping-cart__order-block-payments-info-unit">
                    <p className="shopping-cart__order-block-payments-info-label">
                      Сума:
                    </p>
                    <p className="shopping-cart__order-block-payments-info-value">
                      {totalPrice} грн
                    </p>
                  </div>
                </div>
              </div>

              <p className="shopping-cart__order-block-receiving-notification">
                Оплата готівкою здійснюється при самовивозі зі складу
              </p>
            </>
          )}
          isAfterTitleOn={false}
        />
      )}
    </div>
  );
};
