import { Routes, Route } from "react-router-dom";
import styles from "./Main.module.css";
import MainPage from "./MainPage";
import ContactPage from "./Contact";
import AboutPage from "./About";
import SupportPage from "./Support";
import AccessForm from "./AccessForm";

function Main() {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<AccessForm title="Welcome" action="Sign In" />} />
        <Route
          path="/register"
          element={<AccessForm title="Create your account" action="Register" />}
        />
      </Routes>
    </div>
  );
}
export default Main;
