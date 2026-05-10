import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const familyMembers = [
  { role: 'Yêu nhất', name: 'Mẹ', desc: 'Người bạn thân thiết nhất của Mỹ Anh 💖', color: 'from-pink-300 to-rose-300' },
  { role: 'Gắn bó', name: 'Ba', desc: 'Luôn chở che và chơi cùng bé 👨‍👧', color: 'from-blue-300 to-cyan-300' },
  { role: 'Yêu thương', name: 'Anh Trai', desc: 'Hay trêu nhưng rất thương em 👦', color: 'from-green-300 to-emerald-300' },
  { role: 'Kính trọng', name: 'Bà Ngoại', desc: 'Luôn dành những điều ngọt ngào nhất 👵', color: 'from-purple-300 to-fuchsia-300' }
];

export default function Family() {
  return (
    <section className="py-20 px-4 relative z-10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md my-10 rounded-[3rem] mx-4 shadow-sm border border-white/60 dark:border-white/10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center"
        >
          <div className="bg-pink-100 dark:bg-pink-900 p-4 rounded-full mb-4 animate-pulse-soft">
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 font-display mb-4">
            Gia Đình Nhỏ Của Mỹ Anh 🏡
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">Nơi ngập tràn tình yêu thương</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {familyMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${member.color} p-1 rounded-3xl shadow-lg`}
            >
              <div className="bg-white/95 dark:bg-slate-800/95 h-full rounded-[22px] p-6 flex flex-col items-center text-center">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">{member.role}</span>
                <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-white mb-3">{member.name}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
