import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Box,
  Typography
} from '@mui/material';

const EmployeeDetails = () => {
  const [leaves, setLeaves] = useState([
    {
      leaveId: 1,
      name: 'John Doe',
      leaveType: 'Sick Leave',
      reason: 'Fever and Cold',
      startDate: '2024-12-20',
      endDate: '2024-12-22',
      status: 'Approved'
    },
    {
      leaveId: 2,
      name: 'Jane Smith',
      leaveType: 'Casual Leave',
      reason: 'Family Function',
      startDate: '2024-12-25',
      endDate: '2024-12-26',
      status: 'Pending'
    }
  ]);

  const [search, setSearch] = useState('');

  const filteredLeaves = leaves.filter((leave) =>
    leave.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="p-6 overflow-auto h-screen">
      <h2 className="text-xl font-bold">Leave Details</h2>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <TextField
          label="Search by Name"
          variant="outlined"
          value={search}
          onChange={handleSearchChange}
          sx={{ width: 400 }}
        />
      </Box>
      {filteredLeaves.length === 0 ? (
        <Typography variant="h6" color="error" align="center" sx={{ mt: 2 }}>
          No data found
        </Typography>
      ) : (
        <Paper className="mt-4">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow style={{ backgroundColor: '#f0f0f0' }}>
                  <TableCell style={{ fontWeight: 'bold' }}>Leave ID</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}>Leave Type</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}>Reason</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}>Start Date</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}>End Date</TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredLeaves.map((leave) => (
                  <TableRow key={leave.leaveId}>
                    <TableCell>{leave.leaveId}</TableCell>
                    <TableCell>{leave.name}</TableCell>
                    <TableCell>{leave.leaveType}</TableCell>
                    <TableCell>{leave.reason}</TableCell>
                    <TableCell>{leave.startDate}</TableCell>
                    <TableCell>{leave.endDate}</TableCell>
                    <TableCell>{leave.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </div>
  );
};

export default EmployeeDetails;
