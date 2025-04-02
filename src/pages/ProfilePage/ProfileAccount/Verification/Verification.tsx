import { FilesInput } from '../../../../components/FilesInput/FilesInput';
import { verifivationData } from '../../../../data/verificationBlockData';
import { useState } from 'react';

export const Verification = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="account-verification">
      <h3 className="account-verification__title">
        {verifivationData.title.nameUa}
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
                {step.title.nameUa}
              </p>
            </div>
            <ul className="account-verification__list">
              {step.list.map((item) => (
                <li
                  key={item.nameEng}
                  className="account-verification__item"
                >
                  {item.nameUa}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <FilesInput
        files={files}
        setFiles={setFiles}
      />
    </div>
  );
};
