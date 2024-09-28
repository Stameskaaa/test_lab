import styles from './NavBar.module.css';

interface Props {
  className: string;
  onLinkClick: () => void;
}

export const NavBar: React.FC<Props> = ({ className, onLinkClick }) => {
  return (
    <nav>
      <ul className={`${styles.navbar} ${className} `}>
        <li>
          <a href="#section2" onClick={onLinkClick}>
            Как это работает
          </a>
        </li>

        <li>
          <a href="#statistic" onClick={onLinkClick}>
            3-й блок
          </a>
        </li>

        <li>
          <a href="#sectionFAQ" onClick={onLinkClick}>
            Вопросы и ответы
          </a>
        </li>
        <li>
          <a href="#sectionForm" onClick={onLinkClick}>
            Форма
          </a>
        </li>
      </ul>
    </nav>
  );
};
