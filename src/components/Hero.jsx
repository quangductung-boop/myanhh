import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  const [clickCount, setClickCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  const handleAvatarClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 5) {
      setShowSecret(true);
      setTimeout(() => {
        setShowSecret(false);
        setClickCount(0);
      }, 5000);
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 z-10 px-4">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, duration: 1.5 }}
          className="relative group mb-8"
        >
          <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 animate-pulse-soft"></div>
          <div 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-white shadow-xl overflow-hidden relative z-10 animate-float bg-white cursor-pointer"
            onClick={handleAvatarClick}
            title="Bấm vào tớ thử xem ^^"
          >
            <img 
              src="/avatar.jpg" 
              alt="Thái Mỹ Anh" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://i.pinimg.com/736x/8f/30/21/8f3021946ebde513220556758ce740b2.jpg'; // fallback cute girl image
              }}
            />
          </div>
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-4 -right-4 text-4xl z-20"
          >
            ✨
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute -bottom-4 -left-4 text-4xl z-20"
          >
            🎀
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {showSecret && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-1/4 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border-2 border-pink-300 z-50 text-pink-600 font-bold font-display"
            >
              Mỹ Anh là một ngôi sao nhỏ siêu dễ thương ✨💖
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 mb-4 text-glow filter drop-shadow-sm font-display tracking-wide pb-2">
            Thái Mỹ Anh
          </h1>
          <p className="text-xl md:text-2xl text-pink-600 font-medium mb-2 font-display bg-white/50 backdrop-blur-sm inline-block px-6 py-2 rounded-full shadow-sm">
            6 Tuổi 🌸
          </p>
          <div className="text-lg md:text-xl text-slate-600 h-10 mt-4 max-w-lg mx-auto font-medium">
            <Typewriter
              words={['Một cô bé nhỏ thích hình dán ✨', 'Thích xem YouTube 💖', 'Và yêu những điều thật xinh xắn 🥰']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 flex gap-4 flex-wrap justify-center"
        >
          <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-gradient-to-r from-pink-300 to-purple-300 text-white font-bold rounded-full shadow-[0_4px_15px_rgba(255,182,193,0.5)] hover:shadow-[0_6px_20px_rgba(255,182,193,0.7)] hover:-translate-y-1 transition-all duration-300">
            Khám phá thêm 🌸
          </button>
          <button onClick={() => document.getElementById('games').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-white text-pink-400 font-bold rounded-full shadow-[0_4px_15px_rgba(255,182,193,0.3)] hover:bg-pink-50 hover:-translate-y-1 transition-all duration-300 border-2 border-pink-100">
            Chơi Mini Game 🎮
          </button>
        </motion.div>
      </div>
    </section>
  );
}
