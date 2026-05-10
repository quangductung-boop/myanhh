import { motion } from 'framer-motion';
import { Star, Heart, Sparkles, Cloud, Music, Flower } from 'lucide-react';
import { useEffect, useState } from 'react';

const icons = [Star, Heart, Sparkles, Cloud, Music, Flower];
const colors = ['text-pink-300', 'text-purple-300', 'text-yellow-200', 'text-blue-300', 'text-white'];

export default function FloatingIcons() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const newElements = Array.from({ length: 25 }).map((_, i) => {
      const Icon = icons[Math.floor(Math.random() * icons.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 20 + 15;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      return { id: i, Icon, color, size, left, top, duration, delay };
    });
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className={`absolute ${el.color} opacity-40`}
          style={{ left: `${el.left}%`, top: `${el.top}%` }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        >
          <el.Icon size={el.size} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
}
