import { Link } from "react-router-dom";
import styles from "./LeaderboardLink.module.css";

export function LeaderboardLink({ children }) {
  return (
    <Link className={styles.leaderboadLink} to="/leaderboard">
      {children}
    </Link>
  );
}
