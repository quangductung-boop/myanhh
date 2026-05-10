import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Volume2, VolumeX } from 'lucide-react';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    window.isMuted = isMuted;
  }, [isMuted]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleSound = () => setIsMuted(!isMuted);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-full px-6 py-3 shadow-[0_4px_20px_rgba(255,182,193,0.3)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/60 dark:border-white/10">
        <div className="font-display font-bold text-xl text-pink-500 dark:text-purple-400">
          Mỹ Anh ✨
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSound}
            className="p-2 rounded-full hover:bg-pink-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            title={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-pink-100 dark:bg-indigo-900 text-pink-500 dark:text-indigo-300 hover:scale-110 transition-transform flex items-center justify-center shadow-inner"
            title={isDark ? "Pastel Day" : "Dreamy Night"}
          >
            {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
