import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      question: 'How does CarrerLens analyze my resume?',
      answer:
        'Our advanced parser extracts your skills, work history, and project details. It then cross-references these with industry standard requirements for your selected target role using optimized analysis models.',
    },
    {
      question: 'Which roles are supported?',
      answer:
        'We currently support 6 primary engineering tracks: Frontend Engineer, Backend Engineer, Full Stack Engineer, Android Developer, Data Scientist, and DevOps Engineer.',
    },
    {
      question: 'How is readiness score calculated?',
      answer:
        'The readiness score represents the match percentage of your current skill set against the core competency model of the target role. We weigh essential skills higher than optional frameworks.',
    },
    {
      question: 'Is my resume data safe and secure?',
      answer:
        'Yes, absolutely. We prioritize your privacy. All uploaded resumes are parsed in-memory and are never stored on our servers or shared with third parties. Your data remains strictly yours.',
    },
    {
      question: 'Is CarrerLens free to use?',
      answer:
        'Yes! During our hackathon and initial beta release phase, CarrerLens is completely free to use. You can upload resumes and generate roadmaps without any restrictions.',
    },
  ];

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-slate-50/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-navy tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[16px] sm:text-lg text-slate-500 mt-4 leading-relaxed font-medium">
            Everything you need to know about CarrerLens.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/70 rounded-xl overflow-hidden shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] hover:border-slate-300 transition-colors"
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-bold text-dark-navy hover:text-primary-blue text-[15px] sm:text-[16px] transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-primary-blue' : ''
                    }`}
                  />
                </button>

                {/* Accordion Content Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-52 border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 py-5 text-[14.5px] leading-relaxed text-slate-500 font-medium bg-slate-50/30">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
