import { motion } from 'framer-motion';
import { Star, PlayCircle, Smile, Camera, Palette } from 'lucide-react';

const hobbies = [
  { id: 1, title: 'Hình dán', icon: Star, color: 'from-pink-300 to-rose-300', delay: 0.1 },
  { id: 2, title: 'YouTube', icon: PlayCircle, color: 'from-red-300 to-rose-400', delay: 0.2 },
  { id: 3, title: 'Chơi vui', icon: Smile, color: 'from-yellow-300 to-orange-300', delay: 0.3 },
  { id: 4, title: 'Chụp ảnh', icon: Camera, color: 'from-blue-300 to-cyan-300', delay: 0.4 },
  { id: 5, title: 'Vẽ tô màu', icon: Palette, color: 'from-purple-300 to-fuchsia-300', delay: 0.5 },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-20 px-4 relative z-10 bg-white/30 backdrop-blur-sm my-10 rounded-3xl mx-4 shadow-sm border border-white/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4 font-display">
            Thế Giới Của Mỹ Anh 🌟
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Những điều bé xinh làm Mỹ Anh vui mỗi ngày!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {hobbies.map((hobby) => (
            <motion.div
              key={hobby.id}
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: hobby.delay, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
              className={`bg-gradient-to-br ${hobby.color} p-1 rounded-3xl shadow-lg cursor-pointer`}
            >
              <div className="bg-white/90 backdrop-blur-md h-full w-full rounded-[22px] p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-white/70 transition-colors">
                <hobby.icon className="w-10 h-10 text-slate-700" />
                <h3 className="font-bold text-slate-700 font-display leading-tight">{hobby.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
