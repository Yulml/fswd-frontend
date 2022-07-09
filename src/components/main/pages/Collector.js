import React, { useEffect, useState } from "react";
import styles from "./Collector.module.css";
import { useParams } from "react-router-dom";

const CollectorPage = () => {
  const [collectorGames, setCollectorGames] = useState([]);
  const { id } = useParams();

  const fetchCollectorGames = async () => {
    const response = await fetch(
      `http://localhost/fswd-backend/public/index.php/api/user/${id}/game/get`
    );
    const data = await response.json();
    setCollectorGames(data);
  };

  useEffect(() => {
    fetchCollectorGames();
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <h1>User Collections</h1>{" "}
        <ul>
          {collectorGames.map((collector) => (
            <li key={`Collect${collector.id}`}>
              <div>Usuario:{collector.nickname}</div>
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
      </div>
    </div>
  );
};

export default CollectorPage;
