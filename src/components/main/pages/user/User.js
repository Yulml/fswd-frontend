//import { Navigate } from "react-router-dom";
//import { AuthContext } from "../components/AuthContext";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import styles from "./User.module.css";

export default function UserProfile() {
  let tokenVariable = localStorage.getItem("token");
  let roleUser = "";
  if (tokenVariable !== null && tokenVariable !== undefined) {
    roleUser = jwt_decode(localStorage.getItem("token"));
    roleUser = roleUser.roles[0];
  }

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [avatar, setAvatar] = useState([]);
  console.log(avatar);

  useEffect(() => {
    fetch(`http://localhost/fswd-backend/public/index.php/api/user/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("Hubo un problema con la respuesta");
        }
      })
      .then((data) => {
        setLoading(false);
        setUser(data);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, [id]);

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <div className={`${styles.flexCenter}`}>
        <ul>
          <li>
            {" "}
            <ul>
              {user.map((user) => (
                <li key={`User${user.id}`}>
                  <ul>
                    <li>
                      <div className={`${styles.flexCenter}`}>
                        <img
                          src={user.avatar}
                          alt={`${user.nickname}'s avatar`}
                        />
                      </div>
                    </li>
                    <form className={styles.defaultForm}>
                      <ul>
                        <li className={styles.flexCenter}>
                          <h1>{`${user.nickname}`}</h1>
                        </li>

                        <li className={styles.flexCenter}>
                          <Link to={`/collections/${user.id}`}>
                            <h2>{`Link to Collection`}</h2>
                          </Link>
                        </li>
                        <li>
                          <label htmlFor="avatar">
                            Upload new avatar
                            <input type="file" name="avatar" accept="image/*" onChange={(e) => setAvatar(e.target.files[0])}></input>
                          </label>
                        </li>
                        <label htmlFor="nickname">
                          <input type="text" name="nickname"></input>
                        </label>
                        <li>
                          <label htmlFor="email">
                            <input type="text" name="email"></input>
                          </label>
                        </li>
                        <li>
                          <label htmlFor="password">
                            <input type="password"></input>
                          </label>
                        </li>
                        <li>
                          <label htmlFor="roles">
                            <select name="roles">
                              <option value={`${user.roles[0]}`}></option>
                              <option value="['ROLE_REGISTERED']">
                                Registered User
                              </option>
                              <option value="['ROLE_ADMIN']">Admin</option>
                            </select>
                          </label>
                        </li>
                        <li>
                          <input type="submit"></input>
                        </li>
                      </ul>
                    </form>
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
