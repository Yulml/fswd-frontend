import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Platforms.module.css";
import jwt_decode from "jwt-decode";

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
          console.log("Hubo un problema con la respuesta");
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
        <div className={`${styles.title}`}>
          <h1>Platforms</h1>
        </div>

        {platforms.length > 0
            ? (<div className={`${styles.gridContainer}`}>
              
            {platforms.map((platform) => (
              <div key={`Platform${platform.id}`}>
              <Link to={`/platforms/${platform.id}`}>
                <div className={`${styles.gridItem}`}>
                  <img
                    src={platform.picture}
                    alt={`${platform.name}'s Logo`}
                  />
                </div>
              </Link></div>
            ))}
          </div>
        ) : ""}
      </Fragment>
    );
  }
};

export default PlatformsPage;
