import { Routes, Route } from "react-router-dom";
import styles from "./Main.module.css";
import MainPage from "./MainPage";
import ContactPage from "./Contact";
import Login from "./Login";
import Register from "./Register";
import AboutPage from "./About";
import SupportPage from "./Support";

function Main() {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default Main;
