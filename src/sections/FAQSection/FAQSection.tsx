import { FAQItem } from './FAQItem/FAQItem';
import styles from './FAQSection.module.css';

export const FAQSection = () => {
  return (
    <section id="sectionFAQ" className={styles.wrapper}>
      <div className={styles.container}>
        <strong className={styles.title}>Вопросы и ответы</strong>
        <div className={styles.faqList}>
          <FAQItem />
          <FAQItem />
          <FAQItem />
          <FAQItem />
          <FAQItem />
          <FAQItem />
          <FAQItem />
          <FAQItem />
          <FAQItem />
          <FAQItem />
        </div>
      </div>
    </section>
  );
};
