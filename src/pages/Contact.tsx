import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send an email or store the message)
    setSubmitted(true);
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Your input and feedback are important to us.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">Customer Service</h3>
          <p className="text-gray-600 mt-2">
            If you have any questions, concerns, or need assistance with our services, our customer service is here to help you.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">Visit Us</h3>
          <p className="text-gray-600 mt-2">
            Webbofferter Sweden AB<br />
            Enhagsvägen 18, 187 40 Täby
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">Phone</h3>
          <p className="text-gray-600 mt-2">010 - 585 87 28</p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">Email</h3>
          <p className="text-gray-600 mt-2">Info@webbofferter.se</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Send a Message</h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>

          {submitted && (
            <div className="mt-4 text-green-600 text-center">
              <p>Thank you for your message! We will get back to you soon.</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
