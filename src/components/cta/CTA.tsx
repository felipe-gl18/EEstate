import styles from "./cta.module.css";
import Email from "./email/Email";
import Headline from "./headline/Headline";

export default function CTA() {
  return (
    <div className={styles.cta}>
      <Headline />
      <Email />
      <div className={styles.community}>
        <span>
          Join <strong>10,000+</strong> other landlords in our
        </span>
        <div className={styles.logo}>
          <img src="./src/assets/logo.png" alt="EEstate" />
        </div>
        <span>community.</span>
      </div>
    </div>
  );
}
