//import { Navigate } from "react-router-dom";
//import { AuthContext } from "../components/AuthContext";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  // const { token, setToken } = useContext(AuthContext);

  // if (!token) return <Navigate to="/login" replace />;

  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const page = 1;

  useEffect(() => {
    fetch(
      `http://localhost/fswd-backend/public/index.php/api/user?page=${page}`,
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
        setAllUsers(data);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, []);

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <Fragment>
        <div className={`${styles.title}`}>
          <h1>Dashboard</h1>
        </div>

        {allUsers.length > 0 ? (
          <div className={`${styles.gridContainer}`}>
            {allUsers.map((user) => (
              <div key={`User ${user.id}`}>
                <Link to={`/user/${user.id}`}>
                  <div className={`${styles.gridItem}`}>
                    <img
                      src={`http://localhost:8080/uploads/avatars/${user.avatar}`}
                      alt={`${user.nickname}'s avatar`}
                    />
                    <div
                      className={`${styles.gridItemUser}`}
                    >{`${user.nickname}`}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}
