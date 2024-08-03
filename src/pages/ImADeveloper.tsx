import { Link } from 'react-router-dom';

const ImADeveloper = () => (
  <div className="p-4">
    <h2 className="text-2xl">I'm a Developer</h2>
    <Link to="/register-developer" className="text-blue-500">Register Here</Link>
  </div>
);

export default ImADeveloper;
