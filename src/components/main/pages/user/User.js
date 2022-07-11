//import { Navigate } from "react-router-dom";
//import { AuthContext } from "../components/AuthContext";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";

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
      <div>
        <div>
          <h1>This is the User Panel page</h1>
        </div>

        <ul>
          <li>
            {" "}
            <ul>
              {user.map((user) => (
                <li key={`User${user.id}`}>
                  <ul>
                    <li>
                      <img
                        src={user.avatar}
                        alt={`${user.nickname}'s avatar`}
                      />
                    </li>
                    <li>
                      <Link to={`/collections/${user.id}`}>COLLECTION</Link>
                    </li>
                    <li>{user.email}</li>
                    <li>{user.password}</li>
                    <li>{user.nickname}</li>
                    {roleUser === "ROLE_ADMIN" && <li>{user.roles[0]}</li>}
                    {roleUser === "ROLE_ADMIN" && (
                      <li>
                        <button type="button" onClick={""}>
                          Delete user
                        </button>
                      </li>
                    )}
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
