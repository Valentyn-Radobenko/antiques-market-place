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
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

  return (
    <div className="shopping-cart__order-block">
      <div className="shopping-cart__order-block-top">
        {isPhone ?
          <div className="shopping-cart__order-block-heading">
            <ArrowBackSVG
              onClick={() => setOrderStep(3)}
              className="shopping-cart__order-block-back-button"
            />
            <h3 className="shopping-cart__order-block-title">
              {t('shopping-cart__order-block-title3')}
            </h3>
          </div>
        : <h3 className="shopping-cart__order-block-title">
            {t('shopping-cart__order-block-title3')}
          </h3>
        }
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
            {t('shopping-cart__order-block-radio-dropdown-title3')}
          </h4>
        )}
        subtitle={`${t('shopping-cart__order-block-receiving-notification')} ${t(
          'shopping-cart__order-block-receiving-notification2',
        )}`}
        renderContent={() => (
          <>
            <div className="shopping-cart__order-block-radio-dropdown-inputs">
              <label className="shopping-cart__order-block-radio-dropdown-label">
                {t('shopping-cart__order-block-radio-dropdown-label')}
                <input
                  type="text"
                  className={classNames(
                    'shopping-cart__order-block-radio-dropdown-input',
                    {
                      'shopping-cart__order-block-radio-dropdown-input--error':
                        areErrorsOn && !cart.delivery.service,
                    },
                  )}
                  placeholder={t(
                    'shopping-cart__order-block-radio-dropdown-input-placeholder',
                  )}
                  onChange={(e) =>
                    dispatch(updateDeliveryService(e.target.value))
                  }
                  value={cart.delivery.service}
                />
                {areErrorsOn && !cart.delivery.service && (
                  <p className="shopping-cart__order-block-error">
                    {t('shopping-cart__order-block-error')}
                  </p>
                )}
              </label>

              <label className="shopping-cart__order-block-radio-dropdown-label">
                {t('shopping-cart__order-block-radio-dropdown-label2')}
                <input
                  type="text"
                  className={classNames(
                    'shopping-cart__order-block-radio-dropdown-input',
                    {
                      'shopping-cart__order-block-radio-dropdown-input--error':
                        areErrorsOn && !cart.delivery.branch,
                    },
                  )}
                  placeholder={t(
                    'shopping-cart__order-block-radio-dropdown-input-placeholder2',
                  )}
                  onChange={(e) =>
                    dispatch(updateDeliveryBranch(e.target.value))
                  }
                  value={cart.delivery.branch}
                />
                {areErrorsOn && !cart.delivery.branch && (
                  <p className="shopping-cart__order-block-error">
                    {t('shopping-cart__order-block-error2')}
                  </p>
                )}
              </label>
            </div>

            <p className="shopping-cart__order-block-receiving-notification">
              {t('shopping-cart__order-block-receiving-notification')}
              <br /> {t('shopping-cart__order-block-receiving-notification2')}
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
            {t('shopping-cart__order-block-radio-dropdown-title4')}
          </h4>
        )}
        subtitle={`${t('shopping-cart__order-block-receiving-notification')} ${t(
          'shopping-cart__order-block-receiving-notification2',
        )}`}
        renderContent={() => (
          <>
            <div className="shopping-cart__order-block-payments-info">
              <div className="shopping-cart__order-block-payments-info-block">
                <div className="shopping-cart__order-block-payments-info-unit">
                  <p className="shopping-cart__order-block-payments-info-label">
                    {t('shopping-cart__order-block-payments-info-label')}
                  </p>
                  <div className="shopping-cart__order-block-payments-info-copy">
                    <p className="shopping-cart__order-block-payments-info-value">
                      {t('shopping-cart__order-block-payments-info-value')}
                    </p>
                    <CopySVG
                      className="shopping-cart__order-block-payments-info-copy-icon"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          t('shopping-cart__order-block-payments-info-value'),
                        );
                      }}
                    />
                  </div>
                </div>

                <div className="shopping-cart__order-block-payments-info-unit">
                  <p className="shopping-cart__order-block-payments-info-label">
                    {t('shopping-cart__order-block-payments-info-label2')}
                  </p>
                  <div className="shopping-cart__order-block-payments-info-copy">
                    <p className="shopping-cart__order-block-payments-info-value">
                      {t('shopping-cart__order-block-payments-info-value2')}
                    </p>
                    <CopySVG
                      className="shopping-cart__order-block-payments-info-copy-icon"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          t('shopping-cart__order-block-payments-info-value2'),
                        );
                      }}
                    />
                  </div>
                </div>

                <div
                  className="shopping-cart__order-block-payments-info-unit 
                  shopping-cart__order-block-payments-info-unit--last"
                >
                  <p className="shopping-cart__order-block-payments-info-label">
                    {t('shopping-cart__order-block-payments-info-label3')}
                  </p>
                  <p className="shopping-cart__order-block-payments-info-value">
                    {totalPrice} грн
                  </p>
                </div>
              </div>

              <div className="shopping-cart__order-block-payments-info-block">
                <div className="shopping-cart__order-block-payments-info-unit">
                  <p className="shopping-cart__order-block-payments-info-label">
                    {t('shopping-cart__order-block-payments-info-label4')}
                  </p>
                  <p className="shopping-cart__order-block-payments-info-value">
                    {t('shopping-cart__order-block-payments-info-value4')}
                  </p>
                </div>

                <div className="shopping-cart__order-block-payments-info-unit">
                  <p className="shopping-cart__order-block-payments-info-label">
                    {t('shopping-cart__order-block-payments-info-label5')}
                  </p>
                  <p className="shopping-cart__order-block-payments-info-value">
                    {t('shopping-cart__order-block-payments-info-value5')}
                  </p>
                </div>

                <div className="shopping-cart__order-block-payments-info-unit">
                  <p className="shopping-cart__order-block-payments-info-label">
                    {t('shopping-cart__order-block-payments-info-label6')}
                  </p>
                  <p className="shopping-cart__order-block-payments-info-value">
                    {t('shopping-cart__order-block-payments-info-value6')}
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

                  <p
                    className="shopping-cart__order-block-payments-upload-notification-content"
                    dangerouslySetInnerHTML={{
                      __html: t(
                        'shopping-cart__order-block-payments-upload-notification-content',
                      ),
                    }}
                  ></p>
                </div>
              )}

              <div className="shopping-cart__order-block-payments-upload-title">
                <p className="shopping-cart__order-block-payments-upload-title-text">
                  {t('shopping-cart__order-block-payments-upload-title-text')}
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
                      {t(
                        'shopping-cart__order-block-payments-upload-input-text',
                      )}
                    </p>
                    <AddPhotoAlternateSVG />
                  </>
                )}
              />
              {areErrorsOn && files.length === 0 && (
                <p className="shopping-cart__order-block-error">
                  {t('shopping-cart__order-block-error11')}
                </p>
              )}
              {files.length > 0 && (
                <PhotosList
                  files={files}
                  setFiles={setFiles}
                />
              )}

              <p className="shopping-cart__order-block-payments-upload-formats">
                {t('shopping-cart__order-block-payments-upload-formats')}
              </p>
            </div>

            <p className="shopping-cart__order-block-receiving-notification">
              {t('shopping-cart__order-block-receiving-notification')}
              <br /> {t('shopping-cart__order-block-receiving-notification2')}
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
            {t('shopping-cart__order-block-radio-dropdown-title5')}
          </h4>
        )}
        subtitle={`${t('shopping-cart__order-block-receiving-notification')} ${t(
          'shopping-cart__order-block-receiving-notification2',
        )}`}
        renderContent={() => (
          <>
            <div className="shopping-cart__order-block-payments-info">
              <div className="shopping-cart__order-block-payments-info-block">
                <div className="shopping-cart__order-block-payments-info-unit">
                  <p className="shopping-cart__order-block-payments-info-label">
                    {t('shopping-cart__order-block-payments-info-label7')}
                  </p>
                  <div className="shopping-cart__order-block-payments-info-copy">
                    <p className="shopping-cart__order-block-payments-info-value">
                      {t('shopping-cart__order-block-payments-info-value7')}
                    </p>
                    <CopySVG
                      className="shopping-cart__order-block-payments-info-copy-icon"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          t('shopping-cart__order-block-payments-info-value7'),
                        );
                      }}
                    />
                  </div>
                </div>

                <div className="shopping-cart__order-block-payments-info-unit">
                  <p className="shopping-cart__order-block-payments-info-label">
                    {t('shopping-cart__order-block-payments-info-label8')}
                  </p>
                  <p className="shopping-cart__order-block-payments-info-value">
                    {totalPrice} грн
                  </p>
                </div>
              </div>

              <div className="shopping-cart__order-block-payments-info-block">
                <div className="shopping-cart__order-block-payments-info-unit">
                  <p className="shopping-cart__order-block-payments-info-label">
                    {t('shopping-cart__order-block-payments-info-label9')}
                  </p>
                  <p className="shopping-cart__order-block-payments-info-value">
                    {t('shopping-cart__order-block-payments-info-value9')}
                  </p>
                </div>

                <div
                  className="shopping-cart__order-block-payments-info-unit 
                  shopping-cart__order-block-payments-info-unit--last"
                >
                  <p className="shopping-cart__order-block-payments-info-label">
                    {t('shopping-cart__order-block-payments-info-label10')}
                  </p>
                  <p className="shopping-cart__order-block-payments-info-value">
                    {t('shopping-cart__order-block-payments-info-value10')}
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
                    {t(
                      'shopping-cart__order-block-payments-upload-notification-content',
                    )}
                  </p>
                </div>
              )}

              <div className="shopping-cart__order-block-payments-upload-title">
                <p className="shopping-cart__order-block-payments-upload-title-text">
                  {t('shopping-cart__order-block-payments-upload-title-text')}
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
                      {t(
                        'shopping-cart__order-block-payments-upload-input-text',
                      )}
                    </p>
                    <AddPhotoAlternateSVG />
                  </>
                )}
              />
              {areErrorsOn && files.length === 0 && (
                <p className="shopping-cart__order-block-error">
                  {t('shopping-cart__order-block-error11')}
                </p>
              )}
              {files.length > 0 && (
                <PhotosList
                  files={files}
                  setFiles={setFiles}
                />
              )}

              <p className="shopping-cart__order-block-payments-upload-formats">
                {t('shopping-cart__order-block-payments-upload-formats')}
              </p>
            </div>

            <p className="shopping-cart__order-block-receiving-notification">
              {t('shopping-cart__order-block-receiving-notification')}
              <br /> {t('shopping-cart__order-block-receiving-notification2')}
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
              {t('shopping-cart__order-block-radio-dropdown-title6')}
            </h4>
          )}
          subtitle={t('shopping-cart__order-block-receiving-notification3')}
          renderContent={() => (
            <>
              <div className="shopping-cart__order-block-payments-info">
                <div className="shopping-cart__order-block-payments-info-block">
                  <div
                    className="shopping-cart__order-block-payments-info-unit 
                  shopping-cart__order-block-payments-info-unit--last"
                  >
                    <p className="shopping-cart__order-block-payments-info-label">
                      {t('shopping-cart__order-block-storage-location-label')}
                    </p>
                    <Link
                      to={'https://maps.app.goo.gl/wAdeT2GGibefrzub9'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shopping-cart__order-block-payments-info-link"
                    >
                      {t(
                        'shopping-cart__order-block-storage-location-link-text',
                      )}
                    </Link>
                  </div>
                </div>

                <div className="shopping-cart__order-block-payments-info-block">
                  <div className="shopping-cart__order-block-payments-info-unit">
                    <p className="shopping-cart__order-block-payments-info-label">
                      {t('shopping-cart__order-block-payments-info-label11')}
                    </p>
                    <p className="shopping-cart__order-block-payments-info-value">
                      {totalPrice} грн
                    </p>
                  </div>
                </div>
              </div>

              <p className="shopping-cart__order-block-receiving-notification">
                {t('shopping-cart__order-block-receiving-notification3')}
              </p>
            </>
          )}
          isAfterTitleOn={false}
        />
      )}
    </div>
  );
};
