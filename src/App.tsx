import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import PageTransition from './components/layout/PageTransition';
import HomePage from './pages/HomePage';
import WellnessPage from './pages/WellnessPage';
import BookingPage from './pages/BookingPage';
import ThankYouPage from './pages/ThankYouPage';
import ComingSoonPage from './pages/ComingSoonPage';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/wellness" element={<PageTransition><WellnessPage /></PageTransition>} />
        <Route path="/booking" element={<PageTransition><BookingPage /></PageTransition>} />
        <Route path="/thank-you" element={<PageTransition><ThankYouPage /></PageTransition>} />
        <Route path="/nursery" element={<PageTransition><ComingSoonPage service="Nursery/Playground" /></PageTransition>} />
        <Route path="/salon" element={<PageTransition><ComingSoonPage service="Salon" /></PageTransition>} />
        <Route path="/laundromart" element={<PageTransition><ComingSoonPage service="Laundromart" /></PageTransition>} />
        <Route path="/supermart" element={<PageTransition><ComingSoonPage service="Supermart" /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;