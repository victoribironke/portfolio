import Link from "next/link";
import { useRef, useState } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const dropdown = useRef(null);
  const menu = useRef(null);
  const close = useRef(null);
  const header = useRef(null);
  const [isShowing, setIsShowing] = useState(false);

  const showDropdown = () => {
    setIsShowing(!isShowing);
    if (isShowing) {
      header.current.style.borderBottom = "1px solid var(--red)";
      dropdown.current.classList.add(styles.show);
      menu.current.style.display = "none";
      close.current.style.display = "block";
    } else {
      header.current.style.borderBottom = "1px solid black";
      dropdown.current.classList.remove(styles.show);
      menu.current.style.display = "block";
      close.current.style.display = "none";
    }
  };

  return (
    <div ref={header} className={styles.header}>
      <div className={styles.profile}>VI</div>
      <div ref={dropdown} className={styles.dropdown}>
        <ul>
          <li>
            <Link
              className={styles.link}
              target="_blank"
              href="https://drive.google.com/file/d/172MpnWJfhW2-HhCeJCiNzruKlJKZPsCB/view?usp=sharing"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.links}>
        <Link
          className={styles.link}
          target="_blank"
          href="https://drive.google.com/file/d/172MpnWJfhW2-HhCeJCiNzruKlJKZPsCB/view?usp=sharing"
        >
          Resume
        </Link>
        <Link className={styles.link} href="/skills">
          Skills
        </Link>
        <Link className={styles.link} href="/projects">
          Projects
        </Link>
        <Link className={styles.link} href="/contact">
          Contact
        </Link>
      </div>
      <div className={styles.imgs}>
        <img
          className={`${styles.menu} ${styles.img}`}
          ref={menu}
          onClick={showDropdown}
          src="/menu.svg"
          alt="menu"
        />
        <img
          className={`${styles.close} ${styles.img}`}
          ref={close}
          onClick={showDropdown}
          src="/close.svg"
          alt="close"
        />
      </div>
    </div>
  );
};

export default Header;
