import React, { Fragment, useEffect, useState } from "react";
import styles from "./Collector.module.css";
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Spinner from "../../../spinner/Spinner";

const CollectorPage = () => {
  let tokenVariable = localStorage.getItem("token");
  let roleUser = "";
  if (tokenVariable !== null && tokenVariable !== undefined) {
    roleUser = jwt_decode(localStorage.getItem("token"));
    roleUser = roleUser.roles[0];
  }
  const [collectorGames, setCollectorGames] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  let ownedId;

  useEffect(() => {
    getOwned();
  }, [id]);

function getOwned(){
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
}


  function deleteOwned(id)
  {
    fetch(
      `http://localhost/fswd-backend/public/index.php/api/owned/delete/${id}`, {
        method:'DELETE',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenVariable}`
        }
      }).then((result)=>{
        result.json().then((resp) =>{
          console.warn.apply(resp)
          getOwned();
      })
    })
  }


  if (loading) {
    return <Spinner />;
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
                          <td className={styles.tg0Lax}>NAME:</td>
                          <td className={styles.tg0Lax}>GENRE:</td>
                          <td className={styles.tg0Lax}>PLATFORM:</td>
                          <td className={styles.tg0Lax}></td>
                        </tr>
                        {collector.owneds.map((owneds) => (
                          <tr key={`Owneds${owneds.id}`}>
                            <td
                              className={styles.tg0Lax}
                            >{`${owneds.game.name}`}</td>
                            <td
                              className={styles.tg0Lax}
                            >{`${owneds.game.genre.name}`}</td>
                            <td
                              className={styles.tg0Lax}
                            >{`${owneds.game.platform.name}`}</td>
                            {roleUser === "ROLE_ADMIN" && (
                              <td className={styles.tg0Lax}>
                                <button
                                  className={`${styles.colBtn} ${styles.hvrBackPulse}`}
                                  type="button"
                                  // {`${owneds.id}`}
                                  onClick={()=>deleteOwned(`${owneds.id}`)} 
                                >
                                  -
                                </button>
                              </td>
                            )}
                          </tr>
                        ))}
                      </thead>
                    </table>
                  </div>
                </li>
              ))}{" "}
            </ul>
          )}
        </div>
      </Fragment>
    );
  }
};

export default CollectorPage;
