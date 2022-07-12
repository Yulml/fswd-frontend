import { Fragment } from "react";
import styles from "./NotFound.module.css";
import imgNotFound from "../../../../assets/images/castle.png";

export const NotFound = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <h1>404: NotFound</h1>{" "}
        <div className={styles.itemlist}>
        <img src={imgNotFound} alt={`Page not found`} />
        </div>
      </div>
    </Fragment>
  );
};
