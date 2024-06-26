import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import Checkbox from "../../components/Checkbox/Checkbox";
import { useCheckbox } from "../../hooks/useCheckbox";
import { LeaderboardLink } from "../../components/LeaderboardLink/LeaderboardLink";

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
        <Checkbox
          id={"modeCheckbox"}
          name={"modeCheckbox"}
          label={"Включить легкий режим"}
          onClick={() => {
            setIsEasyMode(prev => !prev);
          }}
        />
        <LeaderboardLink>Перейти к лидерборду</LeaderboardLink>
      </div>
    </div>
  );
}
