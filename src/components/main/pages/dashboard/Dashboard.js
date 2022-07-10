//import { Navigate } from "react-router-dom";
//import { AuthContext } from "../components/AuthContext";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <div>
        <div>
          <h1>This is the Dashboard page</h1>
        </div>

        <ul>
          {allUsers.length > 0
            ? allUsers.map((user) => (
                <li key={`User${user.id}`}>
                  <div>
                  <Link to={`/collections/${user.id}`}><h2>{user.nickname}</h2></Link>
                  </div>
                </li>
              ))
            : ""}
        </ul>
      </div>
    );
  }
};


