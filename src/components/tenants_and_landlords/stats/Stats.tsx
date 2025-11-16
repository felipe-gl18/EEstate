import styles from "./stats.module.css";

export default function Stats() {
  return (
    <div className={styles.stats}>
      <div className={styles.stat}>
        <h1>7.4%</h1>
        <span>Property Return Rate</span>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.stat}>
        <h1>3,856</h1>
        <span>Property in Sell & Rent</span>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.stat}>
        <h1>2,540</h1>
        <span>Daily Completed Transactions</span>
      </div>
    </div>
  );
}
