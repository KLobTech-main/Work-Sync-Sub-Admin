import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  TablePagination,
  Button,
} from "@mui/material";

const Ticket = () => {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      email: "user1@example.com",
      title: "Login Issue",
      description: "Cannot login to the system",
      status: "OPEN",
      priority: "High",
    },
    {
      id: 2,
      email: "user2@example.com",
      title: "UI Bug",
      description: "Button not working on homepage",
      status: "IN_PROGRESS",
      priority: "Medium",
    },
    // Add more tickets as needed
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [searchPriority, setSearchPriority] = useState("");
  const [searchEmployee, setSearchEmployee] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Filter tickets based on search criteria
  const filteredTickets = tickets.filter((ticket) => {
    const matchesIssue = ticket.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = searchStatus ? ticket.status === searchStatus : true;
    const matchesPriority = searchPriority
      ? ticket.priority === searchPriority
      : true;
    const matchesEmployee = ticket.email
      .toLowerCase()
      .includes(searchEmployee.toLowerCase());
    return matchesIssue && matchesStatus && matchesPriority && matchesEmployee;
  });

  // Handle change in page number
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle change in rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle status change from dropdown
  const handleStatusChange = (ticketId, newStatus) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
      )
    );
  };

  return (
    <div className="p-6">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={2}
      >
        <h2 className="text-xl font-bold mb-4">Employee Tickets</h2>
        <Box
          display="flex"
          gap={2}
          sx={{ width: "800px", justifyContent: "flex-end" }}
        >
          <TextField
            label="Search by Issue"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ width: "400px" }}
          />
          <TextField
            label="Search by Employee"
            variant="outlined"
            value={searchEmployee}
            onChange={(e) => setSearchEmployee(e.target.value)}
            sx={{ width: "400px" }}
          />
          <FormControl variant="outlined" sx={{ width: "200px" }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={searchStatus}
              onChange={(e) => setSearchStatus(e.target.value)}
              label="Status"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="OPEN">Open</MenuItem>
              <MenuItem value="RESOLVED">Resolved</MenuItem>
              <MenuItem value="IN_PROGRESS">In Progress</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ width: "200px" }}>
            <InputLabel>Priority</InputLabel>
            <Select
              value={searchPriority}
              onChange={(e) => setSearchPriority(e.target.value)}
              label="Priority"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Paper elevation={3} className="mt-4">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: "#f0f0f0" }}>
                <TableCell style={{ fontWeight: "bold" }}>ID</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Email</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Title</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Description
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Status</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Priority</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTickets.length > 0 ? (
                filteredTickets
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell>{ticket.id}</TableCell>
                      <TableCell>{ticket.email}</TableCell>
                      <TableCell>{ticket.title}</TableCell>
                      <TableCell>{ticket.description}</TableCell>
                      <TableCell>
                        <span
                          style={{
                            fontWeight: "bold",
                            color:
                              ticket.status === "OPEN"
                                ? "red"
                                : ticket.status === "RESOLVED"
                                ? "green"
                                : "orange",
                          }}
                        >
                          {ticket.status}
                        </span>
                      </TableCell>
                      <TableCell>{ticket.priority}</TableCell>
                      <TableCell>
                        <FormControl
                          variant="outlined"
                          size="small"
                          sx={{ width: "150px" }}
                        >
                          <Select
                            value={ticket.status}
                            onChange={(e) =>
                              handleStatusChange(ticket.id, e.target.value)
                            }
                            label="Status"
                          >
                            <MenuItem value="OPEN">Open</MenuItem>
                            <MenuItem value="IN_PROGRESS">In Progress</MenuItem>
                            <MenuItem value="RESOLVED">Resolved</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No tickets match the search criteria.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={filteredTickets.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Ticket;
