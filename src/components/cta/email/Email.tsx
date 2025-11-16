import styles from "./email.module.css";
export default function Email() {
  return (
    <div className={styles.email}>
      <input type="text" placeholder="Enter your email address" />
      <button>Submit</button>
    </div>
  );
}
