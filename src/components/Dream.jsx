import { motion } from 'framer-motion';

export default function Dream() {
  return (
    <section className="py-32 px-4 relative z-10 overflow-hidden">
      {/* Decorative background elements for Dream section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/50 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="text-6xl mb-6 inline-block"
          >
            ☁️
          </motion.div>
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="text-4xl absolute top-0 right-[20%] opacity-70"
          >
            ⭐
          </motion.div>
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="text-5xl absolute bottom-0 left-[20%] opacity-60"
          >
            🌙
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 font-display leading-relaxed p-4 dark:from-purple-300 dark:to-pink-300">
            “Sau này Mỹ Anh sẽ lớn lên thật vui, thật khỏe và luôn giữ nụ cười xinh xắn của mình. ✨”
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-2 bg-gradient-to-r from-pink-300 to-purple-300 mx-auto rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
