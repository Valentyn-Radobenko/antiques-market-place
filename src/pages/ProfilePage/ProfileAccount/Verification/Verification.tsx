import { useSelector } from 'react-redux';
import { FilesInput } from '../../../../components/FilesInput/FilesInput';
import { verifivationData } from '../../../../data/verificationBlockData';
import { useState } from 'react';
import { SavingState } from '../../../../store/store';
import { IdCardSVG } from '../../../../components/Imgs/IdCardSVG';
import { ClockLoaderSVG } from '../../../../components/Imgs/ClockLoaderSVG';

export const Verification = () => {
  const [files, setFiles] = useState<File[]>([]);
  const lang = useSelector((state: SavingState) => state.language.language);

  return (
    <div className="account-verification reveal hidden">
      <h3 className="account-verification__title">
        {lang === 'ua' && verifivationData.title.nameUa}
        {lang === 'en' && verifivationData.title.nameEng}
      </h3>
      <div className="account-verification__reasons">
        {verifivationData.steps.map((step) => (
          <div
            key={step.title.nameEng}
            className="account-verification__reason"
          >
            <div className="account-verification__resons-title">
              {step.svg}
              <p className="account-verification__resons-title-text">
                {lang === 'ua' && step.title.nameUa}
                {lang === 'en' && step.title.nameEng}
              </p>
            </div>
            <ul className="account-verification__list">
              {step.list.map((item) => (
                <li
                  key={item.nameEng}
                  className="account-verification__item"
                >
                  {lang === 'ua' && item.nameUa}
                  {lang === 'en' && item.nameEng}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {files.length === 0 ?
        <FilesInput
          files={files}
          setFiles={setFiles}
        />
      : <div className="account-verification__verified">
          <IdCardSVG className="account-verification__id-card" />
          <div className="account-verification__verified-text-block">
            <h3 className="account-verification__verified-h3">
              Верифікація на перевірці!
            </h3>
            <p className="account-verification__verified-text">
              Очікуйте на сповіщення, про підтвердження верифікації – у
              "Листуванні", чат{' '}
              <span className="account-verification__verified-text-underline">
                "Платформа DIKO"
              </span>
              .
            </p>
          </div>
          <ClockLoaderSVG className="account-verification__cloak-loader" />
        </div>
      }
    </div>
  );
};
