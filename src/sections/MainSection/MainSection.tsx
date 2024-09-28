import { Button } from './Button/Button';
import styles from './MainSection.module.css';
export const MainSection = () => {
  return (
    <section className={styles.main_section}>
      <div className={styles.main__container}>
        <div className={styles.main__info}>
          <p className={styles.main__info_top}>Говорят, никогда не поздно</p>
          <p className={styles.main__info_top}>сменить профессию</p>
          <p className={styles.main__info_bottom}>
            Сделай круто тестовое задание и у тебя получится
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};
