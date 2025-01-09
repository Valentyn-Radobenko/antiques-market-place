import { ExhibitionsSlider } from '../../components/Sliders/ExhibitionsSlider';
import { ArticlesSlider } from '../../components/Sliders/ArticlesSlider';
import { DiscussionsSlider } from '../../components/Sliders/DiscussionsSlider';
// import SimpleSlider from '../../components/Sliders/SimpleSlider';

export const HomePage = () => {
  return (
    <>
      {/* <SimpleSlider /> */}

      <ExhibitionsSlider />

      <ArticlesSlider />

      <DiscussionsSlider />
    </>
  );
};
