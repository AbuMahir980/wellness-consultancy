import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqContentVariants, easings } from '@/lib/animations';

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

const FAQItem = ({ question, answer, defaultOpen = false }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: easings.decel }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center text-left group"
      >
        <motion.span
          className="font-medium text-lg text-gray-900 group-hover:text-teal-700 transition-colors duration-300 pr-4"
          animate={{ x: isOpen ? 4 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {question}
        </motion.span>

        {/* Animated chevron with color change */}
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            backgroundColor: isOpen ? 'rgb(204 251 241)' : 'rgb(243 244 246)',
          }}
          transition={{ duration: 0.35, ease: easings.elastic }}
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
        >
          <ChevronDown className={`h-5 w-5 transition-colors duration-300 ${isOpen ? 'text-teal-700' : 'text-gray-500'}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={faqContentVariants}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.3, ease: easings.decel }}
              className="pb-5 text-gray-600 leading-relaxed pl-1"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;