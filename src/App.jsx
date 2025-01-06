import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
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

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const noSidebarPaths = ["/admin/login", "/register"];

  // Check if the current path is in the no-sidebar list
  const showSidebar = !noSidebarPaths.includes(location.pathname);

  // const token =
  //   "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJleGFtcGxlQGNvbXBhbnkuY29tIiwiaWF0IjoxNzM1Mjc3MzU4LCJleHAiOjE3MzUzMTMzNTh9.us_kSHbxuo3Ew7To7Pz5LB4_3Mifze_vuSMm6A-m3gI";

  // localStorage.setItem("token", token);

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
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/employee-details" element={<EmployeeDetails />} />
          <Route path="/admin/employee/:id/leave" element={<LeavePage />} />
          <Route path="/admin/employee/:id/task" element={<TaskPage />} />
          <Route
            path="/admin/employee/:id/attendance"
            element={<AttendancePage />}
          />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/meetings" element={<Meeting />} />
          <Route path="/admin/tasks" element={<Task />} />
          <Route path="/admin/tickets" element={<Ticket />} />
          <Route path="/admin/announcement" element={<AnnouncementForm />} />
          <Route path="/admin/leave-request" element={<LeaveRequest />} />
          <Route path="/admin/leave" element={<Leave />} />
          <Route path="/admin/jobHistory" element={<JobHistory />} />
          <Route path="/admin/jobHistoryForm" element={<JobHistoryForm />} />
          <Route path="/admin/feedback" element={<Feedback />} />
          <Route path="/admin/approve-request" element={<ApproveRequest />} />

          <Route
            path="/admin/user-announcement"
            element={<UserAnnouncementTable />}
          />
          <Route
            path="/admin/subadmin-announcement"
            element={<SubAdminAnnouncementTable />}
          />
          <Route
            path="/admin/create-announcement"
            element={<AnnouncementForm />}
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
