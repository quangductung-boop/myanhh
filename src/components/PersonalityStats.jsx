import { motion } from 'framer-motion';

const stats = [
  { label: 'Happiness', value: 98, color: 'bg-pink-400' },
  { label: 'Creativity', value: 95, color: 'bg-purple-400' },
  { label: 'Energy', value: 100, color: 'bg-yellow-400' },
  { label: 'Cuteness', value: 100, displayValue: '999%', color: 'bg-rose-400' },
  { label: 'Friendly', value: 96, color: 'bg-blue-400' },
];

export default function PersonalityStats() {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-3xl mx-auto glass-card p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2 font-display">
            Cute Power Level 💖
          </h2>
          <p className="text-slate-500 font-medium">Chỉ số sức mạnh đáng yêu của Mỹ Anh</p>
        </div>

        <div className="space-y-6">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center text-sm font-bold text-slate-700">
                <span className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${stat.color}`}></span>
                  {stat.label}
                </span>
                <span>{stat.displayValue || `${stat.value}%`}</span>
              </div>
              <div className="h-4 bg-slate-100 rounded-full overflow-hidden shadow-inner relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                  className={`absolute top-0 left-0 h-full ${stat.color} rounded-full`}
                >
                  <motion.div 
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="w-1/2 h-full bg-white/30 skew-x-12"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
