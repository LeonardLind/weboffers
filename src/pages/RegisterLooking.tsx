import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const options = [
  "Websites & Web Development",
  "Systems Development",
  "Digital Marketing",
  "E-commerce",
  "Video & Photo",
  "Graphic Design",
  "Text & Content",
  "IT Support"
];

const RegisterLooking = () => {
  const [name, setName] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleOptionChange = (option: string) => {
    setSelectedOptions(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    navigate('/', { state: { userType: 'requester', selectedOptions } });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center">I'm looking for a...</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 text-xl font-medium">Select your interests:</label>
          <div className="space-y-3">
            {options.map(option => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={option}
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionChange(option)}
                  className="mr-3"
                />
                <label htmlFor={option} className="text-lg">{option}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-xl font-medium">Your Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg mt-4 w-full hover:bg-blue-600 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterLooking;
