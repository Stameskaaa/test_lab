import styles from './Card.module.css';
import Kostya from '../../../assets/Ellipse 21.png';

export const Card = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.user_profile}>
        <img src={Kostya} alt="N / A" />
        <div className={styles.user_info}>
          <strong>Константинов Михаил Павлович</strong>
          <p>Санкт - Петербург</p>
        </div>
      </div>

      <div className={styles.content}>
        Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие
        возможности для анализа существующих паттернов поведения. В своём стремлении улучшить
        пользовательский опыт
      </div>
    </div>
  );
};
