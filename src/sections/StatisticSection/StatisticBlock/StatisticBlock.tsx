import styles from './StatisticBlock.module.css';

interface Props {
  title: string;
  text: string;
}

export const StatisticBlock: React.FC<Props> = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <strong>{title}</strong>
      <p>{text}</p>
    </div>
  );
};
