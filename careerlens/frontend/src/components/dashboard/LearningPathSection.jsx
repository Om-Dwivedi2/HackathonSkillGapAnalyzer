import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, ChevronDown, ChevronUp, ChevronRight, Lock 
} from 'lucide-react';

// Reusable TopicCard component
export function TopicCard({ number, topic }) {
  return (
    <div className="group flex items-center justify-between p-3.5 bg-white border border-slate-100 hover:border-blue-100 rounded-xl shadow-[0_2px_8px_-3px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_16px_-6px_rgba(37,99,235,0.06)] transition-all duration-200 cursor-pointer text-left">
      <div className="flex items-center gap-3 w-full min-w-0 pr-2">
        {/* Number Badge */}
        <span className="flex h-5.5 w-5.5 shrink-0 rounded-full bg-blue-50 text-primary-blue text-[11px] font-extrabold items-center justify-center border border-blue-100/50">
          {number}
        </span>
        {/* Topic Name */}
        <span className="text-[13px] font-bold text-slate-700 break-words whitespace-normal leading-relaxed group-hover:text-primary-blue transition-colors flex-grow">
          {topic}
        </span>
      </div>
      {/* Right chevron arrow */}
      <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-primary-blue group-hover:translate-x-0.5 transition-all shrink-0" />
    </div>
  );
}

// Reusable LearningTopicsGrid component
export function LearningTopicsGrid({ topics = [] }) {
  if (!topics || topics.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
      {topics.map((topic, idx) => (
        <TopicCard key={idx} number={idx + 1} topic={topic} />
      ))}
    </div>
  );
}

// Reusable LearningPathCard component
export function LearningPathCard({ step, isExpanded, onToggle }) {
  // Logo rendering utility mapping to reference mockup
  const renderLogo = (skill) => {
    const lower = skill.toLowerCase();
    if (lower.includes('node')) {
      return (
        <span className="flex h-11 w-11 rounded-xl bg-slate-50 border border-slate-100 items-center justify-center font-black text-sm text-primary-blue shadow-sm">
          JS
        </span>
      );
    }
    if (lower.includes('express')) {
      return (
        <span className="flex h-11 w-11 rounded-xl bg-slate-50 border border-slate-100 items-center justify-center font-black text-sm text-slate-500 shadow-sm">
          ex
        </span>
      );
    }
    if (lower.includes('mongo')) {
      return (
        <span className="flex h-11 w-11 rounded-xl bg-white border border-slate-100 items-center justify-center shadow-sm">
          <svg className="h-5.5 w-5.5 text-emerald-600 fill-emerald-600/10" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2c-4.4 3-6 9-2 15s8 5 8 5s4-9-2-15s-4-5-4-5z" />
          </svg>
        </span>
      );
    }
    return (
      <span className="flex h-11 w-11 rounded-xl bg-white border border-slate-100 items-center justify-center shadow-sm">
        <Lock className="h-4.5 w-4.5 text-blue-600" />
      </span>
    );
  };

  return (
    <div className="relative text-left flex flex-col">
      
      {/* Dynamic timeline connector line overlay */}
      <span className={`absolute -left-12 top-0.5 flex h-8 w-8 rounded-full font-black text-xs items-center justify-center shadow-md transition-all duration-300 border-2 border-white z-10 select-none
        ${isExpanded 
          ? 'bg-primary-blue text-white shadow-blue-500/15' 
          : 'bg-white border-2 border-slate-200 text-slate-400'
        }`}
      >
        {step.step}
      </span>

      {/* Main Card Wrapper */}
      <div 
        onClick={onToggle}
        className={`flex flex-col bg-white border rounded-2xl transition-all duration-300 cursor-pointer shadow-[0_2px_12_rgba(0,0,0,0.015)] hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.03)]
          ${isExpanded 
            ? 'border-blue-200/80 ring-1 ring-blue-100/30' 
            : 'border-slate-200/80 hover:border-slate-300'
          }`}
      >
        {/* Card Summary Row */}
        <div className="flex items-center justify-between p-4 sm:p-5 select-none gap-4">
          <div className="flex items-center gap-4 min-w-0">
            {renderLogo(step.skill)}
            
            <div className="text-left min-w-0">
              <h4 className="text-[14.5px] font-extrabold text-slate-800 leading-tight">Learn {step.skill}</h4>
              <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                <span className="text-[10px] font-bold text-slate-400">Current: <span className="text-slate-500 font-semibold">{step.currentLevel}</span></span>
                <span className="text-[10px] font-bold text-slate-400">•</span>
                <span className="text-[10px] font-bold text-slate-400">Target: <span className="text-primary-blue font-semibold">{step.targetLevel}</span></span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {/* Estimated Time Info */}
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-wider leading-none">Estimated Time</span>
              <span className="px-2.5 py-1 bg-blue-50 border border-blue-100 text-[10px] font-extrabold text-primary-blue rounded-full mt-1.5 leading-none">
                {step.estimatedTime}
              </span>
            </div>

            {/* Chevron toggle icon */}
            <div className="p-1 rounded-lg hover:bg-slate-50 text-slate-400">
              {isExpanded ? (
                <ChevronUp className="h-5 w-5 transition-transform duration-200" />
              ) : (
                <ChevronDown className="h-5 w-5 transition-transform duration-200" />
              )}
            </div>
          </div>
        </div>

        {/* Expandable Topics Content Panel */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              {/* Inner Details Container */}
              <div className="px-4 pb-5 sm:px-5 sm:pb-6 border-t border-slate-100/80 pt-5 flex flex-col gap-5 bg-slate-50/20">
                {/* Header: Topics Summary */}
                <div className="border-b border-slate-100 pb-3">
                  <h5 className="text-[13px] font-extrabold text-slate-700 text-left">
                    Topics to Learn ({step.topics?.length || 0})
                  </h5>
                </div>

                {/* Topics Grid */}
                <LearningTopicsGrid topics={step.topics} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Reusable LearningPathSection component
export default function LearningPathSection({ learningPath = [] }) {
  const [expandedIndex, setExpandedIndex] = useState(0); // Step 1 is expanded by default (0-indexed)

  if (!learningPath || learningPath.length === 0) return null;

  return (
    <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.02)] flex flex-col gap-6 text-left w-full">
      {/* Section Header */}
      <div className="flex items-center gap-2 font-extrabold text-slate-800 text-sm">
        <FileText className="h-4.5 w-4.5 text-primary-blue" />
        <span>Personalized Learning Path</span>
      </div>

      {/* Timeline Steps Container */}
      <div className="flex flex-col mt-4 relative pl-8 border-l border-dashed border-blue-200/60 ml-4 gap-6 pb-2">
        {learningPath.map((step, idx) => (
          <LearningPathCard 
            key={step.step}
            step={step}
            isExpanded={expandedIndex === idx}
            onToggle={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
          />
        ))}
      </div>
    </div>
  );
}
