import { useState } from 'react';
import { motion } from 'framer-motion';

const badges = [
  { id: 1, name: 'Sticker Lover', icon: '⭐', desc: 'Sưu tầm hình dán vô đối!', isUnlocked: true },
  { id: 2, name: 'YouTube Fan', icon: '▶️', desc: 'Xem không sót video nào.', isUnlocked: true },
  { id: 3, name: 'Mom’s Bestie', icon: '👩‍👧', desc: 'Bạn thân nhất của mẹ.', isUnlocked: true },
  { id: 4, name: 'Cute Star', icon: '🌟', desc: 'Siêu cấp đáng yêu.', isUnlocked: true },
  { id: 5, name: 'Sweet Heart', icon: '💖', desc: 'Trái tim ấm áp.', isUnlocked: false },
];

export default function RewardBadges() {
  const [unlocked, setUnlocked] = useState(badges.map(b => b.isUnlocked));

  const unlockAll = () => {
    setUnlocked(badges.map(() => true));
  };

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-display mb-4">
            Bộ Sưu Tập Huy Hiệu 🏆
          </h2>
          <p className="text-slate-600 dark:text-slate-300">Những danh hiệu đáng yêu của Mỹ Anh</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {badges.map((badge, index) => {
            const isUnl = unlocked[index];
            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => {
                  if (!isUnl) {
                    const newUnl = [...unlocked];
                    newUnl[index] = true;
                    setUnlocked(newUnl);
                  }
                }}
                className={`glass-card p-4 text-center cursor-pointer flex flex-col items-center justify-center min-h-[160px] ${
                  isUnl ? 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/40 dark:to-orange-900/40 border-yellow-200' : 'bg-slate-50 dark:bg-slate-800 grayscale opacity-60'
                }`}
              >
                <div className="text-4xl mb-3">{isUnl ? badge.icon : '🔒'}</div>
                <h3 className={`font-bold font-display leading-tight mb-1 ${isUnl ? 'text-orange-600 dark:text-orange-300' : 'text-slate-500'}`}>
                  {badge.name}
                </h3>
                {isUnl && <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">{badge.desc}</p>}
              </motion.div>
            );
          })}
        </div>

        {!unlocked.every(Boolean) && (
          <div className="text-center mt-8">
            <button onClick={unlockAll} className="text-sm font-medium text-pink-500 hover:text-pink-600 underline">
              Mở khóa tất cả huy hiệu
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
