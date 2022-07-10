import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import imgSelf from "../../../../assets/images/meself.jpg";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.leftside}><img src={imgSelf} alt={`This is me!`} /></div>
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
              <span>+34 666 666 666</span>
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
              <a href="https://github.com/Yulml">Yulml</a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                color="#e30012"
              ></FontAwesomeIcon>{" "}
              <a href="/#">Julio Moreno López</a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                color="#e30012"
              ></FontAwesomeIcon>{" "}
              <a href="/#">@Juliotwitter</a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
