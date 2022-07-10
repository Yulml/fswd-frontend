import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./Main.module.css";
import HomePage from "./pages/home/Home";
import ContactPage from "./pages/contact/Contact";
import CollectionsPage from "./pages/collections/Collections";
import PlatformsPage from "./pages/platforms/Platforms";
import PlatformPage from "./pages/platform/Platform";
import AccessForm from "./pages/accessform/AccessForm";
import { NotFound } from "./pages/notfound/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import UserProfile from "./pages/user/User";
import CollectorPage from "./pages/collector/Collector";

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
        <Route path="user/:id" element={<UserProfile />} />
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
