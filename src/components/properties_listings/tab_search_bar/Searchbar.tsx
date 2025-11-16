import styles from "./searchbar.module.css";
import { BiSearch } from "react-icons/bi";

export default function Searchbar({
  setSearch,
}: {
  setSearch: (value: string) => void;
}) {
  return (
    <div className={styles.searchbar}>
      <BiSearch size={34} color="#7065F0" />
      <input
        onChange={(event) => setSearch(event.currentTarget.value)}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}
