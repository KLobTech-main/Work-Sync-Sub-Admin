import React, { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Box, TablePagination, Button, Grid, Select, MenuItem, Checkbox, ListItemText, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Meeting = () => {
  const [meetings, setMeetings] = useState([]); // State for meetings
  const [searchTerm, setSearchTerm] = useState(''); // State for topic filter
  const [searchDate, setSearchDate] = useState(''); // State for date filter
  const [page, setPage] = useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = useState(10); // Rows per page

  // Dummy employee data
  const employees = [
    { email: 'employee1@example.com' },
    { email: 'employee2@example.com' },
    { email: 'employee3@example.com' },
  ];

  const [newMeeting, setNewMeeting] = useState({
    title: '',
    date: '',
    time: '',
    attendees: [],
    description: '',
    meetingLink: '',
    meetingMode: 'Online',
  });

  const [attendees, setAttendees] = useState([]);

  // Handle input changes for the form
  const handleChange = (e) => {
    setNewMeeting({
      ...newMeeting,
      [e.target.name]: e.target.value,
    });
  };

  const handleAttendeesChange = (e) => {
    setAttendees(e.target.value);
    setNewMeeting({
      ...newMeeting,
      attendees: e.target.value,
    });
  };

  // Handle form submission to create a new meeting
  const handleCreateMeeting = () => {
    setMeetings([...meetings, { ...newMeeting, id: meetings.length + 1 }]);
    setNewMeeting({
      title: '',
      date: '',
      time: '',
      attendees: [],
      description: '',
      meetingLink: '',
      meetingMode: 'Online',
    });
    setAttendees([]);
  };

  // Filter meetings based on topic and date
  const filteredMeetings = meetings.filter((meeting) => {
    const matchesTopic = meeting.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = searchDate ? meeting.date === searchDate : true;
    return matchesTopic && matchesDate;
  });

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when rows per page is changed
  };

  return (
    <div className="p-6">
      {/* Create a New Meeting Form */}
      <Box sx={{ marginBottom: '30px' }}>
        <Typography variant="h6">Create a New Meeting</Typography>
        <Grid
          container
          spacing={2}
          sx={{
            padding: '10px',
            borderRadius: '10px',
            marginTop: '10px',
          }}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              label="Meeting Title"
              variant="outlined"
              fullWidth
              name="title"
              value={newMeeting.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date"
              type="date"
              variant="outlined"
              fullWidth
              name="date"
              value={newMeeting.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Time"
              type="time"
              variant="outlined"
              fullWidth
              name="time"
              value={newMeeting.time}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select
              label="Attendees"
              multiple
              fullWidth
              value={attendees}
              onChange={handleAttendeesChange}
              renderValue={(selected) => selected.join(', ')}
            >
              {employees.map((employee) => (
                <MenuItem key={employee.email} value={employee.email}>
                  <Checkbox checked={attendees.indexOf(employee.email) > -1} />
                  <ListItemText primary={employee.email} />
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              name="description"
              value={newMeeting.description}
              onChange={handleChange}
              multiline
              rows={3}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Meeting Link"
              variant="outlined"
              fullWidth
              name="meetingLink"
              value={newMeeting.meetingLink}
              onChange={handleChange}
              helperText="Optional - Enter a meeting link (Zoom, Google Meet, etc.)"
            />
          </Grid>
          <Grid item xs={12}>
            <Select
              label="Meeting Mode"
              fullWidth
              name="meetingMode"
              value={newMeeting.meetingMode}
              onChange={handleChange}
            >
              <MenuItem value="Online">Online</MenuItem>
              <MenuItem value="Offline">Offline</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Button
          sx={{ marginTop: '20px' }}
          variant="contained"
          color="primary"
          onClick={handleCreateMeeting}
          startIcon={<AddIcon />}
        >
          Create Meeting
        </Button>
      </Box>

      {/* Header and Filters */}
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
        <h2 className="text-xl font-bold mb-4">Employee Meetings</h2>
        <Box display="flex" gap={2} sx={{ width: '800px', justifyContent: 'flex-end' }}>
          {/* Topic Filter */}
          <TextField
            label="Search by Topic"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ width: '400px' }}
          />
          {/* Date Filter */}
          <TextField
            label="Search by Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            sx={{ width: '400px' }}
          />
        </Box>
      </Box>

      {/* Meeting Table */}
      <Paper elevation={3} className="mt-4">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: '#f0f0f0' }}>
                <TableCell style={{ fontWeight: 'bold' }}>ID</TableCell>
                <TableCell style={{ width: '130px', fontWeight: 'bold' }}>Meeting Title</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Description</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Mode</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Participants</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Duration</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Date</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Time</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredMeetings.length > 0 ? (
                filteredMeetings
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((meeting) => (
                    <TableRow key={meeting.id}>
                      <TableCell>{meeting.id}</TableCell>
                      <TableCell>{meeting.title}</TableCell>
                      <TableCell>{meeting.description}</TableCell>
                      <TableCell>{meeting.meetingMode}</TableCell>
                      <TableCell>{meeting.attendees.join(', ')}</TableCell>
                      <TableCell>{meeting.duration}</TableCell>
                      <TableCell>{meeting.date}</TableCell>
                      <TableCell>{new Date(meeting.time).toLocaleTimeString()}</TableCell>
                      <TableCell>
                        <a href={meeting.meetingLink} target="_blank" rel="noopener noreferrer">
                          Join
                        </a>
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={9} align="center">
                    No meetings match the search criteria.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={filteredMeetings.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Meeting;
