import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/loginSlice";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const logged = useSelector((state) => state.login.login.isLogged);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(loginActions.logOut());
  };
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
            <Link to="/" onClick={handleLogOut}>
              Log out
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
