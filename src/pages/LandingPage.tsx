import hero from '../assets/hero.png';
import howItWorks from '../assets/howitworks.png';
import {
  FaGlobe,
  FaCode,
  FaBullhorn,
  FaShoppingCart,
  FaVideo,
  FaPaintBrush,
  FaPen,
  FaHeadset,
} from 'react-icons/fa';

const LandingPage = () => (
  <>
    {/* Hero Section */}
    <div className="relative flex items-center justify-center bg-gray-100" style={{ height: '60vh' }}>
      <img
        src={hero}
        alt="Hero"
        className="absolute inset-0 object-cover w-full h-full"
        style={{ height: '60vh' }} // Adjust height as needed
      />
<div className="relative text-center p-6 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
  <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-snug">
    Find Your Digital Solution
  </h1>
  <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
    <a
      href="/looking-for-developer"
      className="inline-block bg-gray-800 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-gray-700 transition duration-300"
    >
      Hire a Solution
    </a>
    <a
      href="/im-a-developer"
      className="inline-block bg-gray-200 text-gray-800 py-3 px-6 rounded-lg text-lg font-medium hover:bg-gray-300 transition duration-300"
    >
      Become a Solution
    </a>
  </div>
</div>

    </div>

    {/* Services Section */}
    <section className="bg-gray-100 py-24">
    <div className="max-w-6xl mx-auto text-center px-4">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Services</h2>
      <p className="mb-12 text-lg text-gray-600">
        Here you'll find providers ready to help you with various types of digital projects. Create a request and get matched with professionals.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <div className="p-6 bg-gray-100 rounded-lg flex flex-col items-center">
          <FaGlobe className="text-4xl mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Web Development</h3>
          <p className="text-gray-700">Create websites and digital solutions</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg flex flex-col items-center">
          <FaCode className="text-4xl mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">System Development</h3>
          <p className="text-gray-700">Develop applications and software systems</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg flex flex-col items-center">
          <FaBullhorn className="text-4xl mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Digital Marketing</h3>
          <p className="text-gray-700">Marketing products and services via digital channels</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg flex flex-col items-center">
          <FaShoppingCart className="text-4xl mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">E-Commerce</h3>
          <p className="text-gray-700">Selling products and services online</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg flex flex-col items-center">
          <FaVideo className="text-4xl mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Video & Photo</h3>
          <p className="text-gray-700">Create and edit visual content</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg flex flex-col items-center">
          <FaPaintBrush className="text-4xl mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Graphic Design</h3>
          <p className="text-gray-700">Create visual elements and professional impressions</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg flex flex-col items-center">
          <FaPen className="text-4xl mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Content Writing</h3>
          <p className="text-gray-700">Create content material for products and services</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg flex flex-col items-center">
          <FaHeadset className="text-4xl mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2 text-gray-800">IT Support</h3>
          <p className="text-gray-700">Support and solutions for your digital workplace</p>
        </div>
      </div>
    </div>
  </section>

    {/* How It Works Section */}
    <section className="bg-ivory-pinkish-beige flex flex-col md:flex-row items-center">
  {/* Information Section */}
  <div className="w-full md:w-1/2 px-4 lg:p-6 text-center md:text-left lg:ml-12">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 text-gray-800">How It Works</h2>
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-start">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg md:text-2xl font-bold mr-4">
          1
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-600">Fill Out the Form</h3>
          <p className="text-base md:text-lg text-gray-700">
            Describe what kind of project you need help with and provide details about your requirements.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg md:text-2xl font-bold mr-4">
          2
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-600">Compare Quotes</h3>
          <p className="text-base md:text-lg text-gray-700">
            Read reviews and receive quotes from providers completely free of charge.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg md:text-2xl font-bold mr-4">
          3
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-600">Choose a Provider</h3>
          <p className="text-base md:text-lg text-gray-700">
            Select the provider that best fits your needs and preferences.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={howItWorks}
      alt="How It Works"
      className="w-full h-[30vh] md:h-[40vh] lg:h-auto object-cover"
    />
  </div>
</section>


    {/* Customer Reviews Section */}
    <section className="py-12 bg-ivory-pinkish-beige">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-800">What Our Customers Say</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex-1">
            <p className="text-lg text-gray-700 mb-4">
              "Developer Finder was a lifesaver for my project. I found the perfect developer who understood my needs and delivered exceptional results. Highly recommend!"
            </p>
            <p className="font-semibold text-gray-800">Sarah K.</p>
            <p className="text-gray-600">Marketing Manager</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex-1">
            <p className="text-lg text-gray-700 mb-4">
              "The platform made it so easy to compare quotes and find a reliable developer. The process was smooth, and the results exceeded my expectations."
            </p>
            <p className="font-semibold text-gray-800">Michael L.</p>
            <p className="text-gray-600">Startup Founder</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex-1">
            <p className="text-lg text-gray-700 mb-4">
              "I had a great experience with Developer Finder. The platform is user-friendly, and I was able to find a skilled developer quickly. Will definitely use again."
            </p>
            <p className="font-semibold text-gray-800">Emily R.</p>
            <p className="text-gray-600">Freelancer</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default LandingPage;
