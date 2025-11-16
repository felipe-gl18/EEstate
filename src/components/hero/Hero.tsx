import Headline from "./headline/Headline";
import styles from "./hero.module.css";
import Image from "./image/Image";
import Navbar from "./navbar/Navbar";
import Numbers from "./numbers/Numbers";
import Search from "./search/Search";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Navbar />
      <Headline />
      <Search />
      <Numbers />
      <Image />
    </div>
  );
}
