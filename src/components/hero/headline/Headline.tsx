import styles from "./headline.module.css";

export default function Headline() {
  return (
    <div className={styles.headline}>
      <h1 className={styles.headline_title}>
        Buy, rent, or sell your property easily
      </h1>
      <span className={styles.headline_subtitle}>
        A great platform to buy, sell, or even rent your properties without any
        commisions.
      </span>
    </div>
  );
}
