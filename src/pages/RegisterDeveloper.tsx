import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterDeveloper = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic
    navigate('/', { state: { userType: 'developer' } });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-2xl">Register as Developer</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="border p-2" />
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Register</button>
    </form>
  );
};

export default RegisterDeveloper;
