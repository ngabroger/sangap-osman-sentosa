import HeroComponent from './components/heroComponent';
import FirstSection from './components/FirstSection';
import ThirdSection from './components/ThirdSection';
import SecondSection from './components/SecondSection';
import CardList from '../../components/widget/CardList';
import ForthSection from './components/ForthSection';
import SeoManage from '../../components/seoManage';
export default function Homepage() {
  return (
    <div>
      <SeoManage title={'HomePage'} />
      <HeroComponent />
      <FirstSection />
      <ThirdSection />
      <SecondSection />
      <ForthSection />
      <CardList />
    </div>
  );
}
