import styles from "./headline.module.css";
export default function Headline() {
  return (
    <div className={styles.headline}>
      <h2>No Spam Promise</h2>
      <h1>Are you a landlord?</h1>
      <p>
        Discover ways to increase your home's value and get listed. No Spam.
      </p>
    </div>
  );
}
