import styles from './Buttons.module.css';

interface Props {
  onClick: () => void;
}

export const ButtonMinus: React.FC<Props> = ({ onClick }) => {
  return <div onClick={onClick} className={`${styles.button} ${styles.cross_button}`}></div>;
};
