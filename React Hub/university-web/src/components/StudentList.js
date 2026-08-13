import React, { useState, useEffect } from 'react';
import './StudentList.css';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Component Mounted! Fetching data...');

    const timer = setTimeout(() => {
      const data = [
        { id: 1, name: 'Alice Johnson', major: 'Computer Science' },
        { id: 2, name: 'Bob Smith', major: 'Mathematics' },
        { id: 3, name: 'Charlie Brown', major: 'Physics' }
      ];

      setStudents(data);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="student-list-container">
      <h2>Student List</h2>

      {loading ? (
        <div className="loading">
          <span className="spinner" />
          Loading students...
        </div>
      ) : (
        <ul className="student-list">
          {students.map(student => (
            <li key={student.id}>
              <strong>{student.name}</strong> • {student.major}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;