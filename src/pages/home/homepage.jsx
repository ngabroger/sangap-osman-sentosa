import HeroComponent from './components/heroComponent';
import FirstSection from './components/FirstSection';
import ThirdSection from './components/ThirdSection';
import SecondSection from './components/SecondSection';
export default function Homepage() {
  return (
    <div>
      <HeroComponent />
      <FirstSection />
      <ThirdSection />
      <SecondSection />
    </div>
  );
}
