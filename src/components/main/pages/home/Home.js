import { Fragment } from "react";
import styles from "./Home.module.css";
import imgHome from "../../../../assets/images/vdgfront.jpg";

function HomePage() {
  return (
    <Fragment>
      <div className={styles.container}>
      <div className={styles.item}><h1>The Collector's Den</h1>{" "}
      <h2>Share your games collection with your friends!</h2>
          <img src={imgHome} alt={`The Collector's Den`} />
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
