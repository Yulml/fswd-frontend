import { useEffect, useState } from "react";
import styles from "../../index.module.css";

function RegisterPage() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(data);
    // setLoading(true);
    fetch("http://127.0.0.1:8000/login/new", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((info) => console.log(info))
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className={`${styles.flexCenter} ${styles.h100}`}>
      {/* {isLoading && <div>Loading...</div>}
      {isSuccess && <div>Success!!</div>}
      {isError && <div>Error: {error}</div>}
      {info && console.log(info)} */}
      <form className={styles.defaultForm} onSubmit={handleSubmit}>
        <h3 className={styles.flexCenter}>Create your account</h3>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={data.password}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
