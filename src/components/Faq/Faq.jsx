import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./Faq.css";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-container" id="faq">
      <div className="faq-wrapper">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Everything you need to know about investing with us — transparent,
          reliable, and secure.
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleAnswer(index)}
            >
              <div className="faq-question">
                <p>{item.question}</p>
                <MdOutlineKeyboardArrowDown
                  className={`faq-icon ${openIndex === index ? "rotate" : ""}`}
                />
              </div>
              <div
                className="faq-answer"
                style={{ maxHeight: openIndex === index ? "500px" : "0px" }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "How does it work with two wallets?",
    answer:
      "Our system allows you to connect and manage two separate wallets simultaneously for maximum flexibility.",
  },
  {
    question: "What are the benefits of joining?",
    answer:
      "Exclusive benefits such as personalized insights, priority support, and access to premium investment opportunities.",
  },
  {
    question: "Is my money safe?",
    answer:
      "We prioritize safety with bank-grade encryption, two-factor authentication, and regular independent audits.",
  },
  {
    question: "Can I withdraw at any time?",
    answer:
      "Yes, withdrawals are available 24/7 and are usually processed within 1–2 business days.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Our support team is available via live chat, email, and phone — 24/7.",
  },
  {
    question: "What is the minimum investment amount?",
    answer:
      "You can start investing with as little as $50, making it easy for beginners to get started.",
  },
  {
    question: "Do you charge any hidden fees?",
    answer:
      "No. All fees are transparent and clearly shown before any transaction is made.",
  },
  {
    question: "How quickly will I see returns?",
    answer:
      "Returns vary based on your investment plan. Most users begin seeing results within the first cycle.",
  },
  {
    question: "Can I upgrade my investment plan later?",
    answer:
      "Yes, you can upgrade anytime to a higher plan directly from your dashboard.",
  },
  {
    question: "Is customer verification required?",
    answer:
      "Yes, to ensure security and compliance, we require email verification before withdrawals.",
  },
];

export default Faq;
