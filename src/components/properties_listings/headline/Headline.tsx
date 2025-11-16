import styles from "./headline.module.css";

export default function Headline() {
  return (
    <div className={styles.headline}>
      <h1>Based on your location</h1>
      <span>Some of our picked properties near you location.</span>
    </div>
  );
}
