import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar"; // Sidebar component
import EmployeeDetails from "./pages/EmployeeDetail";
import Dashboard from "./pages/Dashboard";
import Ticket from "./pages/Ticket";
import Task from "./pages/Task";
import Meeting from "./pages/Meeting";
import Login from "./pages/Login";
import LeavePage from "./pages/EmployeeDetails/LeavePage";
import Register from "./pages/Register";
import AttendancePage from "./pages/EmployeeDetails/AttendancePage";
import TaskPage from "./pages/EmployeeDetails/TaskPage";
import LeaveRequest from "./pages/LeaveRequest";
import Leave from "./pages/Leave";
import JobHistory from "./pages/JobHistory";
import JobHistoryForm from "./pages/JobHistoryForm";
import Feedback from "./pages/Feedback";
import ApproveRequest from "./pages/ApproveRequest";
import UserAnnouncementTable from "./pages/AnnouncementPages/UserAnnouncement";
import SubAdminAnnouncementTable from "./pages/AnnouncementPages/SubAdminAnnouncement";
import AnnouncementForm from "./pages/AnnouncementPages/CreateAnnouncement";
import Assets from "./pages/Assets";

// PrivateRoute component
const PrivateRoute = ({ element }) => {
  const email = localStorage.getItem("email");
  const token = localStorage.getItem("token");

  // Check for both email and token
  return email && token ? element : <Navigate to="/admin/login" />;
};

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const noSidebarPaths = ["/admin/login"]; // Sidebar should not be visible on login page
  const showSidebar = !noSidebarPaths.includes(location.pathname);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/admin/login");
    }
  }, [location.pathname, navigate]);

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      {showSidebar && (
        <Box
          sx={{
            width: "250px",
            position: "fixed",
            height: "100vh",
            overflow: "hidden",
            backgroundColor: "#0D1B2A",
            color: "#fff",
          }}
        >
          <Sidebar />
        </Box>
      )}

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: showSidebar ? "250px" : "0",
          height: "100vh",
          overflowY: "auto",
          backgroundColor: "#f5f5f5",
          padding: 2,
        }}
      >
        <Routes>
          {/* Public Route */}
          <Route path="/admin/login" element={<Login />} />

          {/* Private Routes */}
          <Route
            path="/admin/employee-details"
            element={<PrivateRoute element={<EmployeeDetails />} />}
          />
          <Route
            path="/admin/employee/:id/leave"
            element={<PrivateRoute element={<LeavePage />} />}
          />
          <Route
            path="/admin/employee/:id/task"
            element={<PrivateRoute element={<TaskPage />} />}
          />
          <Route
            path="/admin/employee/:id/attendance"
            element={<PrivateRoute element={<AttendancePage />} />}
          />
          <Route
            path="/admin/dashboard"
            element={<PrivateRoute element={<Dashboard />} />}
          />
          <Route
            path="/admin/meetings"
            element={<PrivateRoute element={<Meeting />} />}
          />
          <Route
            path="/admin/tasks"
            element={<PrivateRoute element={<Task />} />}
          />
          <Route
            path="/admin/tickets"
            element={<PrivateRoute element={<Ticket />} />}
          />
          <Route
            path="/admin/announcement"
            element={<PrivateRoute element={<AnnouncementForm />} />}
          />
          <Route
            path="/admin/leave-request"
            element={<PrivateRoute element={<LeaveRequest />} />}
          />
          <Route
            path="/admin/leave"
            element={<PrivateRoute element={<Leave />} />}
          />
          <Route
            path="/admin/jobHistory"
            element={<PrivateRoute element={<JobHistory />} />}
          />
          <Route
            path="/admin/jobHistoryForm"
            element={<PrivateRoute element={<JobHistoryForm />} />}
          />
          <Route
            path="/admin/feedback"
            element={<PrivateRoute element={<Feedback />} />}
          />
          <Route
            path="/admin/assets"
            element={<PrivateRoute element={<Assets />} />}
          />
          <Route
            path="/admin/approve-request"
            element={<PrivateRoute element={<ApproveRequest />} />}
          />
          <Route
            path="/admin/user-announcement"
            element={<PrivateRoute element={<UserAnnouncementTable />} />}
          />
          <Route
            path="/admin/subadmin-announcement"
            element={<PrivateRoute element={<SubAdminAnnouncementTable />} />}
          />
          <Route
            path="/admin/create-announcement"
            element={<PrivateRoute element={<AnnouncementForm />} />}
          />
        </Routes>
      </Box>
    </Box>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
