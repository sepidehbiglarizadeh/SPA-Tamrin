import SideBar from "../SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/downloads" element={<Download/>} />
        </Routes>
      </div>
    </aside>
  );
};

export default ProfilePage;
