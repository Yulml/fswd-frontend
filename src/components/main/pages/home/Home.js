import { Fragment } from "react";
import styles from "../Lists.module.css";


function HomePage() {
  return (
    <Fragment>
      <div className={styles.container}>
        <h1>The Project Title</h1>{" "}
        <div className={styles.itemlist}>
          <h2>Some kind of subtitle</h2>{" "}
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
