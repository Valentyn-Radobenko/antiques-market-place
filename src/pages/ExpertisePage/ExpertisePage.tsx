import infoOutline from '/images/expertise/info-outline.svg';
import examplePhoto from '/images/expertise/Photo.png';
import { Tooltip } from '../../components/Tooltip/Tooltip';
import { useTranslation } from 'react-i18next';

export const ExpertisePage = () => {
  const { t } = useTranslation();

  const tooltipList = t('expertise.heading.tooltip.list', {
    returnObjects: true,
  }) as string[];
  const stepsList = t('expertise.steps.list', { returnObjects: true }) as {
    title: string;
    text: string;
  }[];
  const optionsList = t('expertise.options.list', { returnObjects: true }) as {
    header: string;
    details: {
      what: { label: string; description: string[] };
      price: { label: string; description: string | string[] };
      owner?: { label: string; description: string[] };
    };
    button: string;
  }[];

  return (
    <section className="expertise">
      <div className="expertise__heading">
        <h2 className="expertise__heading-text">
          {t('expertise.heading.title')}
        </h2>
        <Tooltip
          customTooltipClassName="expertise__tooltip"
          customContentClassName="expertise__tooltip-content"
          renderButton={() => (
            <img
              className="expertise__heading-icon"
              alt="Info icon"
              src={infoOutline}
            />
          )}
          renderContent={() => (
            <>
              <h4 className="expertise__tooltip-title">
                {t('expertise.heading.tooltip.title')}
              </h4>
              <br />
              <ul className="expertise__tooltip-list">
                {tooltipList.map((item, index) => (
                  <li
                    key={index}
                    className="expertise__tooltip-item"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </ul>
              <br />
              <p className="expertise__tooltip-info">
                {t('expertise.heading.tooltip.info')}
              </p>
            </>
          )}
        />
      </div>

      <article className="expertise__steps">
        <h3 className="expertise__steps-title">{t('expertise.steps.title')}</h3>
        <h4 className="expertise__steps-minor-title">
          {t('expertise.steps.minorTitle')}
        </h4>
        <div className="expertise__steps-list">
          {stepsList.map((step, index) => (
            <div
              key={index}
              className="expertise__steps-item"
            >
              <div className="expertise__steps-item-img-wrapper">
                <img
                  className="expertise__steps-item-img"
                  alt="Step icon"
                  src={examplePhoto}
                />
              </div>
              <div className="expertise__steps-item-content">
                <h5 className="expertise__steps-item-title">{step.title}</h5>
                <p className="expertise__steps-item-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="expertise__options">
        <h3 className="expertise__options-title">
          {t('expertise.options.title')}
        </h3>
        <div className="expertise__options-items">
          {optionsList.map((option, index) => (
            <div
              key={index}
              className="expertise__options-item"
            >
              <b className="expertise__options-item-header">{option.header}</b>
              <div className="expertise__options-item-content">
                <div className="expertise__options-item-details">
                  <div className="expertise__options-item-details-label">
                    {option.details.what.label}
                  </div>
                  {option.details.what.description.map((desc, i) => (
                    <p
                      key={i}
                      className="expertise__options-item-details-description"
                    >
                      {desc}
                    </p>
                  ))}
                </div>
                <div className="expertise__options-item-details">
                  <div className="expertise__options-item-details-label">
                    {option.details.price.label}
                  </div>
                  {Array.isArray(option.details.price.description) ?
                    <ul className="expertise__options-item-details-price-list">
                      {option.details.price.description.map((price, i) => (
                        <li
                          key={i}
                          className="expertise__options-item-details-description expertise__options-item-details-description--list-style-disc"
                        >
                          {price}
                        </li>
                      ))}
                    </ul>
                  : <p className="expertise__options-item-details-description">
                      {option.details.price.description}
                    </p>
                  }
                </div>
                {option.details.owner && (
                  <div className="expertise__options-item-details">
                    <div className="expertise__options-item-details-label">
                      {option.details.owner.label}
                    </div>
                    <ul className="expertise__options-item-details-benefits-list">
                      {option.details.owner.description.map((benefit, i) => (
                        <li
                          key={i}
                          className="expertise__options-item-details-description expertise__options-item-details-description--list-style-disc"
                        >
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <button className="expertise__options-item-button">
                {option.button}
              </button>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};
