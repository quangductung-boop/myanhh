import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Clock } from 'lucide-react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      // Bé sinh 5/8/2020
      const currentYear = now.getFullYear();
      let nextBirthday = new Date(currentYear, 7, 5); // Month is 0-indexed, so 7 is August

      if (now > nextBirthday) {
        nextBirthday = new Date(currentYear + 1, 7, 5);
      }

      const difference = nextBirthday - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // initial call

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Ngày', value: timeLeft.days, color: 'text-pink-500', bg: 'bg-pink-100' },
    { label: 'Giờ', value: timeLeft.hours, color: 'text-purple-500', bg: 'bg-purple-100' },
    { label: 'Phút', value: timeLeft.minutes, color: 'text-blue-500', bg: 'bg-blue-100' },
    { label: 'Giây', value: timeLeft.seconds, color: 'text-rose-500', bg: 'bg-rose-100' },
  ];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="inline-block p-4 rounded-full bg-white shadow-md mb-4">
            <Gift className="w-10 h-10 text-pink-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-display">
            Sắp Đến Sinh Nhật Rồi! 🎂
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mt-2">
            Mỹ Anh sinh ngày 5/8/2020 đó nha
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              className={`glass-card w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center ${block.bg} dark:bg-opacity-20`}
            >
              <span className={`text-3xl md:text-5xl font-bold font-display ${block.color} dark:text-white`}>
                {block.value}
              </span>
              <span className="text-sm md:text-base font-medium text-slate-600 dark:text-slate-300 mt-1">
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
