import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.leftside}></div>
        <div
          style={{
            width: "50vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul style={{ textAlign: "center", listStyleType: "none" }}>
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon
                  icon={faUser}
                  size="6x"
                  color="#e30012"
                ></FontAwesomeIcon>
                <h1>Julio Moreno López</h1>
              </div>
            </div>
            <li>
              <FontAwesomeIcon
                icon={faPhone}
                size="3x"
                color="#e30012"
              ></FontAwesomeIcon>{" "}
              Tel: +34 666 666 666
            </li>
            <li>
              <FontAwesomeIcon
                icon={faEnvelope}
                size="3x"
                color="#e30012"
              ></FontAwesomeIcon>{" "}
              Email: mock@email.com
            </li>
            <li>
              <FontAwesomeIcon
                icon={faGithub}
                size="3x"
                color="#e30012"
              ></FontAwesomeIcon>{" "}
              GitHub: https://github.com/Yulml
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLinkedin}
                size="3x"
                color="#e30012"
              ></FontAwesomeIcon>{" "}
              LinkedIn: https://github.com/Yulml
            </li>
            <li>
              <FontAwesomeIcon
                icon={faTwitter}
                size="3x"
                color="#e30012"
              ></FontAwesomeIcon>{" "}
              Twitter: https://github.com/Yulml
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
