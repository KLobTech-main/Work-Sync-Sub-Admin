import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  Button,
} from "@mui/material";
import {
  People as EmployeeIcon,
  MeetingRoom as MeetingIcon,
  CheckCircle as TaskIcon,
  ConfirmationNumber as TicketIcon,
  Announcement as AnnouncementIcon,
  ExpandLess,
  ExpandMore,
  Create as CreateIcon,
  AccountCircle as UserIcon,
  SupervisorAccount as SubAdminIcon,
  Assignment as JobFormIcon,
  WorkHistory as HistoryIcon,
  Feedback as FeedbackIcon,
  Inventory as AssetsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const handleDropdownToggle = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleNavLinkClick = () => {
    setOpenDropdown(null); // Collapse any open dropdown when a regular link is clicked
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin/login");
  };

  return (
    <div
      style={{
        width: 240,
        backgroundColor: "#0D1B2A",
        color: "#E0F2F1",
        height: "100vh",
        paddingTop: "16px",
      }}
    >
      <div style={{ textAlign: "center", padding: "16px" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#1E3A8A",
          }}
        >
          Work Sync
        </Typography>
      </div>
      <List>
        {/* Employee Detail */}
        <NavLink
          to="/admin/employee-details"
          className="nav-link"
          onClick={handleNavLinkClick}
        >
          <ListItem button>
            <ListItemIcon>
              <EmployeeIcon sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Employee Detail" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>

        {/* Leave Request */}
        <NavLink
          to="/admin/leave-request"
          className="nav-link"
          onClick={handleNavLinkClick}
        >
          <ListItem button>
            <ListItemIcon>
              <MeetingIcon sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Leave Request" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>

        {/* Approve Request */}
        <NavLink
          to="/admin/approve-request"
          className="nav-link"
          onClick={handleNavLinkClick}
        >
          <ListItem button>
            <ListItemIcon>
              <AnnouncementIcon sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Approve Request" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>

        {/* Announcement */}
        <ListItem button onClick={() => handleDropdownToggle("announcement")}>
          <ListItemIcon>
            <AnnouncementIcon sx={{ color: "#1E3A8A" }} />
          </ListItemIcon>
          <ListItemText primary="Announcements" sx={{ color: "#E0F2F1" }} />
          {openDropdown === "announcement" ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={openDropdown === "announcement"}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            <NavLink
              to="/admin/user-announcement"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon>
                  <UserIcon sx={{ color: "#1E3A8A" }} />
                </ListItemIcon>
                <ListItemText
                  primary="User Announcements"
                  sx={{ color: "#E0F2F1" }}
                />
              </ListItem>
            </NavLink>
            <NavLink
              to="/admin/subadmin-announcement"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon>
                  <SubAdminIcon sx={{ color: "#1E3A8A" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Sub-admin Announcements"
                  sx={{ color: "#E0F2F1" }}
                />
              </ListItem>
            </NavLink>
            <NavLink
              to="/admin/create-announcement"
              className="nav-link"
              onClick={handleNavLinkClick}
            >
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon>
                  <CreateIcon sx={{ color: "#1E3A8A" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Create Announcements"
                  sx={{ color: "#E0F2F1" }}
                />
              </ListItem>
            </NavLink>
          </List>
        </Collapse>

        {/* Other Links */}
        <NavLink
          to="/admin/meetings"
          className="nav-link"
          onClick={handleNavLinkClick}
        >
          <ListItem button>
            <ListItemIcon>
              <MeetingIcon sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Meeting" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>
        <NavLink
          to="/admin/tasks"
          className="nav-link"
          onClick={handleNavLinkClick}
        >
          <ListItem button>
            <ListItemIcon>
              <TaskIcon sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Task" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>
        <NavLink
          to="/admin/tickets"
          className="nav-link"
          onClick={handleNavLinkClick}
        >
          <ListItem button>
            <ListItemIcon>
              <TicketIcon sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Ticket" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>

        {/* Last 3 Buttons */}
        <NavLink
          to="/admin/jobHistoryForm"
          className="nav-link"
          onClick={handleNavLinkClick}
        >
          <ListItem button>
            <ListItemIcon>
              <JobFormIcon sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText
              primary="Job History Form"
              sx={{ color: "#E0F2F1" }}
            />
          </ListItem>
        </NavLink>
        <NavLink
          to="/admin/jobHistory"
          className="nav-link"
          onClick={handleNavLinkClick}
        >
          <ListItem button>
            <ListItemIcon>
              <HistoryIcon sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Job History" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>
        <NavLink
          to="/admin/feedback"
          className="nav-link"
          onClick={handleNavLinkClick}
        >
          <ListItem button>
            <ListItemIcon>
              <FeedbackIcon sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Feedback" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>
        <NavLink
          to="/admin/assets"
          className="nav-link"
          onClick={handleNavLinkClick}
        >
          <ListItem button>
            <ListItemIcon>
              <AssetsIcon sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Assets" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>
      </List>
      <div style={{ padding: "16px" }}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<LogoutIcon />}
          fullWidth
          onClick={handleLogout}
          sx={{
            backgroundColor: "#1E3A8A",
            color: "#E0F2F1",
            "&:hover": {
              backgroundColor: "#163A74",
            },
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
