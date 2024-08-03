import { Link } from 'react-router-dom';

const LookingForDeveloper = () => (
  <div className="flex items-center justify-center" style={{ height: '747px', backgroundColor: '#F9FAFB' }}>
    <div className="text-center bg-white shadow-lg rounded-lg p-10 max-w-md w-full">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Looking for a Developer?</h2>
      <p className="text-xl mb-8 text-gray-600">Find the perfect developer to meet your needs.</p>
      <div className="space-y-4">
        <Link
          to="/register"
          className="block bg-blue-500 text-white py-4 px-8 rounded-lg text-xl font-semibold hover:bg-blue-600 transition duration-300"
        >
          Register Here
        </Link>
        <Link
          to="/login"
          className="block bg-gray-300 text-gray-800 py-4 px-8 rounded-lg text-xl font-semibold hover:bg-gray-400 transition duration-300"
        >
          Log In
        </Link>
      </div>
    </div>
  </div>
);

export default LookingForDeveloper;
