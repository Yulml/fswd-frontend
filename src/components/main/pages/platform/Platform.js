import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Platform.module.css";
import jwt_decode from "jwt-decode";

const PlatformPage = () => {
  let tokenVariable = localStorage.getItem("token");
  let roleUser = "";
  if (tokenVariable !== null && tokenVariable !== undefined) {
    roleUser = jwt_decode(localStorage.getItem("token"));
    roleUser = roleUser.roles[0];
  }
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

  function addGame()
  {
    fetch(
      `http://localhost/fswd-backend/public/index.php/api/owned/new`, {
        method:'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenVariable}`
        },
        body: {
          user_id: {},
          game_id: {}
        }
      }).then((result)=>{
        result.json().then(() =>{
          window.alert("Game added to you collection");
      })
    })
  }

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (

      <Fragment>


        <div className={`${styles.title}`}>
          <h1>{platformGames.name} games</h1>
        </div>

          {platformGames.games.length > 0
            ? (
              <div className={`${styles.gridContainer}`}>
                {platformGames.games.map((game) => (
                    <div key={`Game${game.id}`}>
                    <div className={`${styles.gridItem}`}>
                    <img
                      src={`http://localhost:8080/uploads/games/${game.cover}`}
                      alt={`Game ${game.name}`}
                    />
                    
                    </div>
                    <div className={`${styles.itemTitle}`}>


                    <div><h2>{game.name}</h2></div>


                    
                    

                    {roleUser === "ROLE_ADMIN" && (
                              <div style={{marginLeft: "auto"}}>
                              <button className={`${styles.colBtn} ${styles.hvrBackPulse}`} type="button" onClick={()=>addGame(`${game.id}`)}>
                              +
                            </button></div>
                            )}



                    
                    </div>

                    </div>
                ))}
              </div>
            ) : ""}
      </Fragment>
    );
  }
};

export default PlatformPage;
