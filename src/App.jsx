import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import FloatingIcons from './components/FloatingIcons';
import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import About from './components/About';
import WhyLovesHer from './components/WhyLovesHer';
import Dream from './components/Dream';
import Hobbies from './components/Hobbies';
import Family from './components/Family';
import QuizGame from './components/QuizGame';
import MemoryGame from './components/MemoryGame';
import FavoritePicker from './components/FavoritePicker';
import RewardBadges from './components/RewardBadges';
import MemoryGallery from './components/MemoryGallery';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="min-h-screen bg-gradient-animated relative overflow-hidden">
          <FloatingIcons />
          
          <main className="relative z-10 flex flex-col items-center pt-24">
            <div className="w-full max-w-7xl">
              <Header />
              <Hero />
              <Countdown />
              <About />
              <WhyLovesHer />
              <Dream />
              <Hobbies />
              <Family />
              <QuizGame />
              <MemoryGame />
              <FavoritePicker />
              <RewardBadges />
              <MemoryGallery />
              <Guestbook />
            </div>
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
