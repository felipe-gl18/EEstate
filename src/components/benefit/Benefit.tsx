import Benefits from "./benefits/Benefits";
import styles from "./benefit.module.css";
import Illustration from "./illustration/Illustration";

export default function Benefit() {
  return (
    <div className={styles.benefit}>
      <Illustration />
      <Benefits />
    </div>
  );
}
