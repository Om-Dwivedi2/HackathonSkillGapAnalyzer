import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { 
  Trophy, CheckCircle, AlertTriangle, HelpCircle, ArrowRight, ExternalLink,
  BookOpen, Video, FileText, Calendar, Compass, Shield, Zap, Rocket, Check, X, Sparkles, MessageSquare, Database
} from 'lucide-react';
import { useAuth } from '../components/common/AuthContext';
import { useNavigate } from 'react-router-dom';

import { mockAnalysis } from '../data/mockAnalysis';
import { resources as resourcesData } from '../data/resources';
import FutureSkillsSection from '../components/dashboard/FutureSkillsSection';

export default function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect if not logged in (fallback in case direct link accessed)
  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50/40 flex flex-col font-sans antialiased text-dark-navy">
      {/* Navbar showSteps progress completed dashboard view */}
      <Navbar showSteps={true} currentStep={3} />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8">
        
        {/* 1. Career Snapshot Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {/* Card 1: Target Role */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center text-center gap-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Target Role</span>
            <div className="h-14 w-14 rounded-full bg-blue-50 text-primary-blue flex items-center justify-center shadow-sm">
              <Database className="h-6 w-6 stroke-[1.8]" />
            </div>
            <h4 className="text-base font-extrabold text-dark-navy leading-none">{mockAnalysis.targetRole}</h4>
          </div>

          {/* Card 2: Role Readiness circular indicator */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center text-center gap-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Role Readiness</span>
            <div className="relative h-18 w-18 flex items-center justify-center shrink-0">
              <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" stroke="#F1F5F9" strokeWidth="3.2" />
                <circle cx="18" cy="18" r="16" fill="none" stroke="#2563EB" strokeWidth="3.2" strokeDasharray="100" strokeDashoffset={100 - mockAnalysis.readinessScore} strokeLinecap="round" />
              </svg>
              <div className="flex flex-col items-center">
                <span className="text-lg font-black text-dark-navy leading-none">{mockAnalysis.readinessScore}%</span>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wide leading-none mt-1">Match</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-slate-500">Role Readiness</span>
          </div>

          {/* Card 3: Readiness Level */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center text-center gap-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Readiness Level</span>
            <div className="h-14 w-14 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shadow-sm">
              <Trophy className="h-6 w-6 stroke-[1.8]" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-dark-navy leading-none">{mockAnalysis.readinessLevel}</h4>
              <p className="text-[11px] text-slate-400 font-semibold leading-none mt-1.5">You're on the right track!</p>
            </div>
          </div>

          {/* Card 4: Skills Found */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center text-center gap-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Skills Found</span>
            <div className="h-14 w-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm">
              <CheckCircle className="h-6 w-6 stroke-[1.8]" />
            </div>
            <div>
              <h4 className="text-2xl font-black text-dark-navy leading-none">{mockAnalysis.skillsFound.length}</h4>
              <p className="text-[11px] text-slate-400 font-semibold leading-none mt-1.5">Skills</p>
            </div>
          </div>

          {/* Card 5: Skills Missing */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center text-center gap-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Skills Missing</span>
            <div className="h-14 w-14 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shadow-sm">
              <AlertTriangle className="h-6 w-6 stroke-[1.8]" />
            </div>
            <div>
              <h4 className="text-2xl font-black text-dark-navy leading-none">{mockAnalysis.missingSkills.length}</h4>
              <p className="text-[11px] text-slate-400 font-semibold leading-none mt-1.5">Skills</p>
            </div>
          </div>
        </div>

        {/* 2. Skill Match Analysis Block */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.02)] flex flex-col gap-6 text-left">
          <h3 className="text-lg font-extrabold text-dark-navy">Skill Match Analysis</h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Skills Have Column */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                <CheckCircle className="h-4.5 w-4.5 text-emerald-500" />
                <span>Skills You Already Have</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {mockAnalysis.skillsFound.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <Check className="h-3.5 w-3.5 text-emerald-500 stroke-[3]" />
                    {skill.name}
                    <span className={`px-1.5 py-0.5 text-[9px] font-extrabold uppercase rounded-full ${
                      skill.level === 'Advanced'
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                        : skill.level === 'Intermediate'
                          ? 'bg-orange-50 text-orange-600 border border-orange-100'
                          : 'bg-blue-50 text-blue-600 border border-blue-100'
                    }`}>
                      {skill.level}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Skills Missing Column */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                <AlertTriangle className="h-4.5 w-4.5 text-rose-500" />
                <span>Skills You're Missing</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {mockAnalysis.missingSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-rose-700 bg-rose-50/70 border border-rose-100 rounded-xl"
                  >
                    <X className="h-3.5 w-3.5 text-rose-500 stroke-[3]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Additional Skills Detected */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left">
          <div className="flex gap-4 items-start">
            <div className="p-2.5 bg-blue-50 text-primary-blue rounded-xl shrink-0">
              <Sparkles className="h-5 w-5 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-dark-navy">Additional Skills Detected</h4>
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mt-1">
                These skills are not required for {mockAnalysis.targetRole} role but can give you an extra advantage.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {mockAnalysis.additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-2 text-xs font-bold text-primary-blue bg-blue-50/50 border border-blue-100/50 rounded-xl"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Future Skills to Explore Section */}
        <FutureSkillsSection 
          futureSkills={mockAnalysis.futureSkills} 
          targetRole={mockAnalysis.targetRole} 
        />

        {/* 4. Critical Skill Gap Analysis Cards */}
        <div className="flex flex-col gap-4 text-left">
          <h3 className="text-lg font-extrabold text-dark-navy">Critical Skill Gap Analysis</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Group gaps by priority */}
            {[
              { priority: 'Critical Priority', key: 'Critical', accentColor: 'rose', bgHeader: 'bg-rose-50/50 text-rose-700 border-rose-100' },
              { priority: 'High Priority', key: 'High', accentColor: 'orange', bgHeader: 'bg-orange-50/50 text-orange-700 border-orange-100' },
              { priority: 'Medium Priority', key: 'Medium', accentColor: 'amber', bgHeader: 'bg-amber-50/50 text-amber-700 border-amber-100' }
            ].map((pGroup) => {
              const matchingGaps = mockAnalysis.criticalSkillGaps.filter(gap => gap.priority === pGroup.key);
              if (matchingGaps.length === 0) return null;
              return (
                <div 
                  key={pGroup.priority}
                  className={`bg-white border rounded-3xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.01)] flex flex-col justify-between ${
                    pGroup.accentColor === 'rose'
                      ? 'border-rose-100'
                      : pGroup.accentColor === 'orange'
                        ? 'border-orange-100'
                        : 'border-amber-100'
                  }`}
                >
                  {/* Accent Header */}
                  <div className={`px-5 py-3 border-b text-xs font-bold uppercase tracking-wider ${pGroup.bgHeader}`}>
                    {pGroup.priority}
                  </div>

                  {/* Card Items */}
                  <div className="p-5 flex flex-col gap-5 flex-grow justify-center">
                    {matchingGaps.map((skill) => (
                      <div key={skill.skill} className="flex flex-col gap-2">
                        <h4 className="text-sm font-bold text-slate-700">{skill.skill}</h4>
                        <div className="flex items-center gap-3 bg-slate-50/50 border border-slate-100 rounded-2xl p-3 justify-between">
                          
                          {/* Current Level */}
                          <div className="flex flex-col gap-0.5 items-start">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Current Level</span>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold mt-1 ${
                              skill.currentLevel === 'Beginner'
                                ? 'bg-blue-50 text-blue-600 border border-blue-100'
                                : 'bg-slate-100 text-slate-500 border border-slate-200'
                            }`}>
                              {skill.currentLevel}
                            </span>
                          </div>

                          {/* Arrow Right */}
                          <span className="text-slate-400 font-medium">→</span>

                          {/* Required Level */}
                          <div className="flex flex-col gap-0.5 items-end">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Required Level</span>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold mt-1 ${
                              skill.requiredLevel === 'Intermediate'
                                ? 'bg-orange-50 text-orange-600 border border-orange-100'
                                : 'bg-blue-50 text-blue-600 border border-blue-100'
                            }`}>
                              {skill.requiredLevel}
                            </span>
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Color Legend */}
          <div className="flex flex-wrap items-center gap-5 mt-2 pl-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <span className="h-3 w-3 bg-rose-500 rounded-sm shrink-0" />
              Critical: Must Have
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <span className="h-3 w-3 bg-orange-500 rounded-sm shrink-0" />
              High: Important
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <span className="h-3 w-3 bg-amber-500 rounded-sm shrink-0" />
              Medium: Nice to Have
            </div>
          </div>
        </div>

        {/* 5. Learning Path & Recommended Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personalized Learning Path timeline */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.02)] flex flex-col gap-6 text-left h-full justify-between">
            <div>
              <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                <FileText className="h-4.5 w-4.5 text-primary-blue" />
                <span>Personalized Learning Path</span>
              </div>
              
              {/* Timeline Steps */}
              <div className="flex flex-col mt-6 relative pl-8 border-l-2 border-dashed border-blue-100 ml-4 gap-6 pb-2">
                {mockAnalysis.learningPath.map((step, idx) => {
                  // Logo helper matching title/skill
                  const logoText = step.skill.toLowerCase().includes('node') ? 'JS' : 
                                   step.skill.toLowerCase().includes('express') ? 'ex' :
                                   step.skill.toLowerCase().includes('mongo') ? '🍃' : '🔐';
                  return (
                    <div key={step.step} className="relative text-left flex flex-col gap-1.5">
                      {/* Number Badge */}
                      <span className="absolute -left-12 top-0.5 flex h-8 w-8 rounded-full bg-primary-blue text-white font-black text-xs items-center justify-center shadow-md shadow-blue-500/15 border-2 border-white">
                        {step.step}
                      </span>

                      {/* Step Card Content */}
                      <div className="flex items-center gap-4 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 p-4 rounded-2xl transition-colors">
                        {/* Logo Icon mockup */}
                        <span className="flex h-11 w-11 rounded-xl bg-white border border-slate-100 items-center justify-center font-bold text-sm text-primary-blue shrink-0 shadow-sm">
                          {logoText}
                        </span>
                        
                        <div className="flex-grow flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h4 className="text-sm font-bold text-slate-800">Learn {step.skill}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-[10px] font-bold text-slate-400">Current: <span className="text-slate-600">{step.currentLevel}</span></span>
                              <span className="text-[10px] font-bold text-slate-400">•</span>
                              <span className="text-[10px] font-bold text-slate-400">Target: <span className="text-primary-blue">{step.targetLevel}</span></span>
                            </div>
                          </div>

                          {/* Estimated Time Badge */}
                          <div className="flex flex-col items-start sm:items-end self-start sm:self-center mt-2 sm:mt-0 shrink-0">
                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wide leading-none">Estimated Time</span>
                            <span className="px-2 py-0.5 bg-blue-50 border border-blue-100 text-[10px] font-bold text-primary-blue rounded-full mt-1.5 leading-none">
                              {step.estimatedTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Recommended Resources */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.02)] flex flex-col gap-6 text-left h-full justify-between">
            <div>
              <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                <BookOpen className="h-4.5 w-4.5 text-primary-blue" />
                <span>Recommended Learning Resources</span>
              </div>
              
              <div className="flex flex-col gap-3.5 mt-6">
                {resourcesData.map((resource) => (
                  <div 
                    key={resource.resourceId}
                    className="flex items-center justify-between p-3.5 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-2xl transition-all"
                  >
                    <div className="flex items-center gap-3">
                      {/* Provider Icon representation */}
                      {resource.provider === 'YouTube' ? (
                        <span className="flex h-10 w-10 rounded-xl bg-rose-50 border border-rose-100 items-center justify-center text-rose-600 shrink-0">
                          <Video className="h-5 w-5" />
                        </span>
                      ) : resource.provider === 'freeCodeCamp' ? (
                        <span className="flex h-10 w-10 rounded-xl bg-slate-900 text-white items-center justify-center font-mono text-xs font-black shrink-0">
                          (A)
                        </span>
                      ) : (
                        <span className="flex h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 items-center justify-center font-bold text-xs shrink-0">
                          Ge
                        </span>
                      )}
                      
                      <div className="text-left">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">{resource.title}</h4>
                        <p className="text-[10px] text-slate-400 font-semibold leading-none mt-1">Provider: {resource.provider}</p>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 hover:border-slate-300 hover:bg-white text-[11px] font-bold text-slate-600 rounded-xl shadow-sm hover:shadow transition-all cursor-pointer shrink-0"
                    >
                      Open Resource
                      <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* 6. AI Career Mentor Card */}
        <div className="bg-blue-50/30 border border-blue-100/60 rounded-3xl p-8 sm:p-10 shadow-[0_4px_24px_-8px_rgba(37,99,235,0.03)] text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Background circles */}
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-blue-100/30 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col items-start gap-4 flex-grow">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-blue text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">
              <Sparkles className="h-3 w-3 stroke-[2.5]" />
              AI Insight
            </span>
            <h3 className="text-lg font-extrabold text-dark-navy leading-none">AI Career Mentor</h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-medium max-w-3xl">
              {mockAnalysis.aiInsight}
            </p>
          </div>

          {/* Mascot robot representation (SVG/CSS illustration) */}
          <div className="h-28 w-28 shrink-0 flex items-center justify-center relative animate-bounce-slow">
            {/* Robot illustration */}
            <div className="relative h-20 w-20 bg-gradient-to-br from-indigo-100 to-blue-200 border-2 border-indigo-200 rounded-full flex flex-col items-center justify-center shadow-lg">
              {/* Screen eyes */}
              <div className="w-12 h-6 bg-slate-900 border-2 border-indigo-300 rounded-lg flex items-center justify-center gap-2.5">
                <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
                <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
              </div>
              {/* Smile */}
              <div className="w-3 h-1 bg-indigo-300 rounded-full mt-2" />
              {/* Ears */}
              <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 h-4 w-1.5 bg-indigo-300 rounded-full" />
              <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 h-4 w-1.5 bg-indigo-300 rounded-full" />
              {/* Antenna */}
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-4 bg-indigo-300 rounded-full">
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-2.5 w-2.5 bg-cyan-400 rounded-full animate-ping" />
              </span>
            </div>
            
            {/* Mini floating sparkles */}
            <Sparkles className="absolute top-2 right-2 h-4 w-4 text-cyan-400" />
            <Sparkles className="absolute bottom-2 left-2 h-3.5 w-3.5 text-indigo-400" />
          </div>
        </div>

        {/* 7. Full Career Roadmap CTA */}
        <div className="w-full bg-primary-blue hover:bg-blue-700 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg shadow-blue-500/15 hover:shadow-xl transition-all duration-300 text-left cursor-pointer">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 rounded-full bg-white/10 items-center justify-center shrink-0">
              <Compass className="h-6 w-6 text-white stroke-[2]" />
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white leading-tight">Full Career Roadmap</h4>
              <p className="text-xs sm:text-sm text-blue-100 font-medium mt-1 leading-none">
                Want to explore the complete industry roadmap?
              </p>
            </div>
          </div>
          <a
            href={mockAnalysis.roadmapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-white text-primary-blue hover:bg-blue-50 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-98 cursor-pointer shrink-0"
          >
            Explore Full Roadmap
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* 8. Analysis Metadata footer info */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.02)] text-left flex flex-col gap-6">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
            <FileText className="h-4.5 w-4.5 text-slate-400" />
            <span>Analysis Details</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4 border-t border-slate-100">
            {/* Metadata 1 */}
            <div className="flex items-start gap-3.5">
              <div className="p-2 bg-slate-50 text-slate-400 border border-slate-200 rounded-xl">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide leading-none">Analyzed On</span>
                <p className="text-xs font-bold text-slate-600 mt-1.5">{mockAnalysis.analysisDate}</p>
              </div>
            </div>

            {/* Metadata 2 */}
            <div className="flex items-start gap-3.5">
              <div className="p-2 bg-slate-50 text-slate-400 border border-slate-200 rounded-xl">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide leading-none">Resume Version</span>
                <p className="text-xs font-bold text-slate-600 mt-1.5">{mockAnalysis.resumeFileName}</p>
              </div>
            </div>

            {/* Metadata 3 */}
            <div className="flex items-start gap-3.5">
              <div className="p-2 bg-slate-50 text-slate-400 border border-slate-200 rounded-xl">
                <Database className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide leading-none">Target Role</span>
                <p className="text-xs font-bold text-slate-600 mt-1.5">{mockAnalysis.targetRole}</p>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
