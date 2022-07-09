import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Lists.module.css";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const page = 1;

  const fetchUsers = async () => {
    const response = await fetch(
      `http://localhost/fswd-backend/public/index.php/api/user?page=${page}`
    );
    const data = await response.json();

    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Fragment>
        <h1>Listed users</h1>{" "}
        {users.length > 0 && (
          <ul className={styles.itemlist}>
            {users.map((user) => (
              <li key={user.id} className={styles.hvrGrow}>
                <Link to={`/user/${user.id}`}>
                  <div className={styles.item}>
                    <h2>{user.nickname}</h2>
                    <div
                      className={styles.itembox}
                      style={{
                        backgroundImage:
                          "url('http://i.stack.imgur.com/Dj7eP.jpg')",
                      }}
                    ></div>
                  </div>
                </Link>
                {user.avatar}
              </li>
            ))}
          </ul>
        )}
    </Fragment>
  );
};

export default UsersPage;
