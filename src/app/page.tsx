'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // includes Popper



export default function HomePage() {
  const [students, setStudents] = useState([]);

  

  // Fetch students
  const fetchStudents = async () => {
    const res = await fetch('/api/students');
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  

  return (
    <main style={{ padding: '2rem' }}>
     
      <h2>Student List</h2>
      <div className="table-responsive">
  <table className="table table-bordered table-hover table-striped align-middle">
    <thead className="table-dark">
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Gender</th>
        <th>Date of Birth</th>
        <th>Roll Number</th>
        <th>Class</th>
        <th>Section</th>
        <th>Admission Date</th>
        <th>Previous School</th>
        <th>Father NIC</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Religion</th>
        <th>Guardian Name</th>
        <th>Guardian Contact</th>
        <th>Status</th>
        <th>Created At</th>
        <th>Updated At</th>
      </tr>
    </thead>
    <tbody>
      {students.map((s: any) => (
        <tr key={s.id}>
          <td>{s.id}</td>
          <td>{s.firstName}</td>
          <td>{s.lastName}</td>
          <td>{s.gender}</td>
          <td>{new Date(s.dateOfBirth).toLocaleDateString()}</td>
          <td>{s.rollNumber || 'N/A'}</td>
          <td>{s.classSection?.class?.name || 'N/A'}</td>
          <td>{s.classSection?.section?.name || 'N/A'}</td>
          <td>{new Date(s.admissionDate).toLocaleDateString()}</td>
          <td>{s.previousSchool || 'N/A'}</td>
          <td>{s.fatherNic || 'N/A'}</td>
          <td>{s.email || 'N/A'}</td>
          <td>{s.phone || 'N/A'}</td>
          <td>{s.address || 'N/A'}</td>
          <td>{s.religion || 'N/A'}</td>
          <td>{s.guardianName || 'N/A'}</td>
          <td>{s.guardianContact || 'N/A'}</td>
          <td>
            <span className={`badge ${s.isActive ? 'bg-success' : 'bg-danger'}`}>
              {s.isActive ? 'Active' : 'Inactive'}
            </span>
          </td>
          <td>{new Date(s.createdAt).toLocaleString()}</td>
          <td>{new Date(s.updatedAt).toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


    </main>
  );
}
