import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cardItems = [
  { id: 1, type: 'Mẹ', icon: '👩‍👧' },
  { id: 2, type: 'Hình dán', icon: '⭐' },
  { id: 3, type: 'YouTube', icon: '▶️' },
  { id: 4, type: 'Búp bê', icon: '🎎' },
];

const shuffleCards = () => {
  const shuffled = [...cardItems, ...cardItems]
    .sort(() => Math.random() - 0.5)
    .map((card, index) => ({ ...card, uniqueId: index, isFlipped: false, isMatched: false }));
  return shuffled;
};

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [matches, setMatches] = useState(0);
  const [isWon, setIsWon] = useState(false);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    setCards(shuffleCards());
    setFirstChoice(null);
    setSecondChoice(null);
    setMatches(0);
    setIsWon(false);
  };

  const handleChoice = (card) => {
    if (!disabled && !card.isMatched && !card.isFlipped) {
      firstChoice ? setSecondChoice(card) : setFirstChoice(card);
    }
  };

  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.type === secondChoice.type) {
        if (!window.isMuted) {
          new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3').play().catch(() => {});
        }
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.type === firstChoice.type) {
              return { ...card, isMatched: true, isFlipped: true };
            } else {
              return card;
            }
          });
        });
        setMatches(prev => prev + 1);
        resetTurn();
      } else {
        setTimeout(() => {
          setCards(prevCards => {
            return prevCards.map(card => {
              if (card.uniqueId === firstChoice.uniqueId || card.uniqueId === secondChoice.uniqueId) {
                return { ...card, isFlipped: false };
              }
              return card;
            });
          });
          resetTurn();
        }, 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  useEffect(() => {
    if (matches === cardItems.length && matches > 0) {
      setTimeout(() => setIsWon(true), 500);
    }
  }, [matches]);

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };

  return (
    <section className="py-10 px-4 relative z-10 mb-20">
      <div className="max-w-2xl mx-auto glass-card p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-display">
            Mini Game: Lật Thẻ Ghi Nhớ 🃏
          </h2>
          <p className="text-slate-500 mt-2">Tìm các cặp giống nhau nhé!</p>
        </div>

        {isWon ? (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-10"
          >
            <div className="text-6xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold text-slate-700 mb-4 font-display">
              Tuyệt vời quá!
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Bạn đã lật đúng tất cả {matches} cặp thẻ!
            </p>
            <button 
              onClick={startNewGame}
              className="px-8 py-3 bg-gradient-to-r from-pink-300 to-purple-300 text-white font-bold rounded-full shadow hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Chơi Lại 🔄
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-4 gap-3 sm:gap-4">
            {cards.map(card => (
              <motion.div
                key={card.uniqueId}
                className="relative aspect-square cursor-pointer perspective-1000"
                onClick={() => handleChoice(card)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={card.isMatched ? { rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.5 }}
              >
                <div 
                  className={`w-full h-full absolute transition-all duration-500 transform-style-3d shadow-sm rounded-xl ${card.isFlipped || card.uniqueId === firstChoice?.uniqueId || card.uniqueId === secondChoice?.uniqueId ? 'rotate-y-180' : ''}`}
                >
                  {/* Front (Hidden state) */}
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl flex items-center justify-center border-2 border-white">
                    <span className="text-3xl opacity-50">🎀</span>
                  </div>
                  
                  {/* Back (Revealed state) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-xl flex flex-col items-center justify-center border-2 border-pink-200 shadow-[0_0_15px_rgba(255,182,193,0.5)]">
                    <span className="text-4xl mb-1">{card.icon}</span>
                    <span className="text-xs font-bold text-slate-600 hidden sm:block">{card.type}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
}
