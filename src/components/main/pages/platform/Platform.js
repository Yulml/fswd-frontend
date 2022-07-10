import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../Lists.module.css";
import imgGame from "../../../../assets/images/games/uyquemona.jpg";

const PlatformPage = () => {
  const [platformGames, setPlatformGames] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `http://localhost/fswd-backend/public/index.php/api/platform/${id}/game`,
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
        setPlatformGames(data);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, [id]);

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <div>
          <h2>This is the {platformGames.name} page</h2>
          <p>This is the picture: {platformGames.picture}</p>
        </div>

        <ul className={styles.itemlist}>
          {platformGames.games.length > 0
            ? platformGames.games.map((game) => (
                <li key={`Game${game.id}`} className={styles.hvrGrow}>
                  <div className={styles.item}>
                    <h2>{game.name}</h2>
                    <img src={imgGame} alt={`Game ${game.id}`} />
                    <button type="button" onClick={""}>
                      Add to my collection
                    </button>
                  </div>
                </li>
              ))
            : ""}
        </ul>
      </div>
    );
  }
};

export default PlatformPage;
