import styles from './Buttons.module.css';

interface Props {
  onClick: () => void;
}

export const ButtonPlus: React.FC<Props> = ({ onClick }) => {
  return <div onClick={onClick} className={`${styles.button} ${styles.plus_button}`}></div>;
};
