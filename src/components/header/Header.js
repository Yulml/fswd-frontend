import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const [logged, setLogged] = useState(false);

  return (
    <header>
      <ul className={styles.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {!logged && (
          <li className={styles.navRight}>
            {/* <Link to="">Access</Link> */}
            Access
            <ul className={styles.dropDown}>
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/register">Sign in</Link>
              </li>
            </ul>
          </li>
        )}
        {logged && (
          <li className={styles.navRight}>
            <Link to="">Log out</Link>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
