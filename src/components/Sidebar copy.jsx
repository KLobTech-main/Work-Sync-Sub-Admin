import React from "react";
import { NavLink } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  People as EmployeeIcon,
  MeetingRoom as MeetingIcon,
  CheckCircle as TaskIcon,
  ConfirmationNumber as TicketIcon,
  Announcement as Announcement,
  HolidayVillage as Leave,
  Dashboard as DeshboardIcon,
  FastRewind as LeaveRequest,
  EditOutlined as JobHistory,
} from "@mui/icons-material";

const Sidebar = () => {
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
        <NavLink to="/admin/employee-details" className="nav-link">
          <ListItem button>
            <ListItemIcon>
              <EmployeeIcon sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Employee Detail" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>

        {/* Leave Request */}
        <NavLink to="/admin/leave-request" className="nav-link">
          <ListItem button>
            <ListItemIcon>
              <Leave sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Leave Request" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>
        <NavLink to="/admin/approve-request" className="nav-link">
          <ListItem button>
            <ListItemIcon>
              <Leave sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Approve Request" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>
        {/* Leave  */}
        {/* <NavLink to="/admin/leave" className="nav-link">
            <ListItem button>
              <ListItemIcon>
                <LeaveRequest sx={{ color: "#1E3A8A" }} />
              </ListItemIcon>
              <ListItemText primary="Leave " sx={{ color: "#E0F2F1" }} />
            </ListItem>
          </NavLink> */}
        {/* Meeting */}
        <NavLink to="/admin/meetings" className="nav-link">
          <ListItem button>
            <ListItemIcon>
              <MeetingIcon sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Meeting" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>

        {/* Test */}
        <NavLink to="/admin/tasks" className="nav-link">
          <ListItem button>
            <ListItemIcon>
              <TaskIcon sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Task" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>

        {/* Ticket */}
        <NavLink to="/admin/tickets" className="nav-link">
          <ListItem button>
            <ListItemIcon>
              <TicketIcon sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Ticket" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>
        {/* Anouncement */}
        <NavLink to="/admin/announcement" className="nav-link">
          <ListItem button>
            <ListItemIcon>
              <Announcement sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Announcement" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>

        {/* Anouncement */}
        <NavLink to="/admin/jobHistoryForm" className="nav-link">
          <ListItem button>
            <ListItemIcon>
              <JobHistory sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText
              primary="Job History Form"
              sx={{ color: "#E0F2F1" }}
            />
          </ListItem>
        </NavLink>
        <NavLink to="/admin/jobHistory" className="nav-link">
          <ListItem button>
            <ListItemIcon>
              <JobHistory sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Job History" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>
        <NavLink to="/admin/feedback" className="nav-link">
          <ListItem button>
            <ListItemIcon>
              <JobHistory sx={{ color: "#1E3A8A" }} />
            </ListItemIcon>
            <ListItemText primary="Feedback" sx={{ color: "#E0F2F1" }} />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
};

export default Sidebar;
