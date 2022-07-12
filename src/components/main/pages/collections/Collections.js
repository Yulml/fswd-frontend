import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Collections.module.css";
import Spinner from "../../../spinner/Spinner";

const CollectionsPage = () => {
  const [collectors, setCollectors] = useState([]);
  const [loading, setLoading] = useState(true);


  /* http://localhost/fswd-backend/public/index.php/api/user/collectors/get
  we should maps this one when we have the time. It returns users WITH collections */
  useEffect(() => {
    fetch(`http://localhost/fswd-backend/public/index.php/api/user?page=1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("Hubo un problema con la respuesta");
        }
      })
      .then((data) => {
        setLoading(false);
        setCollectors(data);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, []);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <div className={`${styles.title}`}>
          <h1>Video Game Collections</h1>
        </div>
        {collectors.length > 0 && (
          <div className={`${styles.gridContainer}`}>
            {collectors.map((collector) => (
              <Link to={`/collections/${collector.id}`} key={`Collect${collector.id}`}>
                <div className={`${styles.gridItem}`}>
                  <img
                    src={`http://localhost:8080/uploads/avatars/${collector.avatar}`} alt={`${collector.nickname}'s profile pic`} 
                  />
                </div>
                <div className={`${styles.gridItemUser}`}>
                  <h2>{collector.nickname}</h2>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Fragment>
    );
  }
};

export default CollectionsPage;
