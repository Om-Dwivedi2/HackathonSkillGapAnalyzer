import React from 'react';
import { Compass, ArrowRight, Shield, Zap, Sparkles, BookOpen, Layers, Cpu, Server, Code, Play } from 'lucide-react';

const SKILL_DESCRIPTIONS = {
  "Docker": "Containerization platform to package applications with all dependencies, ensuring seamless deployment and cross-environment consistency.",
  "AWS": "Cloud infrastructure knowledge essential for deploying, scaling, and managing cloud-native services in production environments.",
  "Microservices": "Architectural pattern key to designing large-scale distributed systems with decoupled, independently deployable services.",
  "System Design": "Crucial capability for planning architecture, optimizing database scalability, caching strategies, and load balancing.",
  "Next.js": "React framework offering server-side rendering, static site generation, and optimized performance for production web apps.",
  "Performance Optimization": "Techniques to minimize load times, improve rendering metrics, and optimize assets and memory utilization.",
  "Web Security": "Best practices for implementing JWT, CSRF protection, secure cookies, and vulnerability scanning for client-server safety.",
  "Design Systems": "Systematic design components and design tokens ensuring visual continuity and rapid component reuse.",
  "Kotlin": "Modern, safe, and concise language recommended by Google for native Android development.",
  "Jetpack Compose": "Declarative UI toolkit for building modern, native Android user interfaces with less code and rapid previewing.",
  "Firebase": "Backend-as-a-service platform for user authentication, real-time databases, analytics, and push notifications.",
  "Clean Architecture": "Software design philosophy separating concerns to create highly testable, independent, and maintainable apps."
};

const SKILL_ICONS = {
  "Docker": Layers,
  "AWS": Cpu,
  "Microservices": Server,
  "System Design": Compass,
  "Next.js": Code,
  "Performance Optimization": Zap,
  "Web Security": Shield,
  "Design Systems": BookOpen
};

export default function FutureSkillsSection({ futureSkills = [], targetRole = "" }) {
  if (!futureSkills || futureSkills.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/20 border border-indigo-100/80 rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_-8px_rgba(79,70,229,0.04)] text-left flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-4 items-start">
          <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl shrink-0 shadow-sm border border-indigo-100/30">
            <Compass className="h-5.5 w-5.5 stroke-[1.8] animate-pulse" />
          </div>
          <div>
            <h4 className="text-base font-extrabold text-dark-navy">Future Skills to Explore</h4>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mt-1">
              Recommended next-step skills to advance your expertise in the {targetRole || "target"} path.
            </p>
          </div>
        </div>
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-[10px] font-bold text-indigo-600 uppercase tracking-wider self-start sm:self-center">
          <Sparkles className="h-3 w-3 stroke-[2.5]" />
          Career Guidance
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {futureSkills.map((skill) => {
          const IconComponent = SKILL_ICONS[skill] || BookOpen;
          const description = SKILL_DESCRIPTIONS[skill] || "Expand your specialized mastery in this future-facing industry standard to multiply your backend scalability and efficiency.";
          
          return (
            <div 
              key={skill}
              className="group flex flex-col justify-between bg-white border border-slate-100 hover:border-indigo-100 rounded-2xl p-5 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_20px_-8px_rgba(79,70,229,0.08)] transition-all duration-300 hover:-translate-y-0.5 text-left"
            >
              <div>
                {/* Icon Circle */}
                <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-indigo-50/50 text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <IconComponent className="h-5 w-5 stroke-[1.8]" />
                </div>

                {/* Skill Name */}
                <h5 className="text-[14.5px] font-extrabold text-dark-navy mb-2 group-hover:text-indigo-600 transition-colors">
                  {skill}
                </h5>

                {/* Skill Description */}
                <p className="text-[11.5px] leading-relaxed text-slate-500 font-medium">
                  {description}
                </p>
              </div>

              {/* Read More Arrow / Hover Action */}
              <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-slate-50/80 text-[10.5px] font-bold text-indigo-500 group-hover:text-indigo-700 transition-colors">
                <span>Future-ready</span>
                <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
