import Map from "../componenets/Map";
import SideBar from "../componenets/SideBar";
import User from "../componenets/User";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
