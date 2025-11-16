import { useState } from "react";
import styles from "./tabs.module.css";
import { FaCoins, FaKey } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState<"rent" | "buy" | "sell">(
    "rent"
  );

  const handleSelectTab = (tab: "rent" | "buy" | "sell") => {
    setSelectedTab(tab);
  };

  return (
    <div className={styles.tabs}>
      <button
        onClick={() => handleSelectTab("rent")}
        className={selectedTab === "rent" ? styles.active : ""}
      >
        <FaKey size={16} />
        Rent
      </button>
      <button
        onClick={() => handleSelectTab("buy")}
        className={selectedTab === "buy" ? styles.active : ""}
      >
        <FaCoins size={16} />
        Buy
      </button>
      <button
        onClick={() => handleSelectTab("sell")}
        className={selectedTab === "sell" ? styles.active : ""}
      >
        <FaHouse size={16} />
        Sell
      </button>
    </div>
  );
}
