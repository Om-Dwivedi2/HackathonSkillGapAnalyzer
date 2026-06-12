import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, Upload } from 'lucide-react';
import { useAuth } from '../common/AuthContext';

export default function CTASection() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleUploadClick = () => {
    if (user) {
      navigate('/analyze');
    } else {
      navigate('/login');
    }
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Banner Card */}
        <div className="w-full bg-blue-50/30 border border-blue-100/70 rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.03)] hover:shadow-[0_15px_35px_-8px_rgba(37,99,235,0.06)] transition-all duration-300">
          
          {/* Left Side: Rocket & Text */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-6 text-center sm:text-left">
            {/* Rocket Icon Wrapper */}
            <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-primary-blue text-white shadow-lg shadow-blue-500/25 shrink-0 animate-bounce-slow">
              <Rocket className="h-8 w-8 stroke-[1.8] transform -rotate-45" />
            </div>

            {/* Content Text */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-dark-navy tracking-tight">
                Ready to bridge your skill gaps?
              </h3>
              <p className="text-[14px] sm:text-[15px] leading-relaxed text-slate-500 font-medium max-w-lg">
                Join thousands of students and professionals who are accelerating their careers with CareerLens.
              </p>
            </div>
          </div>

          {/* Right Side: Upload Button */}
          <div className="w-full sm:w-auto shrink-0">
            <button
              onClick={handleUploadClick}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary-blue hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-200 active:scale-98 cursor-pointer"
            >
              <Upload className="h-5 width-5 stroke-[2.5]" />
              Upload Your Resume
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
