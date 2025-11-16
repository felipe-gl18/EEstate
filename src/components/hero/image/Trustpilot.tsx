import styles from "./image.module.css";
import { AiFillSafetyCertificate } from "react-icons/ai";

export default function Trustpilot() {
  return (
    <div className={styles.trustpilot}>
      <h3>Excellent</h3>
      <div className={styles.stars}>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
      </div>
      <span>From 3,264 reviews</span>
      <AiFillSafetyCertificate
        size={32}
        color="lightgreen"
        className={styles.safety}
      />
    </div>
  );
}
