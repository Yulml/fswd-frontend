import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Lists.module.css";

const PlatformsPage = () => {
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
    <Fragment>
      <div>
        <h1>Platforms</h1>{" "}
        {platforms.length > 0 && (
          <ul className={styles.itemlist}>
            {platforms.map((platform) => (
              <li key={platform.name} className={styles.hvrGrow}>
                <Link to={`/platforms/${platform.id}`}>
                  <div className={styles.item}>
                    <h2>{platform.name}</h2>
                    <div
                      className={styles.itembox}
                      style={{
                        backgroundImage:
                          "url('http://i.stack.imgur.com/Dj7eP.jpg')",
                      }}
                    ></div>
                  </div>
                </Link>
                {platform.picture}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Fragment>
  );
};

export default PlatformsPage;
