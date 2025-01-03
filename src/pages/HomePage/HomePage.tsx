import { ArticlesSlider } from '../../components/Sliders/ArticlesSlider';
import { DiscussionsSlider } from '../../components/Sliders/DiscussionsSlider';
import { ExhibitionsSlider } from '../../components/Sliders/ExhibitionsSlider';

export const HomePage = () => {
  return (
    <>
      <ExhibitionsSlider />

      <ArticlesSlider />

      <DiscussionsSlider />
    </>
  );
};
