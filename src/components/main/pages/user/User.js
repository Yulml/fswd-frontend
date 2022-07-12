//import { Navigate } from "react-router-dom";
//import { AuthContext } from "../components/AuthContext";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import styles from "./User.module.css";
import Spinner from "../../../spinner/Spinner";

export default function UserProfile() {
  let tokenVariable = localStorage.getItem("token");
  let roleUser = "";
  if (tokenVariable !== null && tokenVariable !== undefined) {
    roleUser = jwt_decode(localStorage.getItem("token"));
    roleUser = roleUser.roles[0];
  }

  const [formValues, setFormValues] = useState({
    nickname: "",
    email: "",
    password: "",
  });

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const nav = useNavigate();

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

        setFormValues((prev) => ({
          ...prev,
          nickname: data[0].nickname,
          email: data[0].email,
        }));
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, [id]);


  //Funcion para actualizar los useState correspondiente a cada input
  const handleInputChange = (e) => {
    //Ingresamos los campos del formulario
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log(formValues);
    fetch(`http://localhost/fswd-backend/public/index.php/api/user/edit/${id}`, {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        nav(`/dashboard`);
      })
      .catch((error) => console.log(error));
  };

  if (loading) {
    return <Spinner />;
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
                    <form onSubmit={handleSubmit} className={styles.defaultForm} encType="multipart/form-data">
                      <ul>
                        <li className={styles.flexCenter}>
                          <img
                            src={user.avatar}
                            alt={`${user.nickname}'s avatar`}
                          />{" "}
                          <h1>{`${user.nickname}`}</h1>
                        </li>

                        <li className={styles.flexCenter}>
                          <Link to={`/collections/${user.id}`}>
                            <h2>{`Link to Collection`}</h2>
                          </Link>
                        </li>
                        <label htmlFor="nickname">
                          Nickname
                          <input
                            type="text"
                            name="nickname"
                            placeholder="Nickname"
                            onChange={handleInputChange}
                            defaultValue={`${user.nickname}`}
                          />
                        </label>
                        <li className={styles.paddingTop}>
                          <label htmlFor="email">
                            Email
                            <input type="email" name="email" placeholder="Email"
                            onChange={handleInputChange}
                            defaultValue={`${user.email}`}></input>
                          </label>
                        </li>
                        <li className={styles.paddingTop}>
                          <label htmlFor="password">
                            Password
                            <input type="password" placeholder="Password" onChange={handleInputChange}></input>
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
