// import infoOutline from '/images/expertise/info-outline.svg';
// import examplePhoto from '/images/expertise/Photo.png';
// import { Tooltip } from '../../components/Tooltip/Tooltip';
// import { useTranslation } from 'react-i18next';
import { HowToExpertise } from './HowToExpertise/HowToExpertise';
import { ItemEvaluation } from './ItemEvaluation/ItemEvaluation';

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

  return (
    <div className="expertise">
      <h1 className="expertise__header">Оцінювання та експертиза лотів</h1>
      <HowToExpertise />
      <ItemEvaluation />
    </div>
  );
};
