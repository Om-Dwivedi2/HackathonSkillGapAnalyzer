import React from 'react';
import { Users, Layers, Cpu } from 'lucide-react';

export default function StatsSection() {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-8 w-full border-t border-slate-100 pt-8 max-w-lg">
      {/* Stat 1 */}
      <div className="flex flex-col items-start">
        <div className="p-2 bg-blue-50 rounded-lg text-primary-blue mb-3">
          <Users className="h-6 width-6" />
        </div>
        <span className="text-2xl font-bold text-dark-navy">6+</span>
        <span className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
          Career Roles
        </span>
      </div>
      
      {/* Stat 2 */}
      <div className="flex flex-col items-start border-l border-slate-100 pl-3.5 sm:pl-8">
        <div className="p-2 bg-blue-50 rounded-lg text-primary-blue mb-3">
          <Layers className="h-6 width-6" />
        </div>
        <span className="text-2xl font-bold text-dark-navy">400+</span>
        <span className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
          Skills Analyzed
        </span>
      </div>
      
      {/* Stat 3 */}
      <div className="flex flex-col items-start border-l border-slate-100 pl-3.5 sm:pl-8">
        <div className="p-2 bg-blue-50 rounded-lg text-primary-blue mb-3">
          <Cpu className="h-6 width-6" />
        </div>
        <span className="text-2xl font-bold text-dark-navy">AI</span>
        <span className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
          Powered Insights
        </span>
      </div>
    </div>
  );
}
