import { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const items = [
  { id: 1, name: 'Súp lơ', icon: '🥦', isFavorite: false },
  { id: 2, name: 'Hình dán', icon: '⭐', isFavorite: true },
  { id: 3, name: 'Cà rốt', icon: '🥕', isFavorite: false },
  { id: 4, name: 'Sách giáo khoa', icon: '📚', isFavorite: false },
  { id: 5, name: 'YouTube', icon: '▶️', isFavorite: true },
  { id: 6, name: 'Búp bê', icon: '🎎', isFavorite: true },
  { id: 7, name: 'Ớt', icon: '🌶️', isFavorite: false },
  { id: 8, name: 'Thuốc đắng', icon: '💊', isFavorite: false },
];

export default function FavoritePicker() {
  const { width, height } = useWindowSize();
  const [selected, setSelected] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const favoriteCount = items.filter(i => i.isFavorite).length;

  const playSound = () => {
    if (!window.isMuted) {
      new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3').play().catch(() => {});
    }
  };

  const handlePick = (item) => {
    if (isDone || selected.includes(item.id)) return;

    if (item.isFavorite) {
      playSound();
      const newSelected = [...selected, item.id];
      setSelected(newSelected);
      
      if (newSelected.length === favoriteCount) {
        setIsDone(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }
    } else {
      // Bấm sai thì rung nhẹ
      const el = document.getElementById(`item-${item.id}`);
      if (el) {
        el.classList.add('animate-wiggle');
        setTimeout(() => el.classList.remove('animate-wiggle'), 500);
      }
    }
  };

  return (
    <section className="py-10 px-4 relative z-10">
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={300} />}
      
      <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 font-display mb-4">
          Mini Game: Giỏ Đồ Yêu Thích 🛍️
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8 font-medium">
          Bạn hãy chọn đúng {favoriteCount} món đồ mà Mỹ Anh thích nhất nhé!
        </p>

        {isDone ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-pink-50 dark:bg-slate-800 rounded-3xl p-8 border-2 border-pink-200 dark:border-slate-700"
          >
            <div className="text-6xl mb-4">🏅</div>
            <h3 className="text-2xl font-bold font-display text-pink-500 mb-2">Huy Hiệu: Người Bạn Thấu Hiểu!</h3>
            <p className="text-slate-600 dark:text-slate-300">Tuyệt vời, bạn đã chọn đúng hết rồi đó!</p>
            <button 
              onClick={() => {
                setSelected([]);
                setIsDone(false);
              }}
              className="mt-6 px-6 py-2 bg-gradient-to-r from-pink-300 to-purple-300 text-white rounded-full font-bold shadow-md hover:shadow-lg transition-all"
            >
              Chơi Lại Nào
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {items.map((item) => {
              const isSelected = selected.includes(item.id);
              return (
                <motion.div
                  key={item.id}
                  id={`item-${item.id}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePick(item)}
                  className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center ${
                    isSelected 
                      ? 'bg-pink-100 dark:bg-pink-900 border-pink-400 opacity-50' 
                      : 'bg-white dark:bg-slate-800 border-pink-100 dark:border-slate-700 hover:border-pink-300 shadow-sm'
                  }`}
                >
                  <span className="text-5xl mb-2">{item.icon}</span>
                  <span className="font-bold text-slate-700 dark:text-slate-200 text-sm">{item.name}</span>
                  {isSelected && (
                    <motion.div 
                      initial={{ scale: 0 }} 
                      animate={{ scale: 1 }} 
                      className="absolute top-2 right-2 text-green-500"
                    >
                      ✔️
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
