import { Outlet } from "react-router";
import AppBar from "../AppBar/AppBar";
import styles from "./Layout.module.css";
const Layout = () => {
  return (
    <div className={styles.container}>
      <AppBar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
