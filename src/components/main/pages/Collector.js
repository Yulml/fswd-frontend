import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Collector.module.css";

const CollectorPage = () => {
  const [collector, setCollector] = useState([]);

  const fetchCollector = async () => {
    const response = await fetch(
      `http://localhost/fswd-backend/public/index.php/api/user/${collector.id}/game/get`
    );
    const data = await response.json();

    setCollector(data);
  };

  useEffect(() => {
    fetchCollector();
  }, []);

  return (
    <Fragment>
    <div>
    <h2>This is the USERCOLLECTOR page</h2>{" "}
        {collector.length > 0 && (
          <ul style={{display: "flex",
            flexWrap: "wrap", justifyContent: "space-around"}}>
            {collector.map((collector) => (
              <li key={collector.nickname} className={styles.hvrGrow}><Link to={`/collections/${collector.id}`}>
                          
                <div
                  className="Tarjeta-container"
                  style={{
                    width: "fit-content"
                  }}
                >
                  <div style={{ padding: 16 }}>
                    <h1
                      style={{
                        fontSize: 24,
                        fontWeight: 900,
                        textAlign: "center",
                      }}
                    >
                      {collector.nickname}
                    </h1>
                    <div className={styles.avatar} style={{backgroundImage: "url('http://i.stack.imgur.com/Dj7eP.jpg')", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}></div>
                  </div>
                </div></Link>

                {collector.avatar}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Fragment>
  );
};

export default CollectorPage;
