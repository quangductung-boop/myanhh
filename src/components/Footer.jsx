import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 px-4 text-center relative z-10 border-t border-white/40 bg-white/20 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-2 text-lg md:text-xl font-bold text-slate-600 font-display">
        <span>Made with love for Thái Mỹ Anh</span>
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
        </motion.div>
      </div>
      <p className="mt-2 text-sm text-slate-400">© 2026 - A digital childhood profile</p>
    </footer>
  );
}
