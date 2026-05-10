import { motion } from 'framer-motion';

const tags = [
  { text: 'Hay cười 😊', bg: 'bg-pink-100 dark:bg-pink-900', color: 'text-pink-600 dark:text-pink-300' },
  { text: 'Dễ thương 🎀', bg: 'bg-purple-100 dark:bg-purple-900', color: 'text-purple-600 dark:text-purple-300' },
  { text: 'Thích stickers ⭐', bg: 'bg-yellow-100 dark:bg-yellow-900', color: 'text-yellow-600 dark:text-yellow-300' },
  { text: 'Thân thiện 🤝', bg: 'bg-green-100 dark:bg-green-900', color: 'text-green-600 dark:text-green-300' },
  { text: 'Rất đáng yêu 🥰', bg: 'bg-rose-100 dark:bg-rose-900', color: 'text-rose-600 dark:text-rose-300' },
];

export default function WhyLovesHer() {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-700 dark:text-white font-display mb-8">
          Vì Sao Mọi Người Yêu Mỹ Anh? 💭
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: Math.random() * 6 - 3 }}
              className={`px-6 py-3 rounded-full font-bold font-display shadow-sm cursor-pointer ${tag.bg} ${tag.color}`}
            >
              {tag.text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
