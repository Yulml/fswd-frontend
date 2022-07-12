import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, signIn } from "../../../../store/loginSlice";
import styles from "../../../../index.module.css";
import Spinner from "../../../spinner/Spinner";
import Alert from "../../../alert/Alert";
import { Link, useNavigate } from "react-router-dom";

function AccessForm(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.login.data);
  const loading = useSelector((state) => state.login.login.loading);
  const status = useSelector((state) => state.login.status);
  const error = useSelector((state) => state.login.error);
  const nav = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
    roles: ['ROLE_REGISTERED'],
    nickname: "",
    dateofbirth: "",
    avatar: "blank_avatar.jpg",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.action === "Register") {
      dispatch(addNewUser(data)).then(() => {
        setData({
          username: "",
          password: "",
          roles: ['ROLE_REGISTERED'],
          nickname: "",
          dateofbirth: "",
          avatar: "blank_avatar.jpg",
        });
      });
    } else {
      dispatch(signIn(data)).then((response) => {
        localStorage.setItem("token", response.payload.token);
        setData({
          username: "",
          password: "",
        });
        nav("/");
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div className={`${styles.flexCenter} ${styles.flexColumn} ${styles.h100}`}>
      {loading && <Spinner />}
      {status === "succeeded" &&
        user.status === "failed" &&
        props.action === "Register" && (
          <Alert type="error" message={user.error} />
        )}
      {status === "succeeded" &&
        user.status === "succeeded" &&
        props.action === "Register" && (
          <Alert type="success" message="New user successfully created!" />
        )}
      {!loading && (
        <form className={styles.defaultForm} onSubmit={handleSubmit}>
          <h3 className={styles.flexCenter}>{props.title}</h3>
          <input
            type="email"
            name="username"
            placeholder="email"
            value={data.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={data.password}
            onChange={handleChange}
            required
          />
          {props.action === "Register" && (
            <>
              <input
                type="nickname"
                name="nickname"
                placeholder="nickname"
                value={data.nickname}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="dateofbirth"
                value={data.dateofbirth}
                onChange={handleChange}
                required
              />
            </>
          )}

          <button type="submit">{props.action}</button>
          {props.action === "Register" && (
            <>
              {" "}
              <div style={{ textAlign: "center", paddingTop: "1em" }}>
                If you are already registered, you can{" "}
                <Link to="/login">login here</Link>
              </div>
            </>
          )}
          {props.action !== "Register" && (
            <>
              {" "}
              <div style={{ textAlign: "center", paddingTop: "1em" }}>
                If you are not registered yet, you can{" "}
                <Link to="/register">register here</Link>
              </div>
            </>
          )}
        </form>
      )}
    </div>
  );
}

export default AccessForm;
