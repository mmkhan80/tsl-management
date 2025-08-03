'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // includes Popper

// Zod schema for form validation
const StudentSchema = z.object({
  first_name: z.string().min(2, 'First name is too short'),
  last_name: z.string().min(2, 'Last name is too short'),
  gender: z.enum(['Male', 'Female', 'Other']),
  date_of_birth: z.string().min(1, 'Date of birth is required'),
  class_section_id: z.string().min(1, 'Class section is required'),
  admission_date: z.string().min(1, 'Admission date is required'),
});

type StudentFormData = z.infer<typeof StudentSchema>;

export default function StudentPage() {
  const [students, setStudents] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StudentFormData>({
    resolver: zodResolver(StudentSchema),
  });

  // Fetch students
  const fetchStudents = async () => {
    const res = await fetch('/api/students');
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const onSubmit = async (data: StudentFormData) => {
    const res = await fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      fetchStudents();
      reset(); // clear form
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ marginBottom: '2rem' }}>
        <div>
          <input placeholder="First Name" {...register('first_name')} />
          {errors.first_name && <p style={{ color: 'red' }}>{errors.first_name.message}</p>}
        </div>

        <div>
          <input placeholder="Last Name" {...register('last_name')} />
          {errors.last_name && <p style={{ color: 'red' }}>{errors.last_name.message}</p>}
        </div>

        <div>
          <select {...register('gender')}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <p style={{ color: 'red' }}>{errors.gender.message}</p>}
        </div>

        <div>
          <input type="date" {...register('date_of_birth')} />
          {errors.date_of_birth && <p style={{ color: 'red' }}>{errors.date_of_birth.message}</p>}
        </div>

        <div>
          <input placeholder="Class Section ID" {...register('class_section_id')} />
          {errors.class_section_id && <p style={{ color: 'red' }}>{errors.class_section_id.message}</p>}
        </div>

        <div>
          <input type="date" {...register('admission_date')} />
          {errors.admission_date && <p style={{ color: 'red' }}>{errors.admission_date.message}</p>}
        </div>

        <button type="submit">Save</button>
      </form>

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
