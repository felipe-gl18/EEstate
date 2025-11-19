import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import styles from "./copyright.module.css";

//images
import logo from "../../../assets/logo.png";

export default function Copyright() {
  return (
    <div className={styles.copyright}>
      <div className={styles.copyright_details}>
        <p>©2025</p>
        <div className={styles.logo}>
          <img src={logo} alt="EEstate" />
        </div>
        <p>All rights reserved</p>
      </div>

      <div className={styles.social_icons}>
        <FaFacebookF size={24} />
        <FaInstagram size={24} />
        <FaTwitter size={24} />
        <FaLinkedin size={24} />
      </div>
    </div>
  );
}
