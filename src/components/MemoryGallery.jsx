import { motion } from 'framer-motion';

const images = [
  { id: 1, src: '/gallery1.jpg', span: 'col-span-1 row-span-2 md:col-span-2 md:row-span-2', alt: 'Cute photo 1' },
  { id: 2, src: '/gallery2.jpg', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1', alt: 'Cute photo 2' },
  { id: 3, src: '/gallery3.jpg', span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1', alt: 'Cute photo 3' },
  { id: 4, src: '/gallery4.jpg', span: 'col-span-1 row-span-2 md:col-span-1 md:row-span-2', alt: 'Cute photo 4' },
  { id: 5, src: '/gallery5.jpg', span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1', alt: 'Cute photo 5' },
];

export default function MemoryGallery() {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4 font-display">
            Khoảnh Khắc Đáng Yêu 📸
          </h2>
          <p className="text-lg text-slate-600 font-medium">Những bức ảnh xinh xắn của Mỹ Anh</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className={`relative rounded-3xl overflow-hidden shadow-md hover:shadow-[0_0_20px_rgba(255,182,193,0.8)] transition-all duration-300 group cursor-pointer border-4 border-white ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = `https://picsum.photos/seed/${img.id + 10}/400/600`; // Fallback image
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-300/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-bold text-lg drop-shadow-md">✨ Xinh quá ✨</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
