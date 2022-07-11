import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/loginSlice";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function Header() {
  const logged = useSelector((state) => state.login.login.isLogged);

  console.log(logged);

  let tokenVariable = localStorage.getItem("token");
  let roleUser='';
  if((tokenVariable!==null)&&(tokenVariable!==undefined)){
      roleUser = jwt_decode(localStorage.getItem("token"));
      roleUser=roleUser.roles[0];
  }

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(loginActions.logOut());
    localStorage.removeItem("token");
    window.location.href='/';
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
        <div>
          <Link to="/" className={styles.logo}>The Collector's Den</Link>
        </div>
        <div>
          <ul
            className={styles.nav}
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

        <div>
          <ul className={styles.nav}>
            {roleUser==='' && (
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
            {(roleUser==='ROLE_REGISTERED' || roleUser==='ROLE_ADMIN') && (
              <li>
                <Link to={`/user/${"#"}`} className={styles.hvrFade}>
                  {" "}
                  {/* This should be the id of the current user */}
                  User Panel
                </Link>
              </li>
            )}
            {/* This should be seen if the current user is the admin */}
            {roleUser==='ROLE_ADMIN' && (
              <li>
                <Link to="/dashboard" className={styles.hvrFade}>
                  Dashboard
                </Link>
              </li>
            )}
            {roleUser!=='' && (
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