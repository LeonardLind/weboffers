import { useState } from 'react';
import { Link } from 'react-router-dom';

const MyAccount = () => {
  // Dummy data
  const [requests, setRequests] = useState(5);
  const [bankCredit, setBankCredit] = useState(1200);
  const [reviewScore, setReviewScore] = useState(4.7);
  const [jobsDone, setJobsDone] = useState(25);

  const handleLogout = () => {
    // Handle logout logic here
    alert('Logged out successfully!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800">My Account</h2>
          <div className="flex gap-4">
            <Link
              to="/settings"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Settings
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Log Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Request Counter</h3>
            <p className="text-3xl font-bold text-gray-700">{requests}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Bank Credit</h3>
            <p className="text-3xl font-bold text-gray-700">${bankCredit}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Review Score</h3>
            <p className="text-3xl font-bold text-gray-700">{reviewScore.toFixed(1)}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Jobs Done</h3>
            <p className="text-3xl font-bold text-gray-700">{jobsDone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
