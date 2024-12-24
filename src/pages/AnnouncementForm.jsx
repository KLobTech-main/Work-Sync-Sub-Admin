import React, { useState } from 'react';
import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Typography, Grid, Paper, Card, CardContent, CardActions } from '@mui/material';

const AnnouncementForm = () => {
  const [announcement, setAnnouncement] = useState('');
  const [recipient, setRecipient] = useState('');
  const [date, setDate] = useState('');
  const [forEmployee, setForEmployee] = useState(false);
  const [forSubAdmin, setForSubAdmin] = useState(false);
  const [announcements, setAnnouncements] = useState([]);

  const handleAnnouncementChange = (e) => setAnnouncement(e.target.value);
  const handleRecipientChange = (e) => setRecipient(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleEmployeeCheckboxChange = () => setForEmployee(!forEmployee);
  const handleSubAdminCheckboxChange = () => setForSubAdmin(!forSubAdmin);

  const handleSubmit = () => {
    if (announcement && (forEmployee || forSubAdmin)) {
      const newAnnouncement = {
        announcement,
        recipient,
        date,
        forEmployee,
        forSubAdmin,
      };

      // Add the new announcement to the list
      setAnnouncements([newAnnouncement, ...announcements]);
      setAnnouncement('');
      setRecipient('');
      setDate('');
      setForEmployee(false);
      setForSubAdmin(false);
    } else {
      alert('Please fill all fields correctly');
    }
  };

  return (
    <Box >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        Create Announcement
      </Typography>

      {/* Announcement Form */}
      <TextField
        label="Announcement"
        multiline
        rows={4}
        value={announcement}
        onChange={handleAnnouncementChange}
        fullWidth
        variant="outlined"
        sx={{
          marginBottom: 2,
          backgroundColor: '#f9f9f9',
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        }}
      />

      <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }}>
        <InputLabel>Recipient</InputLabel>
        <Select
          value={recipient}
          onChange={handleRecipientChange}
          label="Recipient"
          sx={{
            backgroundColor: '#f9f9f9',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        >
          <MenuItem value="employee">Employee</MenuItem>
          <MenuItem value="subAdmin">Sub-Admin</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={2} sx={{ marginBottom: 2 ,width:'50%' }}>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={forEmployee}
                onChange={handleEmployeeCheckboxChange}
                color="primary"
              />
            }
            label="For Employees"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={forSubAdmin}
                onChange={handleSubAdminCheckboxChange}
                color="primary"
              />
            }
            label="For Sub-Admins"
          />
        </Grid>
      </Grid>

      {/* Date Selection with TextField */}
      <TextField
        label="Announcement Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={date}
        onChange={handleDateChange}
        variant="outlined"
        sx={{
          width: '250px',
          marginBottom: 2,
          backgroundColor: '#f9f9f9',
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        }}
      />

      <Box sx={{ marginTop: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
          sx={{
            borderRadius: '8px',
            fontWeight: 'bold',
            padding: '12px',
            width :'200px',
            backgroundColor: '#007bff',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
        >
          Submit Announcement
        </Button>
      </Box>

      {/* Display All Announcements */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          All Announcements
        </Typography>
        {announcements.length > 0 ? (
          announcements.map((item, index) => (
            <Card key={index} sx={{ marginBottom: 3, borderRadius: '10px', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ marginBottom: 1 }}>
                  Announcement {index + 1}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  <strong>Announcement:</strong> {item.announcement}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>
                  <strong>Recipient:</strong> {item.recipient}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>
                  <strong>Date:</strong> {item.date}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>
                  <strong>For Employees:</strong> {item.forEmployee ? 'Yes' : 'No'}
                </Typography>
                <Typography variant="body2">
                  <strong>For Sub-Admins:</strong> {item.forSubAdmin ? 'Yes' : 'No'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">
                  View Details
                </Button>
              </CardActions>
            </Card>
          ))
        ) : (
          <Typography>No announcements available.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default AnnouncementForm;
