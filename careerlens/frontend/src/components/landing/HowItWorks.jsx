import React from 'react';
import { UploadCloud, Target, BarChart3, Flag, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: 'Upload Your Resume',
      desc: 'Upload your current resume in PDF format. Our AI will extract your skills automatically.',
      icon: UploadCloud,
    },
    {
      num: 2,
      title: 'Choose Target Role',
      desc: 'Select the role you want to pursue from 6+ engineering career paths.',
      icon: Target,
    },
    {
      num: 3,
      title: 'AI Analyzes & Finds Gaps',
      desc: 'Our AI analyzes your skills against industry standards and identifies gaps.',
      icon: BarChart3,
    },
    {
      num: 4,
      title: 'Get Your Roadmap',
      desc: 'Receive a personalized learning path with resources to bridge your skill gaps.',
      icon: Flag,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full max-w-7xl px-4 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-navy tracking-tight leading-tight">
            How <span className="text-primary-blue">CareerLens</span> Works
          </h2>
          <p className="text-[16px] sm:text-lg text-slate-500 mt-4 leading-relaxed font-medium">
            Get your personalized career roadmap in just 4 simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative flex flex-col items-center">
                
                {/* Step Card */}
                <div className="w-full flex flex-col items-center text-center bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08)] p-6 sm:p-8 transition-all duration-300 relative group z-10 hover:-translate-y-1">
                  
                  {/* Icon Container with subtle animation on hover */}
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 border border-blue-100/60 text-primary-blue mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 stroke-[1.8]" />
                  </div>

                  {/* Step Badge */}
                  <div className="flex items-center justify-center h-7 w-7 rounded-full bg-primary-blue text-white text-xs font-extrabold mb-4 shadow-md shadow-blue-500/20">
                    {step.num}
                  </div>

                  {/* Heading */}
                  <h3 className="text-base sm:text-lg font-bold text-dark-navy mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-500 font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Connector Arrow (Desktop Only) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-12 items-center text-blue-200 z-20 pointer-events-none w-8">
                    <div className="w-full border-t-2 border-dashed border-blue-200 flex items-center justify-end relative">
                      <ArrowRight className="h-4 w-4 absolute -right-2 text-blue-300/80" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
