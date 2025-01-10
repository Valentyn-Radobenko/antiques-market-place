import { ExhibitionsSlider } from '../../components/Sliders/ExhibitionsSlider';
import { ArticlesSlider } from '../../components/Sliders/ArticlesSlider';
import { DiscussionsSlider } from '../../components/Sliders/DiscussionsSlider';

export const HomePage = () => {
  return (
    <>
      <ExhibitionsSlider />

      <ArticlesSlider />

      <DiscussionsSlider />
    </>
  );
};
