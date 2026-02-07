import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WellnessPage from './pages/WellnessPage';
import BookingPage from './pages/BookingPage';
import ThankYouPage from './pages/ThankYouPage';
import ComingSoonPage from './pages/ComingSoonPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wellness" element={<WellnessPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/nursery" element={<ComingSoonPage service="Nursery/Playground" />} />
            <Route path="/salon" element={<ComingSoonPage service="Salon" />} />
            <Route path="/laundromart" element={<ComingSoonPage service="Laundromart" />} />
            <Route path="/supermart" element={<ComingSoonPage service="Supermart" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;