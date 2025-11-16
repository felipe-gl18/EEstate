import { BiBuildings, BiSearch } from "react-icons/bi";
import Number from "./Number";
import styles from "./numbers.module.css";
import { GoPeople } from "react-icons/go";
import { FaKey } from "react-icons/fa";

export default function Numbers() {
  return (
    <div className={styles.numbers}>
      <Number
        Icon={GoPeople}
        SubIcon={FaKey}
        title="50k+ renters"
        description="believe in our service"
      />
      <Number
        SubIcon={BiSearch}
        Icon={BiBuildings}
        title="10k+ properties"
        description="and house ready for occupancy"
      />
    </div>
  );
}
