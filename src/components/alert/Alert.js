import styles from "./Alert.module.css";

const Alert = (props) => {
  console.log(props.type);
  return (
    <div className={`${styles.alert} ${styles[props.type]}`}>
      <input type="checkbox" id="alert1" />
      <label className={styles.close} title="close" for="alert1">
        <strong>&times;</strong>
      </label>
      <p className={styles.inner}>{props.message}</p>
    </div>
  );
};

export default Alert;
