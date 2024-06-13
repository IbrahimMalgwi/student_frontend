import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const StudentTable = ({ students }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Student ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.first_name}</TableCell>
              <TableCell>{student.last_name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.department}</TableCell>
              <TableCell>{student.student_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {students.length === 0 && (
        <Typography variant="body1" align="center" style={{ padding: '20px' }}>
          No students to display
        </Typography>
      )}
    </TableContainer>
  );
};

export default StudentTable;
