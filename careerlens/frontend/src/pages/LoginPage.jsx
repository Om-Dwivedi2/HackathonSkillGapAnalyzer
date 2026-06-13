import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Target, Map, TrendingUp, Star, Sparkles, Check, ArrowRight } from 'lucide-react';
import Logo from '../components/common/Logo';
import { useAuth } from '../components/common/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleValidation = () => {
    const tempErrors = {};
    if (!email) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      tempErrors.password = 'Password is required';
    } else if (password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      login(email);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate('/'); // Redirect to landing page on successful form submission mockup
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex items-stretch font-sans antialiased text-dark-navy">
      {/* Split Layout Container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 gap-8 items-center">
        
        {/* Left Column (Brand info/features) - hidden on mobile/tablet, shown on desktop */}
        <div className="hidden lg:col-span-6 lg:flex flex-col gap-8 text-left bg-blue-50/20 border border-blue-100/50 rounded-3xl p-10 h-full justify-between relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

          {/* Logo & Headline */}
          <div className="flex flex-col gap-6 relative z-10">
            <Link to="/">
              <Logo />
            </Link>
            <div>
              <h1 className="text-[34px] font-extrabold leading-[1.2] tracking-tight text-dark-navy">
                Your career <br />
                clarity <span className="text-primary-blue">starts here.</span>
              </h1>
              <p className="text-sm text-slate-500 mt-3 font-medium leading-relaxed max-w-md">
                Sign in to analyze your resume, discover skill gaps, and get your personalized roadmap.
              </p>
            </div>
          </div>

          {/* Mini Visual Dashboard Card Mockup */}
          <div className="relative border border-slate-100 bg-white rounded-2xl p-5 shadow-md max-w-sm ml-4 z-10 my-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-slate-400">Readiness Score</span>
              <div className="flex gap-1">
                <span className="w-1.5 h-3 bg-slate-100 rounded-sm" />
                <span className="w-1.5 h-4 bg-slate-200 rounded-sm" />
                <span className="w-1.5 h-6 bg-primary-blue rounded-sm" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 flex items-center justify-center shrink-0">
                <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F1F5F9" strokeWidth="3.5" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#10B981" strokeWidth="3.5" strokeDasharray="100" strokeDashoffset="28" strokeLinecap="round" />
                </svg>
                <div className="flex flex-col items-center">
                  <span className="text-[11px] font-bold text-emerald-600 leading-none">72%</span>
                  <span className="text-[7px] font-semibold text-slate-400 uppercase tracking-wide leading-none mt-0.5">Ready</span>
                </div>
              </div>

              {/* Step indicator tag */}
              <div className="flex-grow bg-slate-50/70 border border-slate-100 rounded-xl p-2.5 text-left text-xs relative">
                <span className="text-[9px] font-semibold text-slate-400">Next Step</span>
                <p className="font-bold text-slate-700 mt-0.5">Learn React Testing</p>
                <span className="inline-block px-1.5 py-0.5 text-[8px] font-bold bg-rose-50 text-rose-500 border border-rose-100 rounded-full uppercase mt-1">High Priority</span>
                {/* Connector line to right */}
                <div className="absolute top-1/2 -right-8 w-8 border-t border-dashed border-blue-300 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Features bullet list */}
          <div className="flex flex-col gap-4 relative z-10">
            {/* Feature 1 */}
            <div className="flex gap-3.5 items-start">
              <div className="p-2 bg-blue-50 text-primary-blue rounded-xl">
                <Target className="h-5 w-5 stroke-[2]" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-dark-navy">Find Your Gaps</h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Get a clear view of the skills holding you back.</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex gap-3.5 items-start">
              <div className="p-2 bg-blue-50 text-primary-blue rounded-xl">
                <Map className="h-5 w-5 stroke-[2]" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-dark-navy">Follow a Smart Roadmap</h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Personalized learning path curated just for you.</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex gap-3.5 items-start">
              <div className="p-2 bg-blue-50 text-primary-blue rounded-xl">
                <TrendingUp className="h-5 w-5 stroke-[2]" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-dark-navy">Grow With Confidence</h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Track progress and move closer to your dream role.</p>
              </div>
            </div>
          </div>

          {/* Testimonial Box */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-left relative z-10">
            <p className="text-xs italic font-semibold text-slate-500 leading-relaxed">
              "CareerLens helped me go from confused to confident about my career path."
            </p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-[11px] font-bold text-slate-400">— Student, BTech CSE</span>
              <div className="flex gap-0.5 text-amber-400">
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Login form container) */}
        <div className="lg:col-span-6 w-full flex justify-center">
          <div className="w-full max-w-md bg-white border border-slate-200/80 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.02)] rounded-3xl p-6 sm:p-8 flex flex-col justify-center">
            
            {/* Header branding visible on mobile only */}
            <div className="flex lg:hidden justify-center mb-8">
              <Link to="/">
                <Logo />
              </Link>
            </div>

            {/* Welcome Headings */}
            <div className="text-center sm:text-left mb-8">
              <h2 className="text-2xl font-extrabold text-dark-navy tracking-tight">Welcome back 👋</h2>
              <p className="text-sm text-slate-400 mt-1.5 font-medium">Glad to see you again!</p>
            </div>

            {/* Success Notification */}
            {success && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-3 text-left">
                <span className="flex h-8 w-8 rounded-full bg-emerald-100 text-emerald-600 items-center justify-center shrink-0">
                  <Check className="h-4 w-4 stroke-[3]" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-emerald-800">Login Successful!</h4>
                  <p className="text-xs text-emerald-600 font-medium mt-0.5">Redirecting you to the dashboard...</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* OAuth buttons */}
              <div className="w-full">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 bg-white rounded-xl shadow-sm transition-all duration-200 text-sm font-bold text-slate-700 cursor-pointer"
                >
                  {/* Google Icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Continue with Google
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3.5 my-1.5">
                <span className="flex-grow border-t border-slate-100" />
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">or</span>
                <span className="flex-grow border-t border-slate-100" />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2 text-left">
                <label className="text-xs sm:text-sm font-bold text-slate-700">Email address</label>
                <div className={`relative flex items-center border rounded-xl bg-slate-50/20 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-primary-blue transition-all ${
                  errors.email ? 'border-rose-300 ring-2 ring-rose-100/50' : 'border-slate-200'
                }`}>
                  <Mail className="absolute left-4 h-4.5 w-4.5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 text-sm font-semibold text-slate-700 bg-transparent rounded-xl focus:outline-none placeholder:text-slate-400 placeholder:font-medium"
                  />
                </div>
                {errors.email && (
                  <span className="text-[11.5px] font-semibold text-rose-500 mt-1 pl-1">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-2 text-left">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-slate-700">Password</label>
                  <a href="#" className="text-xs font-bold text-primary-blue hover:text-blue-700 transition-colors">
                    Forgot password?
                  </a>
                </div>
                <div className={`relative flex items-center border rounded-xl bg-slate-50/20 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-primary-blue transition-all ${
                  errors.password ? 'border-rose-300 ring-2 ring-rose-100/50' : 'border-slate-200'
                }`}>
                  <Lock className="absolute left-4 h-4.5 w-4.5 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors({ ...errors, password: null });
                    }}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-3 text-sm font-semibold text-slate-700 bg-transparent rounded-xl focus:outline-none placeholder:text-slate-400 placeholder:font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-[11.5px] font-semibold text-rose-500 mt-1 pl-1">
                    {errors.password}
                  </span>
                )}
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2.5 text-left py-1">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-primary-blue border-slate-300 rounded focus:ring-primary-blue/30 cursor-pointer"
                />
                <label htmlFor="remember-me" className="text-xs sm:text-sm font-semibold text-slate-500 select-none cursor-pointer">
                  Remember me
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 text-center text-sm font-bold text-white bg-primary-blue hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-200 active:scale-[0.99] cursor-pointer"
              >
                Sign in
              </button>

            </form>

            {/* Bottom Navigation */}
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-8 text-center select-none">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary-blue hover:text-blue-700 font-bold transition-colors">
                Sign up
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
