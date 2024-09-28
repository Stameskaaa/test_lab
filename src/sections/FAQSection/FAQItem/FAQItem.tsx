import { useState } from 'react';
import { ButtonMinus } from './buttons/ButtonMinus';
import { ButtonPlus } from './buttons/ButtonPlus';

import styles from './faqItem.module.css';
export const FAQItem = () => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <hr />
      <div className={styles.question}>
        <p>Подтверждено: сознание наших соотечественников не замутнено пропагандой?</p>{' '}
        {showAnswer ? (
          <ButtonMinus onClick={() => setShowAnswer(false)} />
        ) : (
          <ButtonPlus onClick={() => setShowAnswer(true)} />
        )}
      </div>
      {showAnswer && (
        <div className={`${styles.answer} ${styles.fade_in}`}>
          В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные
          задания по разработке дальнейших направлений развития. Предварительные выводы
          неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих
          финансовых и административных условий.
        </div>
      )}
    </div>
  );
};
