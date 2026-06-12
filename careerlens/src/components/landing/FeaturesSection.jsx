import React from 'react';
import { Gauge, Target, Map, GraduationCap, PlayCircle, ExternalLink } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Role Readiness Score',
      desc: 'Get a clear percentage score and know exactly how prepared you are for your target role.',
      icon: Gauge,
    },
    {
      title: 'Skill Gap Analysis',
      desc: 'Identify missing skills categorized by priority: Critical, High, and Medium.',
      icon: Target,
    },
    {
      title: 'Personalized Roadmap',
      desc: 'Step-by-step learning path tailored to your current level and target role.',
      icon: Map,
    },
    {
      title: 'AI Career Mentor',
      desc: 'Get personalized advice and recommendations from our AI career mentor.',
      icon: GraduationCap,
    },
    {
      title: 'Curated Resources',
      desc: 'Access handpicked courses, articles, and videos for every skill you need.',
      icon: PlayCircle,
    },
    {
      title: 'Industry Roadmaps',
      desc: 'Explore complete role roadmaps from roadmap.sh and stay ahead of the curve.',
      icon: ExternalLink,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-navy tracking-tight leading-tight">
            Everything You Need to Grow
          </h2>
          <p className="text-[16px] sm:text-lg text-slate-500 mt-4 leading-relaxed font-medium">
            Powerful insights and personalized guidance to accelerate your career journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-start text-left bg-white rounded-2xl border border-slate-100 hover:border-blue-100/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_-5px_rgba(37,99,235,0.06),0_10px_20px_-10px_rgba(0,0,0,0.04)] p-8 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon Circle */}
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-50/70 border border-blue-100/30 text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                  <Icon className="h-6 w-6 stroke-[1.8]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-dark-navy mb-3 group-hover:text-primary-blue transition-colors duration-200">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[14.5px] leading-relaxed text-slate-500 font-medium">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
