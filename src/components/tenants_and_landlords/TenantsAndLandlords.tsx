import Features from "./features/Features";
import Headline from "./headline/Headline";
import Stats from "./stats/Stats";
import styles from "./tenants_and_landlords.module.css";

export default function TenantsAndLandlords() {
  return (
    <div className={styles.tenants_and_landlords}>
      <Headline />
      <Features />
      <Stats />
    </div>
  );
}
