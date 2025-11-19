import { BsChatSquareQuoteFill } from "react-icons/bs";
import styles from "./image.module.css";

//images
import logo from "../../../assets/logo.png";

export default function Testimonial() {
  return (
    <div className={styles.testimonial}>
      <div className={styles.profile}>
        <div className={styles.photo}></div>
        <div className={styles.info}>
          <div className={styles.name_role}>
            <p>Manuel Villa</p>
            <span>Renter</span>
          </div>
          <div className={styles.company}>
            <span>Moved with</span>
            <div className={styles.logo}>
              <img src={logo} alt="EEstate" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonial_phrase}>
        <BsChatSquareQuoteFill size={64} />
        <p>
          I loved how smooth the move was, and finally got the house we wanted.
        </p>
      </div>
      <div className={styles.testimonial_separator}></div>
      <div className={styles.testimonial_numbers}>
        <div className={styles.saved_up_to}>
          <h2>$1,500</h2>
          <p>Saved up to</p>
        </div>
        <div className={styles.process_time}>
          <h2>-24 hrs</h2>
          <p>Process time</p>
        </div>
      </div>
    </div>
  );
}
