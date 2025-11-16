import styles from "./headline.module.css";
export default function Headline() {
  return (
    <div className={styles.headline}>
      <h1>
        We make it easy for <strong>tenants</strong> and{" "}
        <strong>landlords</strong>.
      </h1>
      <p>
        Whether it’s selling your current home, getting financing, or buying a
        new home, we make it easy and efficient. The best part? you’ll save a
        bunch of money and time with our services.
      </p>
    </div>
  );
}
