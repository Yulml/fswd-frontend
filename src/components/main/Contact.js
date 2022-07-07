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
        <div className={styles.rightside}>
          <ul>
            {" "}
            <li>
                <h1>Julio Moreno López</h1>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faPhone}
                size="2x"
                color="#e30012"
              ></FontAwesomeIcon>
              <a>+34 666 666 666</a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                color="#e30012"
              ></FontAwesomeIcon>{" "}
              <a href="mailto:blog">mock@email.com</a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                color="#e30012"
              ></FontAwesomeIcon>{" "}
              <a href="https://github.com/Yulml">https://github.com/Yulml</a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                color="#e30012"
              ></FontAwesomeIcon>{" "}
              <a href="#">https://linkedin.com/saynotosocial</a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                color="#e30012"
              ></FontAwesomeIcon>{" "}
              <a href="#">https://twitter.com/saynotosocial</a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
