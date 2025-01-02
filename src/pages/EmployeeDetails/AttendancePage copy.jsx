import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Box,
  TablePagination,
  Button,
} from '@mui/material';

// Utility function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Utility function to format time
const formatTime = (timeString) => {
  const date = new Date(timeString);
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert to 12-hour format
  return `${hours}:${minutes} ${ampm}`;
};

const AttendancePage = () => {
  const { state } = useLocation();
  const { employee } = state || {};

  const [attendanceData, setAttendanceData] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);

  useEffect(() => {
    // Dummy data for attendance records
    const dummyData = [
      { id: 1, name: 'John Doe', date: '2024-12-01', punchInTime: '2024-12-01T09:00:00', punchOutTime: '2024-12-01T17:00:00' },
      { id: 2, name: 'John Doe', date: '2024-12-02', punchInTime: '2024-12-02T09:15:00', punchOutTime: '2024-12-02T17:05:00' },
      { id: 3, name: 'John Doe', date: '2024-12-03', punchInTime: '2024-12-03T09:30:00', punchOutTime: '2024-12-03T17:30:00' },
      // Add more dummy records as needed
    ];

    setAttendanceData(dummyData);
  }, [employee]);

  // Filter attendance data based on selected date
  const filteredAttendance = attendanceData.filter((attendance) => {
    const matchesDate = selectedDate ? attendance.date === selectedDate : true;
    return matchesDate;
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleReset = () => {
    setSelectedDate('');
    setPage(0);
  };

  if (!employee) {
    return (
      <Typography variant="h6" color="error" align="center">
        Employee not found
      </Typography>
    );
  }

  return (
    <div className="p-6" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flexGrow: 1 }}>
        <div className="flex justify-between py-5">
          <Typography variant="h4" gutterBottom>
            {employee.name}'s Attendance Details
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <TextField
              label="Search by Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              variant="outlined"
              sx={{ width: '250px' }}
            />
            <Button variant="outlined" color="secondary" onClick={handleReset}>
              Reset
            </Button>
          </Box>
        </div>

        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Attendance ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Punch In</TableCell>
                  <TableCell>Punch Out</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredAttendance.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      No attendance records found for this employee.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredAttendance.map((attendance, index) => (
                    <TableRow key={index}>
                      <TableCell>{attendance.id || index + 1}</TableCell>
                      <TableCell>{attendance.name}</TableCell>
                      <TableCell>{formatDate(attendance.date)}</TableCell>
                      <TableCell>{formatTime(attendance.punchInTime)}</TableCell>
                      <TableCell>{formatTime(attendance.punchOutTime)}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={filteredAttendance.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default AttendancePage;
