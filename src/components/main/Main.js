import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./Main.module.css";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import CollectionsPage from "./pages/Collections";
import PlatformsPage from "./pages/Platforms";
import PlatformPage from "./pages/Platform";
import AccessForm from "./AccessForm";
import { NotFound } from "./NotFound";
import Dashboard from "./Dashboard";
import CollectorPage from "./pages/Collector";

function Main() {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="collections" element={<CollectionsPage />} />
        <Route path="collections/:id" element={<CollectorPage />} />
        <Route path="platforms" element={<PlatformsPage />} />
        <Route path="platforms/:id" element={<PlatformPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<AccessForm title="Welcome" action="Log in" />} />
        <Route
          path="register"
          element={<AccessForm title="Create your account" action="Register" />}
        />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="404" replace />} />
      </Routes>
    </div>
  );
}
export default Main;
