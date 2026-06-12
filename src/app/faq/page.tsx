"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "How much notice do you need?",
    answer:
      "I generally need at least 5–7 days notice for standard cupcake orders, and 2 weeks for custom cakes or large orders. During busy periods (holidays, Valentine's Day, Mother's Day), I recommend getting in touch as early as possible to secure your date.",
  },
  {
    question: "Do you offer custom colours?",
    answer:
      "Absolutely! Custom colours are available on all products. Just let me know your colour scheme or event theme when you enquire and I'll match it perfectly. You can send me reference images for inspiration too.",
  },
  {
    question: "Where are you located?",
    answer:
      "I'm based on the Northern Beaches in Sydney. All orders are baked fresh from my home kitchen.",
  },
  {
    question: "Do you deliver?",
    answer:
      "I offer delivery within the Northern Beaches area. Delivery fees may apply depending on location. Alternatively, you're welcome to pick up your order from my home. Please ask when placing your order for more details.",
  },
  {
    question: "How do payments work?",
    answer:
      "A 50% deposit is required to confirm your order, with the remaining balance due before or on collection/delivery. I accept bank transfer and cash. Full payment details will be provided when your order is confirmed.",
  },
  {
    question: "Can I request a custom design?",
    answer:
      "Of course! I love creating custom designs. Send me your ideas, reference photos, colour schemes, or themes and I'll do my best to bring your vision to life. Feel free to use the enquiry form to share your ideas.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Page Header */}
      <section className="bg-light-pink py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl tracking-wider text-dark mb-4">
            FAQ
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-dark/60 text-lg">
            Got questions? Here are some answers to the most common ones.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-dark pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 sm:px-8 pb-6">
                    <p className="text-dark/60 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="text-center mt-12">
            <p className="text-dark/50 mb-4">Still have questions?</p>
            <Link
              href="/enquire"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
