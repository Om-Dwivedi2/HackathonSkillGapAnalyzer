import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { 
  Code, Server, Layers, Infinity as InfinityIcon, Smartphone, LineChart, 
  Sparkles, Info, UploadCloud, FileText, Lock, CheckCircle2, Loader2, X 
} from 'lucide-react';
import { useAuth } from '../components/common/AuthContext';
import { roles as rolesData } from '../data/roles';

export default function AnalyzePage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  // States
  const [selectedRole, setSelectedRole] = useState(null);
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const fileInputRef = useRef(null);

  const iconMap = {
    code: Code,
    server: Server,
    layers: Layers,
    infinity: InfinityIcon,
    smartphone: Smartphone,
    'bar-chart': LineChart
  };

  // Drag and drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      const validTypes = ['.pdf', '.docx', '.txt'];
      const ext = droppedFile.name.substring(droppedFile.name.lastIndexOf('.')).toLowerCase();
      if (validTypes.includes(ext)) {
        setFile(droppedFile);
      }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleAnalyze = () => {
    if (selectedRole && file) {
      setAnalyzing(true);
      // Simulate analysis loading state
      setTimeout(() => {
        setAnalyzing(false);
        navigate('/dashboard'); // Redirect to dashboard mockup afterwards
      }, 4000);
    }
  };

  // Redirect if not logged in (fallback in case direct link accessed)
  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50/30 flex flex-col font-sans antialiased text-dark-navy">
      {/* Navbar with steps progress enabled */}
      <Navbar showSteps={true} currentStep={file ? 2 : 1} />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10 text-left">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Let's analyze your <span className="text-primary-blue">career potential</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 font-medium mt-2 leading-relaxed max-w-2xl">
              Select your target role and upload your resume. <br />
              Our AI will analyze your skills, identify gaps, and create a personalized roadmap for you.
            </p>
          </div>

          {/* AI Info Card */}
          <div className="flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm max-w-sm text-left items-start">
            <div className="p-2.5 bg-blue-50 text-primary-blue rounded-xl shrink-0">
              <Sparkles className="h-5.5 w-5.5 stroke-[2] animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-dark-navy">AI-Powered Analysis</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">
                Advanced AI analyzes 400+ skills and industry standards to give you actionable insights.
              </p>
            </div>
          </div>
        </div>

        {/* Form Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Left Panel: Target Role Selection */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] rounded-3xl p-6 sm:p-8 flex flex-col gap-6">
            <div className="text-left">
              <h3 className="text-lg font-extrabold text-dark-navy">1. Select Your Target Role</h3>
              <p className="text-xs text-slate-400 mt-1 font-semibold">Choose the role you want to pursue.</p>
            </div>

            {/* Roles list grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rolesData.map((role) => {
                const IconComponent = iconMap[role.icon] || Code;
                const isSelected = selectedRole?.id === role.id;
                return (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role)}
                    className={`flex flex-col gap-3 p-5 rounded-2xl border text-left transition-all duration-300 relative group cursor-pointer ${
                      isSelected
                        ? 'border-primary-blue bg-blue-50/10 ring-2 ring-blue-100'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    {/* Check badge */}
                    {isSelected && (
                      <CheckCircle2 className="absolute top-4 right-4 h-5 w-5 text-primary-blue fill-blue-50" />
                    )}

                    {/* Icon wrapper */}
                    <div className={`p-2.5 rounded-xl self-start ${
                      isSelected
                        ? 'bg-primary-blue text-white'
                        : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-primary-blue transition-colors'
                    }`}>
                      <IconComponent className="h-5 w-5 stroke-[2]" />
                    </div>

                    <div>
                      <h4 className="text-[14.5px] font-bold text-dark-navy">{role.title}</h4>
                      <p className="text-[11.5px] text-slate-400 font-semibold leading-relaxed mt-1">
                        {role.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Info Notice Box */}
            <div className="flex gap-3 p-4 bg-blue-50/50 border border-blue-100/40 rounded-2xl text-left items-start mt-2">
              <Info className="h-5 w-5 text-primary-blue shrink-0 mt-0.5" />
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Your analysis will be tailored specifically for the role you select.
              </p>
            </div>
          </div>

          {/* Right Panel: Resume Upload Dropzone */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="text-left">
              <h3 className="text-lg font-extrabold text-dark-navy">2. Upload Your Resume</h3>
              <p className="text-xs text-slate-400 mt-1 font-semibold">
                Upload your latest resume. We support PDF, DOCX, and TXT files.
              </p>
            </div>

            {/* Upload Area Box */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 relative min-h-[260px] flex-grow ${
                isDragging 
                  ? 'border-primary-blue bg-blue-50/10' 
                  : file 
                    ? 'border-emerald-200 bg-emerald-50/5' 
                    : 'border-blue-200 bg-slate-50/30 hover:bg-slate-50'
              }`}
            >
              {file ? (
                // Selected File display
                <div className="flex flex-col items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                    <FileText className="h-8 w-8 stroke-[1.8]" />
                  </div>
                  <div className="max-w-[240px]">
                    <p className="text-sm font-bold text-dark-navy truncate">{file.name}</p>
                    <p className="text-xs text-slate-400 font-semibold mt-1">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    onClick={removeFile}
                    className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 hover:border-slate-300 hover:bg-slate-100 rounded-lg text-xs font-bold text-slate-500 transition-colors cursor-pointer"
                  >
                    <X className="h-3.5 w-3.5" />
                    Change File
                  </button>
                </div>
              ) : (
                // Dropzone prompt
                <div className="flex flex-col items-center gap-4">
                  {/* Cloud Icon */}
                  <div className="h-14 w-14 rounded-full bg-blue-50 text-primary-blue border border-blue-100/60 flex items-center justify-center shadow-sm">
                    <UploadCloud className="h-7 w-7 stroke-[1.8]" />
                  </div>
                  
                  <div>
                    <p className="text-sm font-bold text-dark-navy">Drag & drop your resume here</p>
                    <p className="text-xs text-slate-400 font-semibold mt-1">or</p>
                  </div>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.docx,.txt"
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-5 py-2.5 bg-white border border-slate-200 hover:border-slate-300 rounded-xl shadow-sm text-xs font-bold text-primary-blue hover:text-blue-700 transition-all cursor-pointer"
                  >
                    Browse Files
                  </button>
                  
                  <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wide">
                    PDF, DOCX, or TXT (Max 10MB)
                  </p>
                </div>
              )}
            </div>

            {/* Guidance card */}
            <div className="flex gap-4 p-5 bg-slate-50/50 border border-slate-100 rounded-2xl text-left items-start mt-2">
              <div className="p-2.5 bg-white border border-slate-100 text-slate-500 rounded-xl shrink-0 shadow-sm">
                <FileText className="h-5 w-5 stroke-[2]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-dark-navy">Make sure your resume is up to date</h4>
                <p className="text-[11px] text-slate-400 font-semibold leading-relaxed mt-1">
                  Include your latest experience, skills, and projects for the best analysis.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Submit Actions */}
        <div className="flex flex-col items-center gap-3.5 mb-16">
          <button
            onClick={handleAnalyze}
            disabled={!selectedRole || !file}
            className={`flex items-center gap-2 px-8 py-4 text-base font-bold text-white rounded-xl shadow-lg transition-all duration-200 cursor-pointer ${
              selectedRole && file
                ? 'bg-primary-blue hover:bg-blue-700 shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 active:scale-98'
                : 'bg-blue-200 cursor-not-allowed opacity-80 shadow-none'
            }`}
          >
            Analyze My Resume
            <span className="text-lg">→</span>
          </button>
          
          <div className="flex items-center gap-1.5 text-slate-400 font-semibold select-none">
            <Lock className="h-4 w-4" />
            <span className="text-xs">Your data is secure and private</span>
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />

      {/* Analyzing Loading Modal Overlay */}
      {analyzing && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center gap-6 border border-slate-100/50 scale-up-animate">
            {/* Logo Icon with handle and sparkles */}
            <div className="relative flex items-center justify-center shrink-0">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="load-blue-grad" x1="16" y1="16" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                  </linearGradient>
                </defs>
                
                {/* Magnifying Glass Handle */}
                <line
                  x1="52"
                  y1="52"
                  x2="68"
                  y2="68"
                  stroke="#1E3A8A"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                
                {/* Magnifying Glass Circle */}
                <circle cx="36" cy="36" r="20" stroke="url(#load-blue-grad)" strokeWidth="5" fill="none" />
                
                {/* Chart Columns */}
                <rect x="25" y="40" width="4.5" height="12" rx="1" fill="#94A3B8" />
                <rect x="32.5" y="32" width="4.5" height="20" rx="1" fill="#475569" />
                <rect x="40" y="25" width="4.5" height="27" rx="1" fill="#0F172A" />
                
                {/* Sparkles */}
                <path d="M 52 20 Q 54 20 54 18 Q 54 20 56 20 Q 54 20 54 22 Q 54 20 52 20" fill="#2563EB" />
                <path d="M 58 13 Q 60.5 13 60.5 10.5 Q 60.5 13 63 13 Q 60.5 13 60.5 15.5 Q 60.5 13 58 13" fill="#3B82F6" />
              </svg>
            </div>

            {/* Spinner indicator (circle outline spinner) */}
            <div className="relative flex items-center justify-center">
              <Loader2 className="h-9 w-9 text-primary-blue animate-spin stroke-[2.5]" />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[17px] font-extrabold text-dark-navy tracking-tight">Analyzing your resume...</h3>
              <p className="text-[12px] text-slate-400 font-semibold">This will just take a few seconds.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
