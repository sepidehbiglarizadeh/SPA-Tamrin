import SideBar from "../SideBar/SideBar";
import { Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Download from "../Download/Download";

const ProfilePage = () => {
  return (
    <aside className="aside">
      <div>
        <h2>This is profile page</h2>
        <SideBar />
      </div>
      <div className="content">
        <Route path="/profile/dashboard" component={Dashboard} />
        <Route path="/profile/downloads" component={Download} />
      </div>
    </aside>
  );
};

export default ProfilePage;
