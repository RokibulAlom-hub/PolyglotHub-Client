import React from 'react';

const FAQSection = () => {
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

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-6xl p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="join join-vertical w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked={index === 0} />
              <div className="collapse-title text-xl font-medium">{faq.question}</div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-6 px-4 py-2 font-medium text-white bg-blue-400 rounded-lg shadow-sm hover:bg-indigo-700">
          View all
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
