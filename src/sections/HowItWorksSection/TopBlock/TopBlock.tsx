import { DeliveryTrack } from '../../../assets/svg/DeliveryTrack';
import { MoneyBags } from '../../../assets/svg/MoneyBags';
import { Secure } from '../../../assets/svg/Secure';
import { Waiting } from '../../../assets/svg/Waiting';
import { ListItem } from '../ListItem/ListItem';
import styles from './TopBlock.module.css';

export const TopBlock = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Как это работает</h4>
      <div className={styles.info_list}>
        <ListItem
          icon={<Waiting />}
          title="Прочитай задание внимательно"
          text="Думаю у тебя не займет это больше двух-трех минут"
        />
        <ListItem
          icon={<DeliveryTrack />}
          title="Изучи весь макет заранее"
          text="Подумай как это будет работать на разных разрешениях и при скролле"
        />
        <ListItem
          icon={<Secure />}
          title="Сделай хорошо"
          text="Чтобы мы могли тебе доверить подобные задачи в будущем"
        />
        <ListItem
          icon={<MoneyBags />}
          title="Получи предложение"
          text="Ну тут все просто, не я придумал правила, но думаю так и будет)))"
        />
      </div>
    </div>
  );
};
