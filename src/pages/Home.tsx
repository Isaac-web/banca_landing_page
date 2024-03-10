import ContactSection from '../components/ContactSection';
import GoalKickstartSection from '../components/GoalKickstartSection';
import GrowthMessageComponent from '../components/GrowthMessageComponent';
import HeroSection from '../components/HeroSection';
import LeapPromptComponentSection from '../components/LeapPromptComponentSection';
import OurlatestArticlesSection from '../components/OurlatestArticlesSection';
import PartnersSection from '../components/PartnersSection';
import SolutionsSection from '../components/SolutionsSection';
import TailoredCreditCardSection from '../components/TailoredCreditCardSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PartnersSection />
      <SolutionsSection />
      <GrowthMessageComponent />
      <LeapPromptComponentSection />
      <GoalKickstartSection />
      <TailoredCreditCardSection />
      <OurlatestArticlesSection />
      <ContactSection />
    </div>
  );
};

export default Home;
