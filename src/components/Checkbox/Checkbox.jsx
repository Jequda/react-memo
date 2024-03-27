import styles from "./Checkbox.module.css";
// import { ReactComponent as Logo } from "./images/checkbox.svg";

export default function Checkbox({ id, name, label, onClick }) {
  // const checkbox = checkboxImageUrl;
  return (
    <div className={styles.wrapper}>
      <input type="checkbox" id={id} name={name} className={styles.input} onClick={onClick} />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
}
