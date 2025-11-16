import type { TTabs } from "./Search";
import styles from "./search.module.css";

export default function Tabs({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: TTabs;
  setSelectedTab: (tab: TTabs) => void;
}) {
  return (
    <div className={styles.search_tabs}>
      <button
        className={`${styles.search_tab} ${
          selectedTab === "rent" ? styles.search_tab_active : ""
        }`}
        onClick={() => setSelectedTab("rent")}
      >
        Rent
      </button>
      <button
        className={`${styles.search_tab} ${
          selectedTab === "buy" ? styles.search_tab_active : ""
        }`}
        onClick={() => setSelectedTab("buy")}
      >
        Buy
      </button>
      <button
        className={`${styles.search_tab} ${
          selectedTab === "sell" ? styles.search_tab_active : ""
        }`}
        onClick={() => setSelectedTab("sell")}
      >
        Sell
      </button>
    </div>
  );
}
