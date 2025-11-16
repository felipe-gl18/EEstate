import styles from "./illustration.module.css";

export default function Illustration() {
  return (
    <div className={styles.illustration}>
      <div className={styles.illustration_text}>
        <h2 className={styles.illustration_title}>
          The new way to find your new home
        </h2>
        <p className={styles.illustration_description}>
          Find your dream place to live in with more than 10k+ properties
          listed.
        </p>
      </div>
      <button className={styles.illustration_button}>Browse Properties</button>
      <div className={styles.illustration_image}></div>
    </div>
  );
}
