import { ArticlesSlider } from '../../components/Sliders/ArticlesSlider';
import { DiscussionsSlider } from '../../components/Sliders/DiscussionsSlider';
import { ExhibitionsSlider } from '../../components/Sliders/ExhibitionsSlider';
import { articlesSlides } from '../../data/articlesSlides';
import { discussionsSlides } from '../../data/discussionsSlides';
import { exhibitionsSlides } from '../../data/exhibitionsSlides';

export const HomePage = () => {
  return (
    <>
      <ExhibitionsSlider slides={exhibitionsSlides} slidesPerView={1} />

      <ArticlesSlider slides={articlesSlides} slidesPerView={2} />

      <DiscussionsSlider slides={discussionsSlides} slidesPerView={2} />
    </>
  );
};
