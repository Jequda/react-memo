import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import Checkbox from "../../components/Checkbox/Checkbox";
import { useCheckbox } from "../../hooks/useCheckbox";

export function SelectLevelPage() {
  const { setIsEasyMode } = useCheckbox();
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
        {/* +++1. Требуется создать контекст который будет передавать данные режима  */}
        {/* 2. Отобразить количество попыток в компоненте cards, там же будет состояние попыток useState(isEasyMode ? 3 : 1); */}
        {/* 3. Нужно в компоненте cards, внутри функции OpenCard, создать условие, если вкдючен легкий режим */}
        {/* 4. Если ровно 2 карточки без пары, а попытки еще остались, то мы должны перевернуть открытые карточки без пары и вычесть попытку */}
        <Checkbox
          id={"modeCheckbox"}
          name={"modeCheckbox"}
          label={"Включить легкий режим"}
          onClick={() => {
            setIsEasyMode(prev => !prev);
          }}
        />
      </div>
    </div>
  );
}
