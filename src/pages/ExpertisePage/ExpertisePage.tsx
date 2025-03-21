// import infoOutline from '/images/expertise/info-outline.svg';
// import examplePhoto from '/images/expertise/Photo.png';
// import { Tooltip } from '../../components/Tooltip/Tooltip';
// import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import { HowToExpertise } from './HowToExpertise/HowToExpertise';
import { ItemEvaluation } from './ItemEvaluation/ItemEvaluation';
import { Info } from '../../components/Imgs/Info';
import { PageHelper } from './PageHelper/PageHelper';

export const ExpertisePage = () => {
  // const { t } = useTranslation();

  // const tooltipList = t('expertise.heading.tooltip.list', {
  //   returnObjects: true,
  // }) as string[];
  // const stepsList = t('expertise.steps.list', { returnObjects: true }) as {
  //   title: string;
  //   text: string;
  // }[];
  // const optionsList = t('expertise.options.list', { returnObjects: true }) as {
  //   header: string;
  //   details: {
  //     what: { label: string; description: string[] };
  //     price: { label: string; description: string | string[] };
  //     owner?: { label: string; description: string[] };
  //   };
  //   button: string;
  // }[];

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [helperOn, setHelperOn] = useState(false);

  let timeout: NodeJS.Timeout;

  const leaveLeave = () => {
    timeout = setTimeout(() => {
      setHelperOn(false);
    }, 2000);
  };

  const mouseOn = () => {
    clearTimeout(timeout);
    setHelperOn(true);
  };

  return (
    <div className="expertise">
      <div className="expertise__title">
        <h1 className="expertise__header"> Оцінювання та експертиза лотів</h1>
        <Info
          onMouseLeave={() => leaveLeave()}
          onMouseEnter={() => mouseOn()}
          onClick={() => setHelperOn(true)}
          className="expertise__icon"
        />
        <PageHelper
          setHelperOn={setHelperOn}
          onMouseLeave={() => leaveLeave()}
          onMouseEnter={() => mouseOn()}
          helperOn={helperOn}
        />
      </div>
      <HowToExpertise scrollToSection={scrollToSection} />
      <ItemEvaluation sectionRef={sectionRef} />
    </div>
  );
};
