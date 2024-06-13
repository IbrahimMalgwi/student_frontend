import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import FileUpload from './components/FileUpload';
import StudentTable from './components/StudentTable';


const App = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/students/');
      setStudents(response.data);
    } catch (err) {
      console.error('Error fetching students', err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Student Election System
      </Typography>
      <FileUpload onUploadComplete={fetchStudents} /> 
       <StudentTable students={students} />
    </Container>
    // <></>
  );
};

export default App;
