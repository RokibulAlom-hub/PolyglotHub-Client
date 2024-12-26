import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    {
      question: "How does PolyglotHub work?",
      answer: "PolyglotHub connects language learners with tutors from around the world for personalized lessons."
    },
    {
      question: "How many lessons a week can I take?",
      answer: "You can schedule as many lessons as you like, depending on the availability of tutors."
    },
    {
      question: "Is PolyglotHub worth it for learning a language?",
      answer: "Yes, PolyglotHub offers flexible and personalized learning experiences with expert tutors."
    },
    {
      question: "How do I become a tutor on PolyglotHub?",
      answer: "You can apply to become a tutor by filling out the application form on our website."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-teal-300 to-blue-400 dark:from-teal-700 dark:to-blue-900 py-10">
      <div className="w-full my-7 max-w-4xl p-8 space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-4xl font-extrabold text-center text-teal-600 dark:text-teal-300 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 dark:border-gray-600 pb-4">
              <div
                className="cursor-pointer flex justify-between items-center text-xl font-semibold text-gray-800 dark:text-gray-100"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="text-teal-600 dark:text-teal-300">{activeIndex === index ? '−' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="pt-4 text-gray-700 dark:text-gray-300 text-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="mt-6 px-6 py-3 font-medium text-white bg-teal-500 rounded-lg shadow-lg hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 transition duration-300">
          View all
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
