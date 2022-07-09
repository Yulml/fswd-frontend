import { Fragment } from "react";
import styles from "./pages/Lists.module.css";

export const NotFound = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <h1>404: NotFound</h1>{" "}
        <div className={styles.itemlist}>
          <img src="https://i.imgur.com/Fnifc50.png" />
        </div>
      </div>
    </Fragment>
  );
};
