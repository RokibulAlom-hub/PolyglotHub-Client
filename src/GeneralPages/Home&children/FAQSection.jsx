import React, { useState } from "react";
import Headers from "../../Components/Heading/Headers";
import Lottie from "lottie-react";
import animation from "../../../public/Animation - faq.json";

const FAQSection = () => {
  const [indexTrue, setIndexTrue] = useState(false);

  const faqs = [
    {
      question: "How does PolyglotHub work?",
      answer:
        "PolyglotHub connects language learners with tutors from around the world for personalized lessons.",
    },
    {
      question: "How many lessons a week can I take?",
      answer:
        "You can schedule as many lessons as you like, depending on the availability of tutors.",
    },
    {
      question: "Is PolyglotHub worth it for learning a language?",
      answer:
        "Yes, PolyglotHub offers flexible and personalized learning experiences with expert tutors.",
    },
    {
      question: "How do I become a tutor on PolyglotHub?",
      answer:
        "You can apply to become a tutor by filling out the application form on our website.",
    },
  ];

  const toggleFAQ = (index) => {
    setIndexTrue(indexTrue === index ? false : index);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <Lottie
        animationData={animation}
        loop={true}
        style={{ width: 300, height: 300 }}
      ></Lottie>
      <Headers headtext="Frequently Asked Question"></Headers>
      <div className="w-full max-w-4xl px-4 py-4  bg-white  rounded-xl shadow-lg">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2  pb-4">
              <div
                className="cursor-pointer flex justify-between items-center text-xl font-semibold text-gray-800"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="text-accent">
                  {indexTrue === index ? "−" : "+"}
                </span>
              </div>
              {indexTrue === index && (
                <div className="pt-4 text-gray-700  text-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
