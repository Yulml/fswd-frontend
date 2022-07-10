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
      <Fragment className={styles.container}>
        
        {collectorGames.length > 0 && (
          <ul>
          {collectorGames.map((collector) => (
            <li key={`Collect${collector.id}`}>
              <div><h1>{collector.nickname}'s Collection</h1></div>
              <ul>
                {collector.owneds.map((owneds) => (
                  <li key={`Owneds${owneds.id}`}>
                    <p>{`Game Name: ${owneds.game.name}`}</p>
                    <p>{`Genre: ${owneds.game.genre.name}`}</p>
                    <p>{`Platform: ${owneds.game.platform.name}`}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}{" "}
        </ul>
        )}
      </Fragment>
    );
  }
};

export default CollectorPage;


