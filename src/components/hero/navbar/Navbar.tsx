import { IoIosArrowDown } from "react-icons/io";
import styles from "./navbar.module.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

//images
import logo from "../../../assets/logo.png";

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.left_items}>
        <div className={styles.logo}>
          <img src={logo} alt="EEstate" />
        </div>
        <ul
          className={`${styles.nav_items} ${!menuIsOpen ? styles.hidden : ""}`}
        >
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li>
            Manage Property
            <IoIosArrowDown />
          </li>
          <li>
            Resources
            <IoIosArrowDown />
          </li>
        </ul>
      </div>
      <div
        className={`${styles.right_items} ${!menuIsOpen ? styles.hidden : ""}`}
      >
        <button className={styles.login_button}>Login</button>
        <button className={styles.signup_button}>Sign Up</button>
      </div>
      <div className={styles.menu} onClick={() => setMenuIsOpen(!menuIsOpen)}>
        {menuIsOpen ? <IoClose size={32} /> : <HiMenuAlt3 size={32} />}
      </div>
    </div>
  );
}
