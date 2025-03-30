import { verifivationData } from '../../../../data/verificationBlockData';

export const Verification = () => {
  return (
    <div className="account-verification">
      <h3 className="account-verification__title">
        {verifivationData.title.nameUa}
      </h3>
      <div className="account-verification__reasons">
        {verifivationData.steps.map((step) => (
          <div className="account-verification__reason">
            <div className="account-verification__resons-title">
              {step.svg}
              <p className="account-verification__resons-title-text">
                {step.title.nameUa}
              </p>
            </div>
            <ul className="account-verification__list">
              {step.list.map((item) => (
                <li className="account-verification__item">{item.nameUa}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
