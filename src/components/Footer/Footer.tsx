import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <>
      <hr className={styles.hr} />
      <footer className={styles.wrapper}>
        <p>© 2021 Лаборатория интернет</p>
      </footer>
    </>
  );
};
