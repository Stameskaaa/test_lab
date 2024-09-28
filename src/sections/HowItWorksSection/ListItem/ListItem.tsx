import { ReactElement } from 'react';
import styles from './ListItem.module.css';
interface Props {
  text: string;
  icon?: ReactElement;
  title: string;
}

export const ListItem: React.FC<Props> = ({ title, text, icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>
        <strong className={styles.title}> {title}</strong>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
