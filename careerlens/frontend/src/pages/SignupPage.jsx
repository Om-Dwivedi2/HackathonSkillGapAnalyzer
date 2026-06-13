import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, Shield, Zap, Rocket, Star, Sparkles, Check, Info } from 'lucide-react';
import Logo from '../components/common/Logo';
import { useAuth } from '../components/common/AuthContext';

export default function SignupPage() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleValidation = () => {
    const tempErrors = {};
    if (!name) {
      tempErrors.name = 'Full name is required';
    } else if (name.length < 2) {
      tempErrors.name = 'Please enter a valid name';
    }

    if (!email) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      tempErrors.password = 'Password is required';
    } else if (password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters long';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      signup(name, email);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate('/'); // Redirect to landing page on successful sign up mockup
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex items-stretch font-sans antialiased text-dark-navy">
      {/* Split Layout Container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 gap-8 items-center">
        
        {/* Left Column (Brand info/features) - hidden on mobile/tablet */}
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
                Start your journey <br />
                towards your <br />
                <span className="text-primary-blue">dream role.</span>
              </h1>
              <p className="text-sm text-slate-500 mt-3 font-medium leading-relaxed max-w-md">
                Create your account and unlock AI-powered insights, personalized roadmaps, and career growth.
              </p>
            </div>
          </div>

          {/* Clipboard Illustration Graphics Mockup */}
          <div className="relative flex justify-center items-center h-48 w-full z-10 my-2">
            {/* Main clipboard card */}
            <div className="relative w-44 bg-white border border-slate-100 rounded-2xl p-4 shadow-md flex flex-col gap-2">
              {/* Clipboard binder clip */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-slate-200 rounded-md" />
              {/* Dummy lines representing report items */}
              <div className="flex items-center gap-2 mt-2">
                <span className="w-6 h-6 rounded-full bg-blue-50 text-primary-blue flex items-center justify-center text-[10px] font-bold">
                  <User className="h-3 w-3 stroke-[2.5]" />
                </span>
                <div className="flex flex-col gap-1 w-full">
                  <span className="w-16 h-2 bg-slate-100 rounded" />
                  <span className="w-10 h-1.5 bg-slate-50 rounded" />
                </div>
              </div>
              <div className="border-t border-slate-50 pt-2 flex flex-col gap-2">
                <span className="w-full h-2 bg-slate-50 rounded" />
                <span className="w-4/5 h-2 bg-slate-50 rounded" />
                <span className="w-3/5 h-2 bg-slate-50 rounded" />
              </div>
              {/* Mini Chart block */}
              <div className="flex items-end gap-1 justify-end mt-1">
                <span className="w-2.5 h-3 bg-blue-100 rounded-sm" />
                <span className="w-2.5 h-5 bg-blue-300 rounded-sm" />
                <span className="w-2.5 h-7 bg-primary-blue rounded-sm" />
              </div>
            </div>

            {/* Floating graduation cap (top-left) */}
            <div className="absolute top-4 left-1/4 -translate-x-4 p-2 bg-white border border-slate-50 rounded-xl shadow-md text-primary-blue transform -rotate-12 animate-bounce-slow">
              <Shield className="h-5 w-5" />
            </div>

            {/* Floating trend line (top-right) */}
            <div className="absolute top-10 right-1/4 translate-x-4 p-2 bg-white border border-slate-50 rounded-xl shadow-md text-emerald-500 transform rotate-12">
              <Zap className="h-5 w-5" />
            </div>

            {/* Floating Star (bottom-right) */}
            <div className="absolute bottom-6 right-1/4 p-2 bg-white border border-slate-50 rounded-xl shadow-md text-indigo-500 transform -rotate-6">
              <Star className="h-5 w-5 fill-indigo-50 text-indigo-400" />
            </div>
          </div>

          {/* Features bullet list */}
          <div className="flex flex-col gap-4 relative z-10">
            {/* Feature 1 */}
            <div className="flex gap-3.5 items-start">
              <div className="p-2 bg-blue-50 text-primary-blue rounded-xl">
                <Shield className="h-5 w-5 stroke-[2]" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-dark-navy">100% Secure</h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Your data is safe and never shared.</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex gap-3.5 items-start">
              <div className="p-2 bg-blue-50 text-primary-blue rounded-xl">
                <Zap className="h-5 w-5 stroke-[2]" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-dark-navy">AI-Powered Insights</h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Get smart recommendations tailored to you.</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex gap-3.5 items-start">
              <div className="p-2 bg-blue-50 text-primary-blue rounded-xl">
                <Rocket className="h-5 w-5 stroke-[2]" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-dark-navy">Faster Career Growth</h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Learn relevant skills and stay ahead of the curve.</p>
              </div>
            </div>
          </div>

          {/* Testimonial Avatar Card */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-left relative z-10 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-dark-navy">Join thousands of learners building their dream careers.</h4>
            <div className="flex items-center gap-3">
              {/* Stacked avatars */}
              <div className="flex -space-x-2.5 overflow-hidden">
                <div className="inline-block h-7.5 w-7.5 rounded-full ring-2 ring-white bg-gradient-to-tr from-pink-300 to-indigo-300" />
                <div className="inline-block h-7.5 w-7.5 rounded-full ring-2 ring-white bg-gradient-to-tr from-purple-300 to-blue-300" />
                <div className="inline-block h-7.5 w-7.5 rounded-full ring-2 ring-white bg-gradient-to-tr from-yellow-300 to-rose-300" />
                <div className="inline-block h-7.5 w-7.5 rounded-full ring-2 ring-white bg-gradient-to-tr from-emerald-300 to-cyan-300" />
              </div>
              <span className="text-[11px] font-bold text-primary-blue bg-blue-50/70 border border-blue-100 rounded-full px-2 py-0.5 uppercase tracking-wide">
                +10K
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (Signup form container) */}
        <div className="lg:col-span-6 w-full flex justify-center">
          <div className="w-full max-w-md bg-white border border-slate-200/80 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.02)] rounded-3xl p-6 sm:p-8 flex flex-col justify-center">
            
            {/* Header branding visible on mobile only */}
            <div className="flex lg:hidden justify-center mb-8">
              <Link to="/">
                <Logo />
              </Link>
            </div>

            {/* Form Title */}
            <div className="text-center sm:text-left mb-8">
              <h2 className="text-2xl font-extrabold text-dark-navy tracking-tight">Create your account</h2>
              <p className="text-sm text-slate-400 mt-1.5 font-medium">Let's build your future together.</p>
            </div>

            {/* Success Notification */}
            {success && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-3 text-left">
                <span className="flex h-8 w-8 rounded-full bg-emerald-100 text-emerald-600 items-center justify-center shrink-0">
                  <Check className="h-4 w-4 stroke-[3]" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-emerald-800">Account Created!</h4>
                  <p className="text-xs text-emerald-600 font-medium mt-0.5">Redirecting you to the login screen...</p>
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
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Sign up with Google
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3.5 my-1.5">
                <span className="flex-grow border-t border-slate-100" />
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">or</span>
                <span className="flex-grow border-t border-slate-100" />
              </div>

              {/* Full Name Input */}
              <div className="flex flex-col gap-2 text-left">
                <label className="text-xs sm:text-sm font-bold text-slate-700">Full name</label>
                <div className={`relative flex items-center border rounded-xl bg-slate-50/20 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-primary-blue transition-all ${
                  errors.name ? 'border-rose-300 ring-2 ring-rose-100/50' : 'border-slate-200'
                }`}>
                  <User className="absolute left-4 h-4.5 w-4.5 text-slate-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    placeholder="Enter your full name"
                    className="w-full pl-12 pr-4 py-3 text-sm font-semibold text-slate-700 bg-transparent rounded-xl focus:outline-none placeholder:text-slate-400 placeholder:font-medium"
                  />
                </div>
                {errors.name && (
                  <span className="text-[11.5px] font-semibold text-rose-500 mt-1 pl-1">
                    {errors.name}
                  </span>
                )}
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
                <label className="text-xs sm:text-sm font-bold text-slate-700">Password</label>
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
                    placeholder="Create a strong password"
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
                
                {/* Password Helper text below field */}
                <div className="flex items-center gap-1.5 text-slate-400 mt-1.5 pl-1 select-none">
                  <Check className={`h-4 w-4 shrink-0 stroke-[3.5] ${password.length >= 8 ? 'text-emerald-500' : 'text-slate-300'}`} />
                  <span className={`text-[11.5px] font-bold ${password.length >= 8 ? 'text-emerald-600' : 'text-slate-400'}`}>
                    Must be at least 8 characters long
                  </span>
                </div>
                
                {errors.password && (
                  <span className="text-[11.5px] font-semibold text-rose-500 mt-1 pl-1">
                    {errors.password}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 text-center text-sm font-bold text-white bg-primary-blue hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-200 active:scale-[0.99] mt-2 cursor-pointer"
              >
                Create account
              </button>

            </form>

            {/* Bottom Navigation */}
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-8 text-center select-none">
              Already have an account?{' '}
              <Link to="/login" className="text-primary-blue hover:text-blue-700 font-bold transition-colors">
                Sign in
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
