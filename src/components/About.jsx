import { motion } from 'framer-motion';
import { Cake, School, Heart, Users, Star } from 'lucide-react';

const aboutItems = [
  { icon: Cake, label: 'Tuổi', value: '6 Tuổi', color: 'text-pink-500', bg: 'bg-pink-100' },
  { icon: School, label: 'Trường học', value: 'Trường Tiểu học 1/6', color: 'text-blue-500', bg: 'bg-blue-100' },
  { icon: Star, label: 'Sở thích', value: 'Chơi hình dán, Xem YouTube', color: 'text-red-500', bg: 'bg-red-100' },
  { icon: Users, label: 'Người bạn thân nhất', value: 'Mẹ', color: 'text-purple-500', bg: 'bg-purple-100' },
  { icon: Heart, label: 'Yêu ai nhất nhà', value: 'Mẹ', color: 'text-rose-500', bg: 'bg-rose-100' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4 font-display">
            Về Mỹ Anh 🌸
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-lg mx-auto">
            Một vài thông tin nho nhỏ đáng yêu về Mỹ Anh nhé!
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
        >
          {aboutItems.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`glass-card p-6 flex flex-col items-center text-center ${index === 3 ? 'md:col-span-1 lg:col-span-1 lg:col-start-2' : ''} ${index === 4 ? 'md:col-span-1 lg:col-span-1' : ''}`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${item.bg} shadow-sm`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="text-lg font-bold text-slate-700 mb-2 font-display">{item.label}</h3>
              <p className="text-slate-600 font-medium">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
