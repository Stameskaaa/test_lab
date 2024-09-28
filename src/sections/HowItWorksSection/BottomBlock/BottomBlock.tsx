import styles from './BottomBlock.module.css';
import muzhik from '../../../assets/2_1.png';
import car from '../../../assets/2_2.png';

export const BottomBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <strong className={styles.title}>Круто, ты дошел до третьего блока</strong>
        <p>
          63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные
          расходы свыше 15 000 ₽.
        </p>
        <p>
          {' '}
          Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на
          процентах и штрафах.
        </p>
      </div>
      <div className={styles.img_container}>
        <img className={styles.img1} alt="N / A" src={muzhik} />
        <img className={styles.img2} alt="N / A" src={car} />
      </div>
    </div>
  );
};
