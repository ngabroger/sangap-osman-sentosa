import React, { useState, useEffect } from 'react';

import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponet from './components/navbar';
import FooterSection from './components/footerSection';
import Homepage from './pages/home/homepage';
import AboutPage from './pages/about/aboutpage';
import ContactPage from './pages/contact/contactpage';
import PricingPage from './pages/pricing/pricingpage';
import ServicesPage from './pages/services/servicespage';
import ScrollToTop from './components/scrolltotop';
import Detail from './pages/detail/detail';
import NotFound from './components/notfound';
import SeoManage from './components/seoManage';
import Loading from './components/loading';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Router>
      <SeoManage title={'Homepage'} />
      <ScrollToTop />
      <NavbarComponet />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterSection />
    </Router>
  );
}

export default App;
