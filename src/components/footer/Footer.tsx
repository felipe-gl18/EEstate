import Copyright from "./copyright/Copyright";
import styles from "./footer.module.css";
import Logo from "./logo/Logo";
import NavMenu from "./nav_menu/Nav_Menu";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_top}>
        <Logo />
        <NavMenu />
      </div>
      <Copyright />
    </div>
  );
}
