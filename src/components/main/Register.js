import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "../../store/loginSlice";
import styles from "../../index.module.css";
import Spinner from "../spinner/Spinner";
import Alert from "../alert/Alert";

function RegisterPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.login.data);
  const loading = useSelector((state) => state.login.login.loading);
  const status = useSelector((state) => state.login.status);
  const error = useSelector((state) => state.login.error);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(data);
    dispatch(addNewUser(data)).then(() => {
      setData({
        email: "",
        password: "",
      });
    });
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
      {status === "succeeded" && user.status === "failed" && (
        <Alert type="error" message={user.error} />
      )}
      {status === "succeeded" && user.status === "succeeded" && (
        <Alert type="success" message={user.data.info} />
      )}
      {!loading && (
        <form className={styles.defaultForm} onSubmit={handleSubmit}>
          <h3 className={styles.flexCenter}>Create your account</h3>
          <input
            type="email"
            name="email"
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
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

export default RegisterPage;
