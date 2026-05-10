import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const questions = [
  {
    id: 1,
    question: 'Ngày sinh của bé?',
    options: ['5/8/2020', '8/5/2020', '15/8/2020', '20/8/2020'],
    answer: '5/8/2020'
  },
  {
    id: 2,
    question: 'Sở thích của bé?',
    options: [
      'Chơi hình dán và xem YouTube',
      'Chơi game và đọc sách',
      'Nghe nhạc và nấu ăn',
      'Vẽ tranh và đá bóng'
    ],
    answer: 'Chơi hình dán và xem YouTube'
  },
  {
    id: 3,
    question: 'Người bạn thân nhất của bé?',
    options: ['Sam', 'Chip', 'Bông', 'Mẹ'],
    answer: 'Mẹ'
  },
  {
    id: 4,
    question: 'Bé yêu ai nhất trong gia đình?',
    options: ['Ba', 'Anh Đức Anh', 'Bà ngoại', 'Mẹ'],
    answer: 'Mẹ'
  }
];

export default function QuizGame() {
  const { width, height } = useWindowSize();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hasAttempted, setHasAttempted] = useState(false);

  const handleAnswerOptionClick = (isCorrect, option) => {
    if (isCorrect) {
      if (!window.isMuted) {
        new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3').play().catch(() => {});
      }
      if (!hasAttempted) {
        setScore(score + 1);
      }
      setFeedback('CHÍNH XÁC RỒI. 🎉');
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    } else {
      setHasAttempted(true);
      setFeedback('Chưa đúng rồi, thử lại nhé. 💦');
      return; 
    }

    setTimeout(() => {
      setFeedback(null);
      setHasAttempted(false);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
        setShowConfetti(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setShowConfetti(false);
  };

  return (
    <section id="games" className="py-20 px-4 relative z-10">
      {showConfetti && <Confetti width={width} height={height} recycle={showScore} numberOfPieces={200} />}
      
      <div className="max-w-2xl mx-auto glass-card p-8 md:p-12 relative overflow-hidden">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-display">
            Mini Game: Hiểu Về Mỹ Anh 🌸
          </h2>
        </div>

        {showScore ? (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-slate-700 mb-4 font-display">
              Hoàn thành xuất sắc!
            </h3>
            <p className="text-xl text-pink-600 font-medium mb-8">
              Bạn đã trả lời đúng {score}/{questions.length} câu!
            </p>
            <button 
              onClick={resetQuiz}
              className="px-8 py-3 bg-gradient-to-r from-pink-300 to-purple-300 text-white font-bold rounded-full shadow hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              Chơi Lại 🔄
            </button>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <div className="flex justify-between text-sm font-bold text-pink-400 mb-2">
                  <span>Câu hỏi {currentQuestion + 1} / {questions.length}</span>
                </div>
                <div className="w-full bg-pink-100 rounded-full h-2.5 mb-6">
                  <div 
                    className="bg-gradient-to-r from-pink-400 to-purple-400 h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                  ></div>
                </div>
                <h3 className="text-xl font-bold text-slate-700 font-display min-h-[60px]">
                  {questions[currentQuestion].question}
                </h3>
              </div>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].answer, option)}
                    className="w-full p-4 text-left border-2 border-pink-100 rounded-xl hover:bg-pink-50 hover:border-pink-300 transition-all text-slate-600 font-medium font-display text-lg"
                  >
                    {option}
                  </button>
                ))}
              </div>

              {feedback && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 text-center font-bold text-lg ${feedback.includes('CHÍNH XÁC') ? 'text-green-500' : 'text-red-400'}`}
                >
                  {feedback}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
