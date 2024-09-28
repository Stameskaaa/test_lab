import { Footer } from '../Footer/Footer';
import { FormSection } from '../../sections/FormSection/FormSection';
import { ReviewsSection } from '../../sections/ReviewsSection/ReviewsSection';
import { MainSection } from '../../sections/MainSection/MainSection';
import { HowItWorksSection } from '../../sections/HowItWorksSection/HowItWorksSection';
import { FAQSection } from '../../sections/FAQSection/FAQSection';
import { StatisticSection } from '../../sections/StatisticSection/StatisticSection';

export const Main = () => {
  return (
    <main>
      <MainSection />
      <HowItWorksSection />
      <ReviewsSection />
      <FAQSection />
      <StatisticSection />
      <FormSection />
      <Footer />
    </main>
  );
};
