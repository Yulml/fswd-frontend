import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Lists.module.css";

const CollectionsPage = () => {
  const [collectors, setCollectors] = useState([]);

  const fetchCollectors = async () => {
    const response = await fetch(
      `http://localhost/fswd-backend/public/index.php/api/user`
    );
    const data = await response.json();

    setCollectors(data);
  };

  useEffect(() => {
    fetchCollectors();
  }, []);

  return (
    <Fragment>
    <div>
    <h1>User Collections</h1>{" "}
        {collectors.length > 0 && (
          <ul className={styles.itemlist}>
            {collectors.map((collector) => (
              <li key={collector.nickname} className={styles.hvrGrow}><Link to={`/collections/${collector.id}`}>
                          
                <div className={styles.item} >
                    <h2>
                      {collector.nickname}
                    </h2>
                    <div className={styles.itembox} style={{backgroundImage: "url('http://i.stack.imgur.com/Dj7eP.jpg')"}}></div>

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

export default CollectionsPage;
