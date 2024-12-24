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
  TablePagination,
  Button,
  CircularProgress,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Task = () => {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [newTask, setNewTask] = useState({
    assignedTo: '',
    deadLine: '',
    title: '',
    description: '',
    status: 'On Going',
  });
  const [loading, setLoading] = useState(false); // State for loading
  const [searchTerm, setSearchTerm] = useState(''); // State for search filter
  const [page, setPage] = useState(0); // Current page
  const [rowsPerPage, setRowsPerPage] = useState(10); // Rows per page
  const [users, setUsers] = useState(['user1@example.com', 'user2@example.com']); // Example users

  // Handle input changes for creating a new task
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleAssignedToChange = (e) => {
    setNewTask((prevTask) => ({
      ...prevTask,
      assignedTo: e.target.value,
    }));
  };

  // Create new task
  const handleCreateTask = () => {
    setLoading(true);
    setTimeout(() => {
      setTasks((prevTasks) => [...prevTasks, newTask]); // Add new task to the tasks array
      setNewTask({
        assignedTo: '',
        deadLine: '',
        title: '',
        description: '',
        status: 'On Going',
      }); // Reset form
      setLoading(false);
    }, 1000); // Simulate loading
  };

  // Filter tasks based on search input
  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      {/* Header and Search Box */}
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
        <h2 className="text-xl font-bold">Employee Tasks</h2>
        {/* Search Input on the Right */}
        <Box sx={{ width: '400px' }}>
          <TextField
            label="Search by Name or Task"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          />
        </Box>
      </Box>

      {/* New Task Form */}
      <Box sx={{ marginBottom: '30px' }}>
        <Typography variant="h6">Create a New Task</Typography>
        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Assigned To</InputLabel>
              <Select
                value={newTask.assignedTo}
                onChange={handleAssignedToChange}
                name="assignedTo"
                renderValue={(selected) => selected}
              >
                {users.map((email) => (
                  <MenuItem key={email} value={email}>
                    {email}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Deadline"
              variant="outlined"
              fullWidth
              name="deadLine"
              value={newTask.deadLine}
              onChange={handleChange}
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              name="title"
              value={newTask.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              name="description"
              value={newTask.description}
              onChange={handleChange}
              multiline
              rows={3}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={newTask.status}
                onChange={handleChange}
                label="Status"
              >
                <MenuItem value="On Going">On Going</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Button
          sx={{ marginTop: '20px' }}
          variant="contained"
          color="primary"
          onClick={handleCreateTask}
          startIcon={<AddIcon />}
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Task'}
        </Button>
      </Box>

      {/* Task Table */}
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Assigned By</TableCell>
                <TableCell>Assigned To</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Deadline</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTasks.length > 0 ? (
                filteredTasks
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // Show `rowsPerPage` tasks per page
                  .map((task, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>Admin</TableCell>
                      <TableCell>{task.assignedTo}</TableCell>
                      <TableCell>{task.title}</TableCell>
                      <TableCell>{task.description}</TableCell>
                      <TableCell>{task.deadLine}</TableCell>
                      <TableCell>{task.status}</TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No tasks match the search criteria.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[10]} // Allow only 10 rows per page
        component="div"
        count={filteredTasks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage} // Allow changing rows per page
      />
    </div>
  );
};

export default Task;
