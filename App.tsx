
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ActivitiesPage from './components/ActivitiesPage';
import ImpactStats from './components/ImpactStats';
import SocietySection from './components/SocietySection';

type Page = 'home' | 'about' | 'activities';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[#3818C1] selection:text-white">
      <Navbar onNavigate={navigate} currentPage={currentPage} />
      
      {currentPage === 'home' && (
        <main>
          <Hero />
          <Mission />
          <ImpactStats onNavigate={navigate} />
          <SocietySection />
        </main>
      )}

      {currentPage === 'about' && (
        <AboutPage />
      )}

      {currentPage === 'activities' && (
        <ActivitiesPage />
      )}
      
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
