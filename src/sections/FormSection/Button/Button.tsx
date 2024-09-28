import styles from './Button.module.css';

interface Props {
  text: string;
  isLoading: boolean;
}

export const Button: React.FC<Props> = ({ text, isLoading }) => {
  return (
    <button className={styles.button} disabled={isLoading}>
      {isLoading ? <div className={styles.loader}></div> : text}
    </button>
  );
};
