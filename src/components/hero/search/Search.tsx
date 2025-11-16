import { useState } from "react";
import styles from "./search.module.css";
import Tabs from "./Tabs";
import { CgCalendar } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";

export type TTabs = "rent" | "buy" | "sell";

export default function Search() {
  const [selectedTab, setSelectedTab] = useState<TTabs>("rent");

  return (
    <div className={styles.search}>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className={styles.search_content}>
        <div className={styles.search_field}>
          <label htmlFor="">Location</label>
          <div className={styles.search_input}>
            <input type="text" placeholder="Ceará, Brazil" />
            <CiLocationOn size={20} />
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.search_field}>
          <label htmlFor="">When</label>
          <div className={styles.search_input}>
            <input type="text" placeholder="Select Move-in Date" />
            <CgCalendar size={20} />
          </div>
        </div>
        <div className={styles.separator}></div>
        <button className={styles.search_button}>Browse Properties</button>
        <div className={styles.search_icon}>
          <BsSearch size={24} />
        </div>
      </div>
    </div>
  );
}
