import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, ArrowRight, Check, X, Sparkles, Code, MoreHorizontal } from 'lucide-react';
import StatsSection from './StatsSection';
import { useAuth } from '../common/AuthContext';

export default function Hero() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleUploadClick = () => {
    if (user) {
      navigate('/analyze');
    } else {
      navigate('/login');
    }
  };

  const skillsHave = [
    'React', 'Javascript', 'HTML', 'CSS', 'Git', 
    'Typescript', 'REST APIs', 'Bootstrap'
  ];

  const skillsMissing = [
    'Redux', 'Testing', 'Performance Optimization', 
    'Next.js', 'State Management', 'CI/CD'
  ];

  const roadmapSteps = [
    { num: 1, name: 'Learn Redux', priority: 'High Priority', color: 'rose' },
    { num: 2, name: 'Learn Testing (Jest, RTL)', priority: 'High Priority', color: 'rose' },
    { num: 3, name: 'Build a Real-world Project', priority: 'Medium Priority', color: 'amber' },
    { num: 4, name: 'Learn Performance Optimization', priority: 'Medium Priority', color: 'amber' },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-slate-50 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left lg:pr-6">
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary-blue animate-pulse" />
              <span className="text-xs font-semibold text-primary-blue tracking-wide uppercase">
                AI-Powered Career Readiness Analyzer
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-dark-navy leading-[1.1] tracking-tight mb-6">
              Know Exactly What <br />
              Skills You Need to <br />
              Land Your <span className="text-primary-blue">Dream Role</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl mb-8">
              Upload your resume, get an AI-powered analysis, identify skill gaps, and follow a personalized roadmap to become job-ready.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-16">
              <button
                onClick={handleUploadClick}
                className="flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-primary-blue hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <Upload className="h-5 width-5 stroke-[2.5]" />
                Upload Resume
              </button>
              <button className="flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 rounded-xl shadow-sm hover:shadow transition-all duration-200 active:scale-98 cursor-pointer">
                See Sample Analysis
              </button>
            </div>

            {/* Statistics Row */}
            <StatsSection />
          </div>

          {/* Right Column (Career Readiness Card) */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="w-full max-w-lg bg-white rounded-2xl border border-slate-200/80 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.06),0_8px_16px_-8px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.08)]">
              {/* Card Header */}
              <div className="px-4 sm:px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700">Career Readiness Report</span>
                <button className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-50 transition-colors">
                  <MoreHorizontal className="h-5 width-5" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 flex flex-col gap-5 sm:gap-6">
                
                {/* Role & Score Row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-3 items-start">
                    <div className="p-2.5 bg-blue-50 text-primary-blue rounded-xl">
                      <Code className="h-6 width-6 stroke-[2]" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-dark-navy">Frontend Engineer</h3>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="px-2 py-0.5 text-[11px] font-semibold tracking-wide text-emerald-700 bg-emerald-50 rounded-full uppercase border border-emerald-100">
                          Intermediate
                        </span>
                        <span className="text-[12px] text-slate-400 font-medium">
                          Keep going! You're on the right track.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Circular Score Indicator */}
                  <div className="relative flex-shrink-0 flex items-center justify-center h-16 w-16">
                    {/* Background track */}
                    <svg className="absolute w-full h-full transform -rotate-95" viewBox="0 0 36 36">
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="#F1F5F9"
                        strokeWidth="3.2"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3.2"
                        strokeDasharray="100"
                        strokeDashoffset="28" // 72% filled (100 - 72)
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="flex flex-col items-center justify-center text-center">
                      <span className="text-base font-extrabold text-emerald-600 leading-none">72%</span>
                      <span className="text-[9px] font-semibold text-slate-400 leading-none mt-0.5">Ready</span>
                    </div>
                  </div>
                </div>

                {/* Skills You Have */}
                <div className="text-left">
                  <h4 className="text-sm font-semibold text-slate-800 mb-3">Skills You Have</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillsHave.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50/70 border border-emerald-100 rounded-lg"
                      >
                        <Check className="h-3.5 width-3.5 text-emerald-600 stroke-[3]" />
                        {skill}
                      </span>
                    ))}
                    <span className="px-2.5 py-1 text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-100 rounded-lg">
                      +10 more
                    </span>
                  </div>
                </div>

                {/* Skills Missing */}
                <div className="text-left">
                  <h4 className="text-sm font-semibold text-slate-800 mb-3">Skills You're Missing</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillsMissing.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-rose-700 bg-rose-50/70 border border-rose-100 rounded-lg"
                      >
                        <X className="h-3.5 width-3.5 text-rose-500 stroke-[3]" />
                        {skill}
                      </span>
                    ))}
                    <span className="px-2.5 py-1 text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-100 rounded-lg">
                      +2 more
                    </span>
                  </div>
                </div>

                {/* Roadmap Preview */}
                <div className="text-left">
                  <h4 className="text-sm font-semibold text-slate-800 mb-3">Your Learning Roadmap (Next Steps)</h4>
                  <div className="flex flex-col gap-2.5">
                    {roadmapSteps.map((step) => (
                      <div
                        key={step.num}
                        className="flex items-center justify-between p-2 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-primary-blue text-xs font-bold">
                            {step.num}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-700">
                            {step.name}
                          </span>
                        </div>
                        <span
                          className={`px-2 py-0.5 text-[10px] font-bold tracking-wide rounded-full uppercase border ${
                            step.color === 'rose'
                              ? 'bg-rose-50 text-rose-600 border-rose-100'
                              : 'bg-amber-50 text-amber-600 border-amber-100'
                          }`}
                        >
                          {step.priority}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Mentor Note */}
                <div className="flex gap-3 p-4 bg-blue-50/50 border border-blue-100/60 rounded-2xl text-left items-start">
                  <div className="flex-grow">
                    <p className="text-xs font-medium text-slate-500 leading-relaxed">
                      <span className="font-semibold text-primary-blue">AI Mentor Note: </span>
                      Focus on Testing and State Management to increase your readiness from 72% to 86%.
                    </p>
                  </div>
                  <Sparkles className="h-5 width-5 text-primary-blue flex-shrink-0 animate-pulse mt-0.5" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
