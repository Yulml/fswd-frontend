import React, { Fragment, useEffect, useState } from "react";
import styles from "./Collector.module.css";
import { useParams } from "react-router-dom";

const CollectorPage = () => {
  const [collectorGames, setCollectorGames] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `http://localhost/fswd-backend/public/index.php/api/user/${id}/game/get`,
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
        setCollectorGames(data);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, [id]);

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <Fragment>
        <div className={styles.container}>
        {collectorGames.length > 0 && (
          <ul className={styles.item}>
            {collectorGames.map((collector) => (
              <li key={`Collect${collector.id}`}>
                <div>
                  <h1>{collector.nickname}'s Collection</h1>
                </div>
                <img
                  className={styles.avatar}
                  src={`http://localhost:8080/uploads/avatars/${collector.avatar}`}
                  alt={`Collector ${collector.id}`}
                />
                <div className={styles.tgWrap}>
                  <table className={styles.tg}>
                    <thead>
                      <tr>
                        <td className={styles.tg0Lax}>Name:</td>
                        <td className={styles.tg0Lax}>Genre:</td>
                        <td className={styles.tg0Lax}>Platform:</td>
                        <td className={styles.tg0Lax}></td>
                      </tr>
                      {collector.owneds.map((owneds) => (
                        <tr key={`Owneds${owneds.id}`}>
                          <td className={styles.tg0Lax}>{`${owneds.game.name}`}</td>
                          <td className={styles.tg0Lax}>{`${owneds.game.genre.name}`}</td>
                          <td className={styles.tg0Lax}>{`${owneds.game.platform.name}`}</td>
                          <td className={styles.tg0Lax}>
                          <button className={`${styles.colBtn} ${styles.hvrBackPulse}`} type="button" onClick={""}>
                      -
                    </button>
                          </td>
                        </tr>
                      ))}
                    </thead>
                  </table>
                </div>
              </li>
            ))}{" "}
          </ul>
        )}</div>
      </Fragment>
    );
  }
};

export default CollectorPage;
