import styles from "./image.module.css";
import Testimonial from "./Testimonial";
import Trustpilot from "./Trustpilot";

export default function Image() {
  return (
    <div className={styles.image_container}>
      <Testimonial />
      <Trustpilot />
    </div>
  );
}
