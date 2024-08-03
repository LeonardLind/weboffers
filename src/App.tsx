import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LookingForDeveloper from './pages/LookingForDeveloper';
import ImADeveloper from './pages/ImADeveloper';
import RegisterLooking from './pages/RegisterLooking';
import RegisterDeveloper from './pages/RegisterDeveloper';
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Register from './pages/Register';



const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/looking-for-developer" element={<LookingForDeveloper />} />
            <Route path="/im-a-developer" element={<ImADeveloper />} />
            <Route path="/register-looking" element={<RegisterLooking />} />
            <Route path="/register-developer" element={<RegisterDeveloper />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};



export default App;
