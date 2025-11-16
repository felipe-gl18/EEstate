import styles from "./logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src="./src/assets/logo.png" alt="EEstate" />
    </div>
  );
}
