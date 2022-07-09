import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Lists.module.css";
import imgCol from "../../../assets/images/games/uyquemona.jpg";

const CollectionsPage = () => {
  const [collectors, setCollectors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost/fswd-backend/public/index.php/api/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("Hubo un problema con lala respuesta");
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
    return <div>Loading</div>;
  } else {
    return (
      <div className={styles.container}>
        <h1>User Collections</h1>{" "}
        {collectors.length > 0 && ( //aqui tengo que mirar que owneds no este vacio
          <ul className={styles.itemlist}>
            {collectors.map((collector) => (
              <li key={collector.nickname} className={styles.hvrGrow}>
                <Link to={`/collections/${collector.id}`}>
                  <div className={styles.item}>
                    <h2>{collector.nickname}</h2>
                    <img src={imgCol} alt={`Collector ${collector.id}`} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
};

export default CollectionsPage;
