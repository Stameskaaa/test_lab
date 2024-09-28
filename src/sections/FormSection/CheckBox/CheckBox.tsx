import styles from './CheckBox.module.css';

interface Props {
  label: string;
  isChecked: boolean;
  onClick: () => void;
}

export const CheckBox: React.FC<Props> = ({ label, isChecked, onClick }) => {
  return (
    <label className={styles.container}>
      <input onChange={onClick} checked={isChecked} className={styles.checkBox} type="checkbox" />
      {label}
    </label>
  );
};
