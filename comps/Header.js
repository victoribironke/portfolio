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
      <p>VICTOR IBIRONKE</p>
    </div>
  );
};

export default Header;
