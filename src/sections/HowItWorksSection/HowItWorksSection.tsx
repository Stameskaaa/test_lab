import { BottomBlock } from './BottomBlock/BottomBlock';
import { TopBlock } from './TopBlock/TopBlock';
import styles from './HowItWorksSection.module.css';

export const HowItWorksSection = () => {
  return (
    <section id="section2" className={styles.section}>
      <TopBlock />
      <BottomBlock />
    </section>
  );
};
