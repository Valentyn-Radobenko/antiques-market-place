import { ExhibitionsSlider } from '../../components/Sliders/ExhibitionsSlider';
import { ArticlesSlider } from '../../components/Sliders/ArticlesSlider';
import { DiscussionsSlider } from '../../components/Sliders/DiscussionsSlider';
import { ClubHero } from '../../components/ClubHero/ClubHero';

export const ClubPage = () => {
  return (
    <>
      <ClubHero />

      <ExhibitionsSlider />

      <ArticlesSlider />

      <DiscussionsSlider />
    </>
  );
};
