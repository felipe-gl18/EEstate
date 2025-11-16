import { LuSquarePlay } from "react-icons/lu";
import styles from "./features.module.css";
import { FaHouseCircleCheck } from "react-icons/fa6";

export default function Features() {
  return (
    <div className={styles.features}>
      <div className={styles.feature}>
        <div className={styles.feature_icon}>
          <div className={styles.feature_icon_bg}>
            <LuSquarePlay color="#7065F0" size={32} />
          </div>
        </div>
        <div className={styles.feature_details}>
          <h2>Virtual home tour</h2>
          <p>
            You can communicate directly with landlords and we provide you with
            virtual tour before you buy or rent the property.
          </p>
        </div>
      </div>
      <div className={styles.feature}>
        <div className={styles.feature_icon}>
          <div className={styles.feature_icon_bg}>
            <FaHouseCircleCheck color="#7065F0" size={32} />
          </div>
        </div>
        <div className={styles.feature_details}>
          <h2>Find the best deal</h2>
          <p>
            Browse thousands of properties, save your favorites and set up
            search alerts so you don’t miss the best home deal!
          </p>
        </div>
      </div>
    </div>
  );
}
