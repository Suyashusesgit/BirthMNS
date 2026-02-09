import { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import Hero from './components/Hero';
import FloatingBackground from './components/FloatingBackground';
import AdmirationWall from './components/AdmirationWall';
import MessageSection from './components/MessageSection';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const musicPlayerRef = useRef(null);

  const triggerConfetti = () => {
    // Play music if available
    if (musicPlayerRef.current) {
      musicPlayerRef.current.play();
    }

    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans selection:bg-pink-200">
      <FloatingBackground />
      <MusicPlayer ref={musicPlayerRef} />

      <main className="relative z-10 w-full">
        <Hero />

        <div className="flex justify-center my-10">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,105,180,0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerConfetti}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            <Sparkles className="w-5 h-5" /> Click to Celebrate!
          </motion.button>
        </div>

        <AdmirationWall />
        <MessageSection />

        <footer className="text-center py-10 text-gray-500 text-sm">
          Made with ❤️ for Chelli
        </footer>
      </main>
    </div>
  );
}

export default App;
