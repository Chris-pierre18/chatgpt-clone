import { Outlet, useNavigate } from "react-router-dom";
import "./dashboardLayout.css";


const DashboardLayout = () => {

  return (
    <div className="dashboardLayout">
        <Outlet />
    </div>
  );
};

export default DashboardLayout;