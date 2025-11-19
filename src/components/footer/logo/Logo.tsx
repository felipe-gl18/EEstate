import styles from "./logo.module.css";

//images
import logo from "../../../assets/logo.png";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="EEstate" />
    </div>
  );
}
