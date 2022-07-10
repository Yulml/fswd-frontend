import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Lists.module.css";
import imgPlatform from "../../../../assets/images/games/uyquemona.jpg";

const PlatformsPage = () => {
  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(true);
  const page = 1;

  useEffect(() => {
    fetch(
      `http://localhost/fswd-backend/public/index.php/api/platform?page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("Hubo un problema con lala respuesta");
        }
      })
      .then((data) => {
        setLoading(false);
        setPlatforms(data);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, []);

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <Fragment>
        <h1>Platforms</h1>{" "}
        {platforms.length > 0 && (
          <ul className={styles.itemlist}>
            {platforms.map((platform) => (
              <li key={platform.name} className={styles.hvrGrow}>
                <Link to={`/platforms/${platform.id}`}>
                  <div className={styles.item}>
                    <h2>{platform.name}</h2>
                    <img src={imgPlatform} alt={`Platform ${platform.id}`} />
                  </div>
                </Link>
                {platform.picture}
              </li>
            ))}
          </ul>
        )}
      </Fragment>
    );
  }
};

export default PlatformsPage;
