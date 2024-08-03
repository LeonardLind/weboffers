import { FaFacebook, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ensure the path to your logo is correct

const Footer = () => (
  <footer className="w-full bg-[#222222] text-white py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <img src={logo} alt="logo" className="h-16 mb-4" />
          <p className="text-sm">&copy; 2024 Developer Finder. All rights reserved.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full lg:w-2/3">
          {/* Links grouping */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex flex-col items-center lg:items-start">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors mb-2">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <Link to="/faq" className="text-gray-300 hover:text-white transition-colors mb-2">FAQ</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <Link to="/account" className="text-gray-300 hover:text-white transition-colors">My Account</Link>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center gap-6 mt-6 lg:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-gray-300 hover:text-white transition-colors text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-gray-300 hover:text-white transition-colors text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-gray-300 hover:text-white transition-colors text-2xl" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <FaDiscord className="text-gray-300 hover:text-white transition-colors text-2xl" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
