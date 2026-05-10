import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 500); // allow exit animation to finish
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-pink-50 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Decorative background for loading */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-pink-200/40 to-purple-200/40 rounded-full blur-3xl opacity-50"
          />

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-6xl mb-8 relative z-10"
          >
            🎀
          </motion.div>

          <h1 className="text-3xl font-bold text-pink-400 font-display mb-6 relative z-10">
            Đang tải thế giới của Mỹ Anh...
          </h1>

          <div className="w-64 h-4 bg-white rounded-full shadow-inner overflow-hidden relative z-10 p-1">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-300 to-purple-300 rounded-full"
              style={{ width: `${progress}%` }}
              layout
            />
          </div>
          <div className="mt-2 text-pink-400 font-bold relative z-10">
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
