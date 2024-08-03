import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerWithEmailAndPassword } from '../auth'; // Adjust if needed

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerWithEmailAndPassword(email, password, name);
      navigate('/home'); // Redirect to home or another page after successful registration
    } catch (error) {
      if (error instanceof Error) {
        console.error('Registration failed:', error.message);
        // Handle errors, e.g., show error message to the user
      } else {
        console.error('Registration failed: Unknown error');
      }
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="border p-2 w-full rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="border p-2 w-full rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            className="border p-2 w-full rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg mt-4 w-full hover:bg-blue-600 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
