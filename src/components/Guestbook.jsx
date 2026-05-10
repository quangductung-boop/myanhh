import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Heart } from 'lucide-react';

const initialMessages = [
  { id: 1, name: 'Mẹ', text: 'Chúc con gái của mẹ luôn vui vẻ và ngoan ngoãn nhé!', color: 'bg-pink-100 dark:bg-pink-900/40' },
  { id: 2, name: 'Ba', text: 'Mỹ Anh của ba mãi là công chúa nhỏ đáng yêu nhất.', color: 'bg-blue-100 dark:bg-blue-900/40' },
];

const colors = [
  'bg-pink-100 dark:bg-pink-900/40',
  'bg-purple-100 dark:bg-purple-900/40',
  'bg-blue-100 dark:bg-blue-900/40',
  'bg-green-100 dark:bg-green-900/40',
  'bg-yellow-100 dark:bg-yellow-900/40',
];

export default function Guestbook() {
  const [messages, setMessages] = useState(initialMessages);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const newMsg = {
      id: Date.now(),
      name: name,
      text: text,
      color: randomColor
    };

    setMessages([newMsg, ...messages]);
    setName('');
    setText('');
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-display mb-4">
            Sổ Lưu Bút Yêu Thương 💌
          </h2>
          <p className="text-slate-600 dark:text-slate-300">Gửi những lời chúc ngọt ngào nhất đến Mỹ Anh nha!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="glass-card p-6 md:p-8 h-fit">
            <h3 className="text-2xl font-bold font-display text-slate-700 dark:text-white mb-6 flex items-center gap-2">
              <Heart className="text-pink-500 fill-pink-500" />
              Viết lời chúc
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Tên của bạn là gì?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/50 dark:bg-slate-800/50 dark:text-white dark:border-slate-600"
                />
              </div>
              <div>
                <textarea
                  placeholder="Viết lời yêu thương gửi Mỹ Anh..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/50 dark:bg-slate-800/50 dark:text-white dark:border-slate-600 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Gửi Đi <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Messages */}
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`${msg.color} p-5 rounded-2xl shadow-sm border border-white/40 dark:border-white/10`}
                >
                  <h4 className="font-bold font-display text-slate-800 dark:text-white text-lg mb-1">{msg.name}</h4>
                  <p className="text-slate-700 dark:text-slate-300">{msg.text}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #FFD1DC; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #4c1d95; }
      `}</style>
    </section>
  );
}
