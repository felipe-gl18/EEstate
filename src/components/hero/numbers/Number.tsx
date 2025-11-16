import type { IconType } from "react-icons";
import styles from "./numbers.module.css";

export default function Number({
  Icon,
  SubIcon,
  title,
  description,
}: {
  Icon: IconType;
  SubIcon: IconType;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.number}>
      <div className={styles.number_icon}>
        <div className={styles.number_icon_bg}>
          <Icon size={32} color="white" />
        </div>
        <div className={styles.number_subicon_bg}>
          <SubIcon size={14} color="white" />
        </div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
