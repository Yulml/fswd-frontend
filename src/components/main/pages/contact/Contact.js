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
      <div className={`${styles.rows}`}>
      <div className={`${styles.columns}`}>
          <img src={imgSelf} alt={`This is me!`} />
          </div>
          <div className={`${styles.columns}`}>
          
          <div className={`${styles.gridItem}`}>
          
          <ul>
          <li><h1 className={`${styles.heading}`}>Julio Moreno López</h1></li>
              <li>
                <FontAwesomeIcon
                  icon={faPhone}
                  size="2x"
                  color="#e30012"
                ></FontAwesomeIcon>
                <a href="tel:+34-666-666-666">+34-666-666-666</a>
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
          </div>          </div>

      </div>














      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
<div className={`${styles.gridContainer}`}>


</div>
</div>

    </Fragment>
  );
}

export default Contact;
