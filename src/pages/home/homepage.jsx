import HeroComponent from './components/heroComponent';
import FirstSection from './components/FirstSection';
import ThirdSection from './components/ThirdSection';
import SecondSection from './components/SecondSection';
import CardList from '../../components/widget/CardList';
import ForthSection from './components/ForthSection';
export default function Homepage() {
  return (
    <div>
      <HeroComponent />
      <FirstSection />
      <ThirdSection />
      <SecondSection />
      <ForthSection />
      <CardList />
    </div>
  );
}
