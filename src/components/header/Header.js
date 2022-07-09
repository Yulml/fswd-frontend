import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/loginSlice";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import React, { useEffect, useState } from "react";

function Header() {
  const logged = useSelector((state) => state.login.login.isLogged);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(loginActions.logOut());
  };

  const [platforms, setPlatforms] = useState([]);
  const page = 1;

  const fetchPlatforms = async () => {
    const response = await fetch(
      `http://localhost/fswd-backend/public/index.php/api/platform?page=${page}`
    );
    const data = await response.json();

    setPlatforms(data);
  };

  useEffect(() => {
    fetchPlatforms();
  }, []);

  return (
    <header>
      <div className={styles.navContainer}>
        <div className={styles.sides}>
          <span className={styles.logo}>LOGOTIPO</span>
        </div>
        <div className={styles.middle}>
          <ul
            className={styles.nav}
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <li>
              <Link to="/" className={styles.hvrFade}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/collections" className={styles.hvrFade}>
                Collections
              </Link>
            </li>
            <li className={styles.navDown}>
              <Link to="/platforms" className={styles.hvrFade}>
                Platforms
              </Link>
              {platforms.length > 0 && (
                <ul className={styles.dropDown}>
                  {platforms.map((platform) => (
                    <li key={platform.id}>
                      <Link to={`/platforms/${platform.id}`}>
                        {platform.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="/contact" className={styles.hvrFade}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.sides}>
          <ul className={styles.nav}>
            {!logged && (
              <li className={styles.navRight}>
                Access
                <ul className={styles.dropDown}>
                  <li>
                    <Link to="/login" className={styles.hvrFade}>
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className={styles.hvrFade}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </li>
            )}
            {logged && (
              <li>
                <Link to="/dashboard" className={styles.hvrFade}>
                  User Panel
                </Link>
              </li>
            )}
            {logged && (
              <li>
                <Link to="/" onClick={handleLogOut} className={styles.hvrFade}>
                  Log out
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
